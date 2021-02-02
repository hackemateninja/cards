// Packages
import React from 'react';
import Scroll from 'react-scroll';

// Styles
import { BackToTopWrapper, BackToTopText } from './style';

const BackToTop: React.FC = () => {
	var scroll = Scroll.animateScroll;
	function scrollToTop() {
		scroll.scrollToTop();
	}

	return (
		<BackToTopWrapper>
			<BackToTopText onClick={scrollToTop}>Back To Top</BackToTopText>
		</BackToTopWrapper>
	);
};

export default BackToTop;