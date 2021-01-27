// Styles
import { ZipCodeWrapper, ZipCodeInput, ZipCodeIcon } from './style';

const ZipCode: React.FC = ( props ) => {
	return (
		<ZipCodeWrapper>
			<ZipCodeIcon><use xlinkHref="#icon-location" /></ZipCodeIcon>
			<ZipCodeInput type="tel" placeholder="33132" maxLength={5} />
		</ZipCodeWrapper>
	);
};

export default ZipCode;