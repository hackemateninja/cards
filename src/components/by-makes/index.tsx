// Packages
import Scroll from 'react-scroll';

// Definitions
import { IMake } from '@def/IMake';

// Components
import Row from '@comp/container/row';
import Column from '@comp/container/column';
import Display from '@comp/container/display';
import MakeList from "@comp/make-list";
import Button from '@comp/button';
import Select from '@comp/form-elements/select';

// Styles
import { ByMakesWrapper, ByMakesTitle, ByMakesImg, ByMakesSideTitle, ByMakesSideText } from './style';

const options = [
	{id: '1', name: 'Name 1', value: 'value-1'},
	{id: '2', name: 'Name 2', value: 'value-2'},
	{id: '3', name: 'Name 3', value: 'value-3'},
	{id: '4', name: 'Name 4', value: 'value-4'},
	{id: '5', name: 'Name 5', value: 'value-5'}
];

const ByMakes: React.FC = () => {
	const Element = Scroll.Element;
	return (
		<ByMakesWrapper>
			<Element name="browseByMake">
				<ByMakesTitle>Browse by Make</ByMakesTitle>
				<Row>
					<Column xs={1} sm={1} md='auto'>
						<MakeList type="accordion" />
					</Column>
					<Column xs={1} sm={1} md={4}>
						<Display hide="mobile">
							<ByMakesImg src="/assets/img/makes-image.jpg" alt="Makes Image" />
							<ByMakesSideTitle>Because you know or like the manufacturer</ByMakesSideTitle>
							<ByMakesSideText>It’s easier to find your next car when you already know what you’re looking for. Try searching the option below.</ByMakesSideText>
							<form>
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
								<Button>Begin Search</Button>
							</form>
						</Display>
					</Column>
				</Row>
			</Element>
		</ByMakesWrapper>
	);
};

export default ByMakes;