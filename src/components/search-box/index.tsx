// Components
import Button from '@comp/button';
import Input from '@comp/form-elements/input';
import Select from '@comp/form-elements/select';
import SearchNav from './search-nav';

// Styles
import { SearchWrapper, SearchContent, SearchForm, SearchTitle } from './style';

const options = [
	{id: '1', name: 'Name 1', value: 'value-1'},
	{id: '2', name: 'Name 2', value: 'value-2'},
	{id: '3', name: 'Name 3', value: 'value-3'},
	{id: '4', name: 'Name 4', value: 'value-4'},
	{id: '5', name: 'Name 5', value: 'value-5'}
];

const SearchBox: React.FC = ( props ) => {
	return (
		<SearchWrapper>
			<SearchContent>
				<SearchTitle>Find your best deal quick and easy</SearchTitle>
				<SearchForm>
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
					<Input
						id="zip-code-search"
						name="zipcode"
						type="tel"
						label="Zip Code"
						error={false}
						message="Enter a valid"
						onlyNumbers
					/>
					<Button>Search</Button>
				</SearchForm>
			</SearchContent>
			<SearchNav />
		</SearchWrapper>
	);
};

export default SearchBox;