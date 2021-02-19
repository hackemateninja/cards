// Packages
import styled, { css } from 'styled-components';

const GalleryWrapper = styled.div`
	max-width: 400px;
	overflow: hidden;
	margin: 0 auto;
	.flickity-button {
		z-index: 1;
		background-color: #fff;
		width: 32px;
		height: 38px;
		@media screen and ( min-width: 768px ) {
			width: 24px;
			height: 28px;
		}
	}
	.flickity-prev-next-button.previous {
		left: 0;
		border-radius: 0 4px 4px 0;
	}
	.flickity-prev-next-button.next {
		right: 0;
		border-radius: 4px 0 0 4px;
	}
	.flickity-prev-next-button.previous, .flickity-prev-next-button.next {display: block;}
	.flickity-prev-next-button .flickity-button-icon {
		fill: rgba(0,0,0,0.2);
		width: 70%;
	}
	.flickity-page-dots {
		bottom: 0;
		left: 50%;
		width: auto;
		background-color: rgba(0,0,0,.5);
		border-radius: 7px;
		transform: translate(-50%, -50%);
		display: flex;
		align-items: center;
		padding: 3px 4px;
		.dot {
			background: rgba(255,255,255,0.6);
			width: 8px;
			height: 8px;
			margin: 0;
			opacity: 1;
			transform: scale(0.8);
			&:not(:first-child) {
				margin-left: 6px;
			}
			&.is-selected {
				background: #fff;
				transform: scale(1);
			}
		}
	}
`;
const GalleryImgContainer = styled.div`
	overflow: hidden;
	height: 220px;
	width: 100%;
    padding-bottom: 62.55%;
	@media screen and ( min-width: 340px ) {
		height: 280px;
	}
	@media screen and ( min-width: 768px ) {
		height: 120px;
	}
	@media screen and ( min-width: 1260px ) {
		height: 190px;
	}
`;
const GalleryImgCover = styled.div`
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
`;
const GalleryImg = styled.img`
    position: absolute;
    inset: 0px;
    margin: auto;
    min-width: 50%;
    min-height: 50%;
    overflow: hidden;
    width: 50%;
`;
const GalleryBottom = styled.div<{ partner?: string }>`
	min-height: 63px;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
	display: ${(props) => props.partner ? 'flex' : 'none'};
	p {
		margin: 0;
		color: #707070;
		font-size: 12px;
		line-height: 16px;
		text-align: ${(props) => props.partner ? 'right' : 'center'};;
	}
	@media screen and ( min-width: 768px ) {
		padding: 10px;
		border: none;
		display: flex;
		flex-direction: ${(props) => props.partner === 'cpo' && 'column'};
		p {
			margin: ${(props) => props.partner ? '0' : 'auto'};
			${(props) => props.partner && css` max-width: 50px; `}
			max-width: ${(props) => props.partner === 'cpo' && '100%'};
			margin-top: ${(props) => props.partner === 'cpo' && '5px'};
		}
	}
	@media screen and ( min-width: 1260px ) {
		flex-direction: unset;
		p {
			${(props) => props.partner && css` max-width: 50px; `}
			margin-top: ${(props) => props.partner === 'cpo' && '0'};
		}
	}
`;
const GalleryPtr = styled.span<{ partner?: string, make?: string; }>`
	display: flex;
	align-items: center;
	span {
		font-size: 12px;
		font-weight: 700;
		max-width: 80px;
		color: #6D6E71;
		display: inline-block;
		border-left: 1px solid #231F20;
		margin-left: 5px;
		padding-left: 10px;
	}
	&:before {
		background-position: ${(props) => handleMakeLogo(props.make)};
	}
	@media screen and ( min-width: 768px ) {
		span {margin-left: 1px;}
	}
	@media screen and ( min-width: 1260px ) {
		span {margin-left: 5px;}
	}
	${(props) => (props.partner === 'carmax' || props.partner === 'autonation') && css`
		height: 21px;
		svg { width: 113px; height: 21px; }
		@media screen and ( min-width: 768px ) {
			height: 15px;
			svg { width: 66px; height: 15px; }
		}
		@media screen and ( min-width: 1260px ) {
			height: 21px;
			svg { width: 113px; height: 21px; }
		}
	`}
	${(props) => (props.partner === 'cpo') && css`
		&:before {
			content: '';
			width: 50px;
			height: 36px;
			background-size: 250px 432px;
			background-repeat: no-repeat;
			transform: scale(0.8);
			display: inline-block;
			background-image: url('/assets/img/makes.jpg');
		}
	`}
`;

