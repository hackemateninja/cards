export interface IList {
	type: string,
	columns: number
	items: IListContent[]
}

export interface IListContent {
	url: string,
	title: string
}

export interface IMakesList {
	type?: string
}