// Packages
import styled from 'styled-components';

const ZipCodeWrapper = styled.div`
	margin-left: auto;
	order: 1;
	max-width: 100px;

	@media screen and ( min-width: 1024px ) {
		order: 3;
		margin-left: 0;
	}
`;

const ZipCodeInput = styled.input`
	outline: none;
	display: block;
	width: 100%;
	height: 32px;
	border: 0;
	background: rgba( 0, 0, 0, .2 );
	padding: 0 14px 0 38px;
	font-size: 16px;
	line-height: 20px;
	font-weight: bold;
	color: #FFF;
	border-radius: 4px;
	appearance: none;
	transition: all ease .3s;
	&::-webkit-input-placeholder {
		color: #fff;
		transition: all ease .3s;
	}
	&::-moz-placeholder {
		color: #fff;
		transition: all ease .3s;
	}
	&:-ms-input-placeholder {
		color: #fff;
		transition: all ease .3s;
	}
	&:-moz-placeholder {
		color: #fff;
		transition: all ease .3s;
	}
	&:focus::-webkit-input-placeholder {
		color: rgba( 255, 255, 255, 0.5 )
	}
	&:focus::-moz-placeholder {
		color: rgba( 255, 255, 255, 0.5 )
	}
	&:focus:-ms-input-placeholder {
		color: rgba( 255, 255, 255, 0.5 )
	}
	&:focus:-moz-placeholder {
	color: rgba( 255, 255, 255, 0.5 )
	}
`;

const ZipCodeIcon = styled.svg`
	position: absolute;
	display: block;
	top: 8px;
	left: 8px;
	width: 16px;
	height: 16px;
	z-index: 2;
	fill: #00a0ff;
`;

export {
	ZipCodeWrapper,
	ZipCodeInput,
	ZipCodeIcon
};