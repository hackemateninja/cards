// Styles
import { LogoAnchor, LogoImage } from './style';

const Logo: React.FC = ( props ) => {
	return (
		<LogoAnchor href="/" title="Used Cars For Sale | Pre-Owned Cars, Trucks and SUVs at UsedCars.com">
			<LogoImage><use xlinkHref="#usedcars-logo" /></LogoImage>
		</LogoAnchor>
	);
};

export default Logo;