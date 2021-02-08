// Packages
import styled, { css } from 'styled-components';

const FormElement = styled.div`
	margin-bottom: 10px;
`;

const FormElementArrow = styled.span<{ focus: boolean }>`
	position: absolute;
	top: 21px;
	right: 15px;
	width: 0;
	height: 0;
	border-left: 5px solid transparent;
	border-right: 5px solid transparent;
	border-top: 5px solid #0AE61E;
	transform: ${props => props.focus ? 'rotate( -180deg )' : 'none'};
	transition: all cubic-bezier( .68, -.55, .265, 1.55 ) .3s;
`;

const FormElementLabel = styled.label<{ active: boolean, icon?: boolean, select?: boolean }>`
	pointer-events: none;
	cursor: text;
	font-size: 16px;
	line-height: 18px;
	color: ${props => props.theme.colors.label};
	position: absolute;
	top: 13px;
	left: ${props => props.icon ? '35px' : '15px'};
	transform-origin: left;
	backface-visibility: hidden;
	transform: ${props => props.active ? 'translateY(-8px) scale(.75) perspective(1px) translateZ(0)' : 'none'};
	transition: all cubic-bezier( .68, -.55, .265, 1.55 ) .3s;
	${props => props.active && props.icon && css`
		transform: translateX( -17px ) translateY(-10px) scale(.8) perspective(1px) translateZ(0);
	`}
	${props => props.select && css`
		opacity: ${props.active ? '1' : '0'};
	`}
`;

const FormElementIcon = styled.svg<{ active: boolean }>`
	pointer-events: none;
	position: absolute;
	top: 21px;
	left: 18px;
	width: 12px;
	height: 12px;
	transition: all cubic-bezier( .68, -.55, .265, 1.55 ) .3s;
	transform: ${props => props.active ? 'translateY( 7px )' : 'none'};
`;

const FormElementSuccess = styled.svg<{ success: boolean }>`
	position: absolute;
	top: 50%;
	right: 12px;
	margin-top: -7px;
	width: 15px;
	height: 15px;
	pointer-events: none;
	fill: #08CD5C;
	transition: all cubic-bezier( .68, -.55, .265, 1.55 ) .3s;
	opacity: ${props => props.success ? '1' : '0'};
	transform: ${props => props.success ? 'scale( 1 )' : 'scale( .5 )'};
`;

const FormElementMessage = styled.span`
	font-size: 12px;
	line-height: 16px;
	color: #E31818;
`;

const Element = styled.input<{ icon?: boolean, as?: string, active?: boolean }>`
	outline: none;
	background: #FFF;
	width: 100%;
	height: 44px;
	border: 1px solid rgba( 0, 0, 0, .2 );
	border-radius: 4px;
	padding: 15px 40px 0 13px;
	color: ${props => props.theme.colors.input};
	${props => props.as === 'select' && css`
		padding: ${props.active ? '15px 40px 0 13px' : '0 40px 0 13px'};
	`}
	${props => (props.active || props.as === undefined ) && css`
		font-weight: bold;
		color: #054664;
	`}
	font-size: 16px;
	transition: all cubic-bezier( .68, -.55, .265, 1.55 ) .3s;
	&:-webkit-autofill {
		box-shadow: 0 0 0 53px white inset;
    -webkit-text-fill-color: ${props => props.theme.colors.input};
	}
	&:-webkit-autofill:focus {
		box-shadow: 0 0 0 53px white inset;
		-webkit-text-fill-color: ${props => props.theme.colors.input};
	}

	&:focus {
		border-color: #00A0FF;
	}
`;

export {
	FormElement,
	FormElementArrow,
	FormElementLabel,
	FormElementIcon,
	FormElementSuccess,
	FormElementMessage,
	Element
}