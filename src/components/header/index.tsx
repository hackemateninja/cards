// Components
import Container from '@comp/container';
import Logo from './logo';
import Menu from './menu';
import ZipCode from './zipcode';

// Styles
import { HeaderWrapper } from './style';

const Header: React.FC = ( props ) => {
	return (
		<HeaderWrapper>
			<Container>
				<Logo />
				<ZipCode />
				<Menu />
			</Container>
		</HeaderWrapper>
	);
};

export default Header;