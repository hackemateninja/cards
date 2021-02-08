// Packages
import styled from 'styled-components';

const TabsHeader = styled.ul`
	margin: 0;
	padding: 0;
	list-style-type: none;
	display: flex;
`;

const TabsButton = styled.li<{ active?: boolean }>`
	flex-basis: 0;
	flex-grow: 1;
	max-width: 100%;
	cursor: pointer;
	min-height: 40px;
	text-align: center;
	padding: 10px 5px;
	font-weight: bold;
	line-height: 20px;
	font-size: 14px;
	border-radius: 4px 4px 0 0;

	color: ${props => props.active ? '#00A0FF' : '#707070'};
	background: ${props => props.active ? '#F6F6F6' : 'transparent'};
	transition: all ease .3s;
`;

const TabsContent = styled.div`
	padding: 15px;
	background: #F6F6F6;
	border-radius: 0 0 4px 4px;
`;

export {
	TabsHeader,
	TabsButton,
	TabsContent
};