import {INodeProperties} from "n8n-workflow";

// export const queryOptions: INodeProperties[] = [
// 	{
// 		displayName: 'Query Field 1',
// 		name: 'queryField1',
// 		type: 'fixedCollection',
// 		placeholder: 'Add Address',
// 		default: {
// 			values: { city: '', street: '', postalCode: '', countryOrRegion: '', state: '' },
// 		},
// 		options: [
// 			{
// 				displayName: 'Address',
// 				name: 'values',
// 				values: [
// 					{
// 						displayName: 'City',
// 						name: 'city',
// 						type: 'string',
// 						default: '',
// 					},
// 					{
// 						displayName: 'Country/Region',
// 						name: 'countryOrRegion',
// 						type: 'string',
// 						default: '',
// 					},
// 					{
// 						displayName: 'Postal Code',
// 						name: 'postalCode',
// 						type: 'string',
// 						default: '',
// 					},
// 					{
// 						displayName: 'State',
// 						name: 'state',
// 						type: 'string',
// 						default: '',
// 					},
// 					{
// 						displayName: 'Street',
// 						name: 'street',
// 						type: 'string',
// 						default: '',
// 					},
// 				],
// 			},
// 		],
// 	},
//

export const extractOptions: INodeProperties[] = [
	{
		displayName: 'Include Images',
		name: 'include_images',
		type: 'boolean',
		default: false,
		description: 'Whether to include images in the response',
	},
	{
		displayName: 'Extract Depth',
		name: 'extract_depth',
		type: 'options',
		default: 'basic',
		options: [
			{
				name: 'Basic',
				value: 'basic',
			},
			{
				name: 'Advanced',
				value: 'advanced',
			}
		],
		description: 'Determines the depth of content extraction',
	},
];

export const queryOptions: INodeProperties[] = [
	{
		displayName: 'Topic',
		name: 'topic',
		type: 'string',
		default: 'general',
		description: 'The topic category for the search. Examples: "general", "sports", "technology".',
		placeholder: 'general',
	},
	{
		displayName: 'Search Depth',
		name: 'search_depth',
		type: 'options',
		default: 'basic',
		options: [
			{
				name: 'Basic',
				value: 'basic',
			},
			{
				name: 'Advanced',
				value: 'advanced',
			},
			{
				name: 'Comprehensive',
				value: 'comprehensive',
			},
		],
		description: 'Determines how deep the search should go. Basic is faster but less thorough.',
	},
	{
		displayName: 'Maximum Results',
		name: 'max_results',
		type: 'number',
		default: 1,
		description: 'Maximum number of results to return. Example: 1 for single result, 10 for multiple results.',
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
	},
	{
		displayName: 'Time Range',
		name: 'time_range',
		type: 'options',
		default: 'any',
		options: [
			{
				name: 'Any Time',
				value: 'any',
			},
			{
				name: 'Past 24 Hours',
				value: '24h',
			},
			{
				name: 'Past Week',
				value: '1w',
			},
			{
				name: 'Past Month',
				value: '1m',
			},
		],
		description: 'Time range for the search results. Example: "Past 24 Hours" for recent results.',
	},
	{
		displayName: 'Days',
		name: 'days',
		type: 'number',
		default: 3,
		description: 'Number of days to look back. Example: 3 for three days of history, 7 for a week.',
		typeOptions: {
			minValue: 1,
			maxValue: 365,
		},
	},
	{
		displayName: 'Include Answer',
		name: 'include_answer',
		type: 'boolean',
		default: true,
		description: 'Whether to include the direct answer in the response. Example: Set to true for getting a concise answer.',
	},
	{
		displayName: 'Include Raw Content',
		name: 'include_raw_content',
		type: 'boolean',
		default: false,
		description: 'Whether to include raw content in the response. Example: Set to true to get unformatted content.',
	},
	{
		displayName: 'Include Images',
		name: 'include_images',
		type: 'boolean',
		default: false,
		description: 'Whether to include images in the response. Example: Set to true to get related images.',
	},
	{
		displayName: 'Include Image Descriptions',
		name: 'include_image_descriptions',
		type: 'boolean',
		default: false,
		description: 'Whether to include image descriptions. Example: Set to true to get descriptions of included images.',
	},
	{
		displayName: 'Include Domains',
		name: 'include_domains',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: {},
		description: 'List of domains to specifically include in the search. Example: ["wikipedia.org", "news.com"].',
		options: [
			{
				name: 'domains',
				displayName: 'Domains',
				values: [
					{
						displayName: 'Domain',
						name: 'domain',
						type: 'string',
						default: '',
						placeholder: 'example.com',
						description: 'Domain to include in search results',
					},
				],
			},
		],
	},
	{
		displayName: 'Exclude Domains',
		name: 'exclude_domains',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: {},
		description: 'List of domains to exclude from the search. Example: ["ads.com", "spam.net"].',
		options: [
			{
				name: 'domains',
				displayName: 'Domains',
				values: [
					{
						displayName: 'Domain',
						name: 'domain',
						type: 'string',
						default: '',
						placeholder: 'example.com',
						description: 'Domain to exclude from search results',
					},
				],
			},
		],
	},
];

export const queryFields = [
	{
		name: 'Child Folder Count',
		value: 'childFolderCount',
	},
	{
		name: 'Display Name',
		value: 'displayName',
	},
	{
		name: 'Is Hidden',
		value: 'isHidden',
	},
	{
		name: 'Parent Folder ID',
		value: 'parentFolderId',
	},
	{
		name: 'Total Item Count',
		value: 'totalItemCount',
	},
	{
		name: 'Unread Item Count',
		value: 'unreadItemCount',
	},
];
