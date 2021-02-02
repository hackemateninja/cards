// Definitions
import { ISpaces } from '@def/ISpaces';

// Styles
import { SpacesWrapper } from './style';

const Spaces: React.FC<ISpaces> = (props) => {
	return (
		<SpacesWrapper type={props.type} bg={props.bg}>
			{props.children}
		</SpacesWrapper>
	);
};

export default Spaces;