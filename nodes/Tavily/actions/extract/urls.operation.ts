import type { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';
import { tavilyApiRequest } from '../../transport';
import { updateDisplayOptions } from '../../display';
import { extractOptions } from "../../descriptions";


export const properties: INodeProperties[] = [
	{
		displayName: 'URLs',
		name: 'urls',
		description: 'URLs for Tavily to extract',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'e.g. N8N community nodes',
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add option',
		default: {},
		options: extractOptions,
	},
];

const displayOptions = {
	show: {
		resource: ['extract'],
		operation: ['urls'],
	},
};

export const description = updateDisplayOptions(displayOptions, properties);

export async function execute(this: IExecuteFunctions, index: number) {
	const urls = this.getNodeParameter('urls', index) as string;
	const options = this.getNodeParameter('options', index) as IDataObject;
	console.log(options);

	const body: IDataObject = {
		'urls': urls,
		...options,
	};

	const endpoint = "/extract";

	const responseData = await tavilyApiRequest.call(this, 'POST', endpoint, body);
	console.log(responseData);

	return this.helpers.constructExecutionMetaData(
		this.helpers.returnJsonArray(responseData as IDataObject[]),
		{itemData: {item: index}},
	);
}
