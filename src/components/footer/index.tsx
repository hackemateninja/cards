// Components
import Container from '@/comp/container';

// Utilities
import getYear from '@/util/get-year';

// Styles
import { FooterWrapper } from './style';

const Footer: React.FC = () => {
	const year = getYear();
	return (
		<FooterWrapper>
			<p>Footer change</p>
		</FooterWrapper>
	);
};

export default Footer;