// Packages
import styled from 'styled-components';

const HeroImageWrapper = styled.div`
	margin: 0 -15px;
	padding-bottom: 58%;
	overflow: hidden;

	@media screen and ( min-width: 768px ) {
		margin: 0;
		padding-bottom: 31.65%;
		border-radius: 0 0 4px 4px;
	}
`;

const HeroImageCover = styled.div`
	position: absolute;
	top: -50%;
	left: -50%;
	width: 200%;
	height: 200%;
	
	img {
		position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    min-width: 50%;
    min-height: 50%;
		width: auto;
    height: 50%;

		@media screen and ( min-width: 768px ) {
			width: 50%;
			height: auto;
		}
	}
`;

const HeroImageTitle = styled.h1`
	position: absolute;
	top: 20px;
	left: 0;
	right: 0;
	font-size: 34px;
	line-height: 34px;
	letter-spacing: -1px;
	text-shadow: 0 6px 10px rgba( 0, 0, 0, .5 );
	color: #FFF;
	text-align: center;
	margin: 0;
	z-index: 2;

	span {
		display: block;
	}

	@media screen and ( min-width: 1024px ) {
		top: 25px;
		font-size: 40px;
		line-height: 50px;
	}
	@media screen and ( min-width: 1260px ) {
		top: 25px;
		font-size: 54px;
		line-height: 60px;
	}
`;

export {
	HeroImageWrapper,
	HeroImageCover,
	HeroImageTitle
};