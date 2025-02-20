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
		placeholder: 'e.g. https://google.com, https://tavily.com',
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


	const urlArray = urls.split(',').map((url) => url.trim());

	const body: IDataObject = {
		'urls': urlArray,
		...options,
	};

	const endpoint = "/extract";

	const responseData = await tavilyApiRequest.call(this, 'POST', endpoint, body);

	return this.helpers.constructExecutionMetaData(
		this.helpers.returnJsonArray(responseData as IDataObject[]),
		{itemData: {item: index}},
	);
}
