// Packages
import Flickity from 'react-flickity-component';

// Components
import ListingCard from '@comp/listing-card';
import SliderWrapper from '@comp/slider-wrapper';
import SectionTitle from '@comp/section-title';

// Styles
import { HotDealsWrapper, HotDealsSlider } from './style';

const hotDeals = [
	{
		image: '//ux-dev.awadserver.com/ucc-v3/app/assets/img/dodge.jpg',
		price: '$22,394',
		priceMo: '$402',
		title: '2018 Dodge Challenger R/T',
		miles: '32,424',
		city: 'Miami, FL',
		nearness: '10',
		zip: '33132',
		type: 'good'
	},
	{
		image: '//ux-dev.awadserver.com/ucc-v3/app/assets/img/dodge.jpg',
		price: '$22,394',
		priceMo: '$402',
		title: '2018 Dodge Challenger R/T',
		miles: '32,424',
		city: 'Miami, FL',
		nearness: '10',
		zip: '33132',
		type: 'best'
	},
	{
		image: '//ux-dev.awadserver.com/ucc-v3/app/assets/img/dodge.jpg',
		price: '$22,394',
		priceMo: '$402',
		title: '2018 Dodge Challenger R/T',
		miles: '32,424',
		city: 'Miami, FL',
		nearness: '10',
		zip: '33132',
		type: 'great'
	},
	{
		image: '//ux-dev.awadserver.com/ucc-v3/app/assets/img/dodge.jpg',
		price: '$22,394',
		priceMo: '$402',
		title: '2018 Dodge Challenger R/T',
		miles: '32,424',
		city: 'Miami, FL',
		nearness: '10',
		zip: '33132',
		type: 'good'
	},
	{
		image: '//ux-dev.awadserver.com/ucc-v3/app/assets/img/dodge.jpg',
		price: '$22,394',
		priceMo: '$402',
		title: '2018 Dodge Challenger R/T',
		miles: '32,424',
		city: 'Miami, FL',
		nearness: '10',
		zip: '33132',
		type: 'best'
	},
	{
		image: '//ux-dev.awadserver.com/ucc-v3/app/assets/img/dodge.jpg',
		price: '$22,394',
		priceMo: '$402',
		title: '2018 Dodge Challenger R/T',
		miles: '32,424',
		city: 'Miami, FL',
		nearness: '10',
		zip: '33132',
		type: 'great'
	}
];

const HotDeals: React.FC = ( props ) => {
	// Flickity Options
	const flickityOptions = {
		lazyLoad: true,
		prevNextButtons: true,
		pageDots: false,
		cellAlign: 'left',
		contain: true,
		arrowShape: { 
			x0: 20,
			x1: 70, y1: 30,
			x2: 70, y2: 15,
			x3: 70
		}
	}

	return (
		<HotDealsWrapper>
			<SectionTitle>Hot Deals Near You</SectionTitle>
			<HotDealsSlider>
				<SliderWrapper>
					<Flickity
						className={'carousel'}
						elementType={'div'}
						options={flickityOptions}
						disableImagesLoaded={false}
						reloadOnUpdate
					>
						{hotDeals.map(( item, index ) =>
							<ListingCard key={index} {...item} />
						)}
					</Flickity>
				</SliderWrapper>
			</HotDealsSlider>
		</HotDealsWrapper>
	);
};

export default HotDeals;