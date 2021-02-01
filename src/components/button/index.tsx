// Definitions
import { IPlainObject } from '@def/IPlainObject';

// Styles
import { ButtonWrapper } from './style';

const Button: React.FC<IPlainObject> = ( props ) => {
	return (
		props.href !== undefined ? (
			<ButtonWrapper as="a" href={props.href} st={props.st}>
				<span>{props.children}</span>
			</ButtonWrapper>
		) : (
			<ButtonWrapper st={props.st}>
				<span>{props.children}</span>
			</ButtonWrapper>
		)
	);
};

export default Button;