// Packages
import styled from 'styled-components';

const SearchNavWrapper = styled.div`
	margin: 0 -15px;
	background: #F8F8F8;
	border: 1px solid rgba( 0, 0, 0, .1 );
	border-left-width: 0;
	border-right-width: 0;
	padding: 15px 15px 0;
	a {
		margin-bottom: 15px;
		display: inline-block;
	}
	> * {
		margin-bottom: 15px;
		&:not(:last-child) {
			margin-right: 10px;
		}
	}

	@media screen and ( min-width: 768px ) {
		margin: 0;
		border-bottom-width: 0;
		display: flex;
		justify-content: center;
		padding: 15px;

		> * {
			margin-bottom: 0;
		}
	}
`;
const SearchNavButton = styled.span`
	cursor: pointer;
	outline: 0;
	border-radius: 4px;
	padding: 8px 10px;
	width: 100%;
	display: inline-block;
	text-decoration: none;
	font-weight: bold;
	text-align: center;
	border: 1px solid rgba( 0, 0, 0, .1 );
	background: #FFF;
	box-shadow: 0 5px 8px -4px rgba( 0, 0, 0, .2 );
	color: #00A0FF;
	font-size: 14px;
	line-height: 20px;
	width: auto;
`;

export {
	SearchNavWrapper,
	SearchNavButton
};