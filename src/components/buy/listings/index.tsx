// Definitions
import { IBuyListings, IBuyListing } from '@def/IBuyListings';

// Components
import Listing from './listing';
import Spaces from '@comp/spaces';

const Listings: React.FC<IBuyListings> = ( props ) => {
	return (
		<>
			{props.items.slice(0, 5).map((item: IBuyListing, index: number) => (
				<Listing key={index} item={item} />
			))}
			<Spaces type="desktop" bg={true} page="srp">
				<img src="assets/img/banners/banner-03.png" alt="Space Desktop 2" />
			</Spaces>
			{props.items.slice(5, 10).map((item: IBuyListing, index: number) => (
				<Listing key={index} item={item} />
			))}
			<Spaces type="desktop" bg={true} page="srp">
				<img src="assets/img/banners/banner-03.png" alt="Space Desktop 2" />
			</Spaces>
		</>
	);
};

export default Listings;