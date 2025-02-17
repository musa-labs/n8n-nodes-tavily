import type {
	IDataObject,
	IExecuteFunctions,
	IHookFunctions,
	IHttpRequestMethods,
	ILoadOptionsFunctions,
	IRequestOptions,
} from 'n8n-workflow';

export async function tavilyApiRequest(
	this: IHookFunctions | IExecuteFunctions | ILoadOptionsFunctions,
	method: IHttpRequestMethods,
	resource: string,
	body: IDataObject = {},
	query: IDataObject = {},
	uri?: string,
	headers: IDataObject = {},
	option: IDataObject = {json: true},
) {
	const credentials = await this.getCredentials('tavilyApi');
	let apiURL = `https://api.tavily.com${resource}`;
	// console.log(apiURL);

	const options: IRequestOptions = {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${credentials.apiKey}`,
		},
		method,
		body,
		qs: query,
		uri: uri || apiURL,
	};
	try {
		Object.assign(options, option);

		if (Object.keys(headers).length !== 0) {
			options.headers = Object.assign({}, options.headers, headers);
		}

		if (Object.keys(body).length === 0) {
			delete options.body;
		}

		console.log(JSON.stringify(options));

		return await this.helpers.requestWithAuthentication.call(
			this,
			'tavilyApi',
			options,
		);
	} catch (error) {
		// if (
		// 	((error.message || '').toLowerCase().includes('bad request') ||
		// 		(error.message || '').toLowerCase().includes('unknown error')) &&
		// 	error.description
		// ) {
		// 	let updatedError;
		// 	// Try to return the error prettier, otherwise return the original one replacing the message with the description
		// 	try {
		// 		updatedError = prepareApiError.call(this, error);
		// 	} catch (e) {}

		// 	if (updatedError) throw updatedError;

		// 	error.message = error.description;
		// 	error.description = '';
		// }

		throw error;
	}
}
