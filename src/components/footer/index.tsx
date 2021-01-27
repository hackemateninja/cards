// Components
import Container from '@comp/container';

// Utilities
import getYear from '@util/get-year';

// Definitions
import { IFooter } from '@def/IFooter';

// Styles
import { FooterWrapper, FooterContainer, FooterList, FooterAnchor, FooterText } from './style';

const FirstColumn = [
	{ url: '/', title: 'About Us' },
	{ url: '/', title: 'Contact Us' },
	{ url: '/', title: 'Privacy Policy' },
	{ url: '/', title: 'Do NOT Sell my Personal Information' },
	{ url: '/', title: 'Terms of User' },
	{ url: '/', title: 'Fraud Awareness' },
	{ url: '/', title: 'Advice' },
	{ url: '/', title: 'Best Cars' },
	{ url: '/', title: 'Calculators' },
	{ url: '/', title: 'Sitemap' }
];

const Footer: React.FC = () => {
	const year = getYear();
	return (
		<FooterWrapper>
			<Container>
				<FooterContainer>
					{FirstColumn.map((item: IFooter, index: number) => (
						<FooterList key={index}>
							<FooterAnchor href={item.url}>{item.title}</FooterAnchor>
						</FooterList>
					))}
				</FooterContainer>
				<FooterText>© {year} AutoWeb, Inc.</FooterText>
			</Container>
		</FooterWrapper>
	);
};

export default Footer;