// Components
import Button from '@comp/button';

// Style
import { SearchNavWrapper } from './style';

const SearchNav: React.FC = ( props ) => {
	return (
		<SearchNavWrapper>
			<Button href="#by-type" st="browse">Browse by Type</Button>
			<Button href="#by-price" st="browse">Browse by Price</Button>
			<Button href="#by-make" st="browse">Browse by Make</Button>
			<Button href="#by-location" st="browse">Browse by Location</Button>
		</SearchNavWrapper>
	);
};

export default SearchNav;