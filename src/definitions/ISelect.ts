import { IPlainObject } from '@def/IPlainObject';

export interface ISelect {
	id: string,
	value: string,
	name: string,
	label: string,
	error: boolean,
	message: string,
	options?: IPlainObject[],
	handlerChange?: ( event: React.ChangeEvent<HTMLSelectElement> ) => void
}