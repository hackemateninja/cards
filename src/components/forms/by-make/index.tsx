// Components
import Select from '@comp/form-elements/select';
import Input from '@comp/form-elements/input';
import Button from '@comp/button';

// Definitions
import { IMakeForm } from '@def/IMakeForm';

// Styles
import { ByMakeFormWrapper } from './style';

// Data
const options = [
	{id: '1', name: 'Name 1', value: 'value-1'},
	{id: '2', name: 'Name 2', value: 'value-2'},
	{id: '3', name: 'Name 3', value: 'value-3'},
	{id: '4', name: 'Name 4', value: 'value-4'},
	{id: '5', name: 'Name 5', value: 'value-5'}
];

const ByMakeForm: React.FC<IMakeForm> = ( props ) => {
	return (
		<ByMakeFormWrapper type={props.type}>
			<Select
				id="make"
				value=""
				name="make"
				label="Make"
				error={false}
				message="Please select a"
				options={options}
			/>
			<Select
				id="model"
				value=""
				name="model"
				label="Model"
				error={false}
				message="Please select a"
				options={options}
			/>
			{(!props.hideZip || props.hideZip === undefined) &&
				<Input
					id="zip-code-search"
					name="zipcode"
					type="tel"
					label="Zip Code"
					error={false}
					message="Enter a valid"
					length={5}
					onlyNumbers
				/>
			}
			{props.variation === 'blue' ? <Button type="submit" variation="blue">{props.button}</Button> : <Button type="submit">{props.button}</Button>}
		</ByMakeFormWrapper>
	);
};

export default ByMakeForm;