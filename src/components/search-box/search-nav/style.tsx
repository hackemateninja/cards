// Packages
import styled from 'styled-components';

const SearchNavWrapper = styled.div`
	margin: 0 -15px;
	background: #F8F8F8;
	border: 1px solid rgba( 0, 0, 0, .1 );
	border-left-width: 0;
	border-right-width: 0;
	padding: 15px 15px 0;
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

export {
	SearchNavWrapper
};