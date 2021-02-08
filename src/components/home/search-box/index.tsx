// Components
import ByMakeForm from '@comp/forms/by-make';
import SearchNav from './search-nav';

// Styles
import { SearchWrapper, SearchContent, SearchTitle } from './style';

const SearchBox: React.FC = ( props ) => {
	return (
		<SearchWrapper>
			<SearchContent>
				<SearchTitle>Find Your Options, Your Way!</SearchTitle>
				<ByMakeForm button="Search" type="search-box" />
			</SearchContent>
			<SearchNav />
		</SearchWrapper>
	);
};

export default SearchBox;