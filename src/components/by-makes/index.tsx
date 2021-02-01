// Definitions
import { IMake } from '@def/IMake';

// Components
import Row from '@comp/container/row';
import Column from '@comp/container/column';
import Display from '@comp/container/display';
import MakeList from "@comp/make-list";

// Styles
import { ByMakesWrapper, ByMakesTitle, ByMakesImg, ByMakesSideTitle, ByMakesSideText } from './style';

const ByMakes: React.FC = () => {
	return (
		<ByMakesWrapper>
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
					</Display>
				</Column>
			</Row>
		</ByMakesWrapper>
	);
};

export default ByMakes;