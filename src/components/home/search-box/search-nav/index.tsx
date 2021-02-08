// Packages
import Scroll from 'react-scroll';

// Style
import { SearchNavWrapper, SearchNavButton } from './style';

const SearchNav: React.FC = (props) => {
	var Link = Scroll.Link;
	return (
		<SearchNavWrapper>
			<Link to="browseByType" smooth={true} offset={-80}>
				<SearchNavButton>Browse by Type</SearchNavButton>
			</Link>
			<Link to="browseByPrice" smooth={true} offset={-80}>
				<SearchNavButton>Browse by Price</SearchNavButton>
			</Link>
			<Link to="browseByMake" smooth={true} offset={-80}>
				<SearchNavButton>Browse by Make</SearchNavButton>
			</Link>
			<Link to="hotDeals" smooth={true} offset={-80}>
				<SearchNavButton>Hot Deals</SearchNavButton>
			</Link>
		</SearchNavWrapper>
	);
};

export default SearchNav;