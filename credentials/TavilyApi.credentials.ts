//eslint-disable-next-line n8n-nodes-base/cred-filename-against-convention
import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';


export class TavilyApi implements ICredentialType {
	name = 'tavilyApi';
	displayName = 'Tavily API';
	// Uses the link to this tutorial as an example
	// Replace with your own docs links when building your own nodes
	documentationUrl =
		'https://docs.tavily.com/docs/welcome';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			description: "The API key to access Tavily",
			default: "",
		},
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			description: "Base URL of Tavily's API",
			default: 'https://api.tavily.com',
		},
	];
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.tavily.com',
			url: '/search',
			method: 'POST',
		},
	};
}



// curl -X POST https://api.tavily.com/search \
//   -H "Content-Type: application/json" \
//   -H "Authorization: Bearer tvly-YOUR_API_KEY" \
//   -d '{"query": "Who is Leo Messi?"}'


// export class TavilyApi implements ICredentialType {
// 	name = 'tavilyApi';
// 	displayName = 'Tavily API';
// 	documentationUrl = 'https://docs.tavily.com/api-reference/introduction'; // :contentReference[oaicite:5]{index=5}

// 	properties: INodeProperties[] = [
// 		{
// 			displayName: 'API Key',
// 			name: 'Authorization',
// 			type: 'string',
// 			typeOptions: { password: true },
// 			default: '',
// 		},

// 	];
// 	authenticate: IAuthenticateGeneric = {
// 		type: 'generic',
// 		properties: {
// 			headers: {
// 				Authorization: '={{$credentials.Authorization}}'
// 			}
// 		}
// 	}
// }
