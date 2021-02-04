// Packages
import Scroll from 'react-scroll';

// Style
import { SearchNavWrapper, SearchNavButton } from './style';

const SearchNav: React.FC = (props) => {
	var Link = Scroll.Link;
	return (
		<SearchNavWrapper>
			<Link activeClass="active" to="browseByType" spy={true} smooth={true} offset={-80}>
				<SearchNavButton>Browse by Type</SearchNavButton>
			</Link>
			<Link activeClass="active" to="browseByPrice" spy={true} smooth={true} offset={-80}>
				<SearchNavButton>Browse by Price</SearchNavButton>
			</Link>
			<Link activeClass="active" to="browseByMake" spy={true} smooth={true} offset={-80}>
				<SearchNavButton>Browse by Make</SearchNavButton>
			</Link>
			<Link activeClass="active" to="hotDeals" spy={true} smooth={true} offset={-80}>
				<SearchNavButton>Hot Deals</SearchNavButton>
			</Link>
		</SearchNavWrapper>
	);
};

export default SearchNav;