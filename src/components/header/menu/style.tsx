// Packages
import styled, { css } from 'styled-components';

const MenuWrapper = styled.div<{ active: boolean }>`
	order: 1;

	@media screen and ( min-width: 1024px ) {
		order: 2;
	}

	${props => props.active && css`
		${MenuContent} {
			opacity: 1;
			visibility: visible;
			transition-delay: 0s;
		}

		${MenuHeader}, ${MenuList} {
			transform: translateX( 0 );
			transition-delay: .15s;
		}
	`}
`;

const MenuButton = styled.div`
	display: block;
	margin-left: 15px;
	cursor: pointer;
	&:before, &:after {
		content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 1px;
	}
	&:before {
		background-color: #176082;
    transform: scale( .8 ) translateY( 9px );
	}
	&:after {
		background-color: #5490ab;
    transform: scale( .9 ) translateY( 4px );
	}
	span {
		display: block;
    padding: 4px 5px;
    font-size: 12px;
    font-weight: bold;
    line-height: 16px;
    color: #00a0ff;
    background-color: #ffffff;
    border-radius: 2px;
    z-index: 2;
	}

	@media screen and ( min-width: 1024px ) {
		display: none;
	}
`;

const MenuContent = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	z-index: 20;
	background: rgba( 0, 0, 0, .7 );
	opacity: 0;
	visibility: hidden;
	transition: all ease .3s;
	transition-delay: .15s;

	@media screen and ( min-width: 1024px ) {
		position: relative;
    top: auto;
    bottom: auto;
    right: auto;
    left: auto;
    opacity: 1;
    visibility: visible;
    background: transparent;
    transition: none;
	}
`;

const MenuHeader = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	height: 45px;
	background: #fff;
	width: 84vw;
	max-width: 400px;
	padding: 15px 30px 0;
	display: flex;
	transform: translateX( 100% );
	transition: all ease .3s;
	transition-delay: 0s;

	@media screen and ( min-width: 1024px ) {
		display: none;
	}
`;

const MenuIconCross = styled.svg`
	display: inline-block;
	width: 14px;
	height: 14px;
	margin-right: 8px;
`;

const MenuClose = styled.div`
	display: flex;
	align-items: center;
	height: 30px;
	padding: 0 8px;
	color: #b2b2b2;
	font-size: 14px;
	line-height: 20px;
	font-weight: bold;
	cursor: pointer;
	background: #f2f2f2;
	border-radius: 4px;
`;

const MenuList = styled.ul`
	position: absolute;
	top: 45px;
	bottom: 0;
	right: 0;
	width: 84vw;
	max-width: 400px;
	margin: 0;
	padding: 0 30px;
	list-style-type: none;
	background: #FFF;
	transform: translateX( 100% );
	transition: all ease .3s;
	transition-delay: 0s;

	@media screen and ( min-width: 1024px ) {
		position: relative;
    top: auto;
    bottom: auto;
    right: auto;
    left: auto;
    background: transparent;
    display: flex;
    width: auto;
    max-width: none;
    padding: 0;
    transform: translateX( 0 );
    transition: none;
	}
`;

const MenuItem = styled.li`
	&:not(:last-child) {
		border-bottom: 1px solid rgba( 0, 0, 0, .1 );
	}

	@media screen and ( min-width: 1024px ) {
		&:not(:last-child) {
			border-bottom: 0;
			margin-right: 10px;
		}
	}
`;

const MenuAnchor = styled.a`
	display: block;
	padding: 15px 0;
	color: #00a0ff;
	font-size: 18px;
	line-height: 22px;
	font-weight: 400;
	text-decoration: none;

	@media screen and ( min-width: 1024px ) {
		padding: 10px 20px;
    font-size: 16px;
    line-height: 20px;
    color: #FFF;

		&:before {
			content: '';
			position: absolute;
			top: 0;
			bottom: 0;
			right: 0;
			left: 0;
			background: rgba( 255, 255,255, .1 );
			opacity: 0;
			border-radius: 4px;
			transform: scale( .6 );
			transition: all ease .15s;
		}

		&:hover {
			&:before {
				opacity: 1;
				transform: scale( 1 );
			}
		}
	}
`;

export {
	MenuWrapper,
	MenuButton,
	MenuContent,
	MenuHeader,
	MenuIconCross,
	MenuClose,
	MenuList,
	MenuItem,
	MenuAnchor
};