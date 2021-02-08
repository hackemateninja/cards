// Definitions
import { IPlainObject } from '@def/IPlainObject';

// Styles
import { ButtonWrapper } from './style';

const Button: React.FC<IPlainObject> = ( props ) => {
	return (
		props.href !== undefined ? (
			<ButtonWrapper as="a" href={props.href} variation={props.variation}>
				<span>{props.children}</span>
			</ButtonWrapper>
		) : (
			<ButtonWrapper variation={props.variation} type={props.type}>
				<span>{props.children}</span>
			</ButtonWrapper>
		)
	);
};

export default Button;