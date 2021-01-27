// Packages
import styled from 'styled-components';

const HeaderWrapper = styled.div`
	height: 60px;
	background: #054664;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 100;

	> div {
		height: inherit;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;

export {
	HeaderWrapper,
};