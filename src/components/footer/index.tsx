// Components
import Container from '@/comp/container';
import Row from '@/comp/container/row';
import Column from '@/comp/container/column';

// Utilities
import getYear from '@/util/get-year';

// Definitions
import { IFooter } from '@/def/IFooter';

// Styles
import { FooterWrapper, FooterContainer, FooterList, FooterAnchor, FooterText } from './style';

const FirstColumn = [
	{ url: '/', title: 'About Us' },
	{ url: '/', title: 'Contact Us' },
	{ url: '/', title: 'Privacy Policy' },
	{ url: '/', title: 'Do NOT Sell my Personal Information' }
];
const SecondColumn = [
	{ url: '/', title: 'Terms of User' },
	{ url: '/', title: 'Fraud Awareness' },
	{ url: '/', title: 'Advice' },
	{ url: '/', title: 'Best Cars' }
];
const ThirdColumn = [
	{ url: '/', title: 'Calculators' },
	{ url: '/', title: 'Sitemap' }
];

const Footer: React.FC = () => {
	const year = getYear();
	return (
		<FooterWrapper>
			<Container>
				<Row>
					<Column xs={1} sm={1} md={3}>
						<FooterContainer>
							{FirstColumn.map((item: IFooter, index: number) => (
								<FooterList key={index}>
									<FooterAnchor href={item.url}>{item.title}</FooterAnchor>
								</FooterList>
							))}
						</FooterContainer>
					</Column>
					<Column xs={1} sm={1} md={3}>
						<FooterContainer>
							{SecondColumn.map((item: IFooter, index: number) => (
								<FooterList key={index}>
									<FooterAnchor href={item.url}>{item.title}</FooterAnchor>
								</FooterList>
							))}
						</FooterContainer>
					</Column>
					<Column xs={1} sm={1} md={3}>
						<FooterContainer>
							{ThirdColumn.map((item: IFooter, index: number) => (
								<FooterList key={index}>
									<FooterAnchor href={item.url}>{item.title}</FooterAnchor>
								</FooterList>
							))}
						</FooterContainer>
					</Column>
					<Column xs={1} sm={1} md={1}>
						<FooterText>© {year} AutoWeb, Inc.</FooterText>
					</Column>
				</Row>
			</Container>
		</FooterWrapper>
	);
};

export default Footer;