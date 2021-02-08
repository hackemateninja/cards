// Packages
import Scroll from 'react-scroll';

// Components
import Row from '@comp/container/row';
import Column from '@comp/container/column';
import Display from '@comp/container/display';
import MakeList from "@comp/make-list";
import ByMakeForm from '@comp/forms/by-make';
import SectionTitle from '@comp/section-title';

// Styles
import { ByMakesWrapper, ByMakesImg, ByMakesSideTitle, ByMakesSideText } from './style';

const ByMakes: React.FC = () => {
	const Element = Scroll.Element;
	return (
		<ByMakesWrapper>
			<Element name="browseByMake">
				<SectionTitle>Browse by Make</SectionTitle>
				<Row>
					<Column xs={1} sm={1} md='auto'>
						<MakeList type="accordion" />
					</Column>
					<Column xs={1} sm={1} md={4}>
						<Display hide="mobile">
							<ByMakesImg src="/assets/img/makes-image.jpg" alt="Makes Image" />
							<ByMakesSideTitle>Because you know or like the manufacturer</ByMakesSideTitle>
							<ByMakesSideText>It’s easier to find your next car when you already know what you’re looking for. Try searching the option below.</ByMakesSideText>
							<ByMakeForm button="Begin Search" hideZip />
						</Display>
					</Column>
				</Row>
			</Element>
		</ByMakesWrapper>
	);
};

export default ByMakes;