const handleMakeLogo = (make: string) => {
	switch (make) {
	case 'Acura':
		return '0 0';
	case 'Alfa Romeo':
		return '-50px 0';
	case 'AM General':
		return '-100px 0';
	case 'Aston Martin':
		return '-150px 0';
	case 'Audi':
		return '-200px 0';
	case 'Bentley':
		return '0 -36px';
	case 'BMW':
		return '-50px -36px';
	case 'Bugatti':
		return '-100px -36px';
	case 'Buick':
		return '-150px -36px';
	case 'Cadillac':
		return '-200px -36px';
	case 'Chevrolet':
		return '0 -72px';
	case 'Chrysler':
		return '-50px -72px';
	case 'Daewoo':
		return '-100px -72px';
	case 'Dodge':
		return '-150px -72px';
	case 'Ferrari':
		return '-200px -72px';
	case 'FIAT':
		return '0 -108px';
	case 'Fisker':
		return '-50px -108px';
	case 'Ford':
		return '-100px -108px';
	case 'Genesis':
		return '-150px -108px';
	case 'GMC':
		return '-200px -108px';
	case 'Honda':
		return '0 -144px';
	case 'HUMMER':
		return '-50px -144px';
	case 'Hyundai':
		return '-100px -144px';
	case 'Infiniti':
		return '-150px -144px';
	case 'Isuzu':
		return '-200px -144px';
	case 'Jaguar':
		return '0 -180px';
	case 'Jeep':
		return '-50px -180px';
	case 'Kia':
		return '-100px -180px';
	case 'Lamborghini':
		return '-150px -180px';
	case 'Land Rover':
		return '-200px -180px';
	case 'Lexus':
		return '0 -216px';
	case 'Lincoln':
		return '-50px -216px';
	case 'Lotus':
		return '-100px -216px';
	case 'Maserati':
		return '-150px -216px';
	case 'Maybach':
		return '-200px -216px';
	case 'Mazda':
		return '0 -252px';
	case 'McLaren':
		return '-50px -252px';
	case 'Mercedes-Benz':
		return '-100px -252px';
	case 'Mercury':
		return '-150px -252px';
	case 'MINI':
		return '-200px -252px';
	case 'Mitsubishi':
		return '0 -288px';
	case 'Nissan':
		return '-50px -288px';
	case 'Oldsmobile':
		return '-100px -288px';
	case 'Panoz':
		return '-150px -288px';
	case 'Plymouth':
		return '-200px -288px';
	case 'Pontiac':
		return '0 -324px';
	case 'Porsche':
		return '-50px -324px';
	case 'Ram':
		return '-100px -324px';
	case 'Rolls-Royce':
		return '-150px -324px';
	case 'Saab':
		return '-200px -324px';
	case 'Saturn':
		return '0 -360px';
	case 'Scion':
		return '-50px -360px';
	case 'Smart':
		return '-100px -360px';
	case 'SRT':
		return '-150px -360px';
	case 'Subaru':
		return '-200px -360px';
	case 'Suzuki':
		return '0 -396px';
	case 'Tesla':
		return '-50px -396px';
	case 'Toyota':
		return '-100px -396px';
	case 'Volkswagen':
		return '-150px -396px';
	case 'Volvo':
		return '-200px -396px';
	default:
		return '0 0';
	}
};

export {
	GalleryWrapper,
	GalleryImgContainer,
	GalleryImgCover,
	GalleryImg,
	GalleryBottom,
	GalleryPtr
};