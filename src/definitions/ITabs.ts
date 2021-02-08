export interface ITab {
	label: string,
	id: string
}

export interface ITabs {
	activeTab?: string,
	children: React.ReactNode[]
}