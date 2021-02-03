import { IModel } from '@def/IModel';

interface IDataModels {
	models: IModel[],
	selectedModel: IModel
}

export interface IStateModels {
	data: IDataModels
}