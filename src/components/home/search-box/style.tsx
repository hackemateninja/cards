// Packages
import styled from 'styled-components';

const SearchWrapper = styled.div`
	margin: 0 auto 30px;

	@media screen and ( min-width: 768px ) {
		background: #FFF;
		box-shadow: 0 15px 30px -6px rgba( 0, 0, 0, .2 );
		border-radius: 4px;
		overflow: hidden;
		max-width: 580px;
		margin-top: -80px;
	}

	@media screen and ( min-width: 1260px ) {
		max-width: 770px;
	}
`;

const SearchContent = styled.div`
	padding: 15px 0 30px;
	
	@media screen and ( min-width: 768px ) {
		padding: 20px 30px 32px;
	}
`;

const SearchTitle = styled.h2`
	margin: 0 0 15px;
	font-size: 18px;
	line-height: 22px;
	color: #054664;

	@media screen and ( min-width: 768px ) {
		text-align: center;
		font-size: 22px;
		line-height: 26px;
		margin: 0 0 18px;
	}
`;

export {
	SearchWrapper,
	SearchContent,
	SearchTitle
};