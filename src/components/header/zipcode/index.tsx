// Styles
import { ZipCodeWrapper, ZipCodeInput, ZipCodeIcon } from './style';

const ZipCode: React.FC = (props) => {
	const onlyNumbers = ( e: React.KeyboardEvent<HTMLInputElement> ) => !e.key.match( /^[0-9]+$/ ) && e.preventDefault();
	const handlerKeyPress = ( e: React.KeyboardEvent<HTMLInputElement> ) => onlyNumbers( e );
	
	return (
		<ZipCodeWrapper>
			<ZipCodeIcon><use xlinkHref="#icon-location" /></ZipCodeIcon>
			<ZipCodeInput type="tel" placeholder="33132" maxLength={5} onKeyPress={handlerKeyPress} />
		</ZipCodeWrapper>
	);
};

export default ZipCode;