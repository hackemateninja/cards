import { IMake } from '@def/IMake';

interface IDataMakes {
	makes: IMake[],
	selectedMake: IMake
}

export interface IStateMakes {
	data: IDataMakes
}