export interface IList {
    type: string,
    columns: number
	items: IListContent[]
}

export interface IListContent {
	url: string,
	title: string
}
