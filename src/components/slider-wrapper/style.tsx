// Packages
import styled from 'styled-components';

const FlickityWrapper = styled.div`
	.flickity-enabled {
		position: relative;
	}
	.flickity-enabled:focus {
		outline: none;
	}
	.flickity-viewport {
		position: relative;
		height: 100%;
	}
	@media screen and ( min-width: 768px ) {
		.flickity-viewport {
			overflow: hidden;
		}
	}
	.flickity-slider {
		position: absolute;
		width: 100%;
		height: 100%;
	}
	.flickity-enabled.is-draggable {
		user-select: none;
	}
	.flickity-enabled.is-draggable .flickity-viewport {
		cursor: move;
		cursor: -webkit-grab;
		cursor: grab;
	}
	.flickity-enabled.is-draggable .flickity-viewport.is-pointer-down {
		cursor: -webkit-grabbing;
		cursor: grabbing;
	}
	.flickity-button {
		position: absolute;
		background: transparent;
		border: none;
		color: #333;
		outline: none;
	}
	.flickity-button:hover {
		cursor: pointer;
	}
	.flickity-button:focus {
		outline: none;
		box-shadow: 0 0 0 5px #19f;
	}
	.flickity-button:active {
		opacity: 0.6;
	}
	.flickity-button:disabled {
		opacity: 0.3;
		cursor: auto;
		pointer-events: none;
	}
	.flickity-button-icon {
		fill: #333;
	}
	.flickity-prev-next-button {
		top: 50%;
		width: 44px;
		height: 44px;
		border-radius: 50%;
		transform: translateY(-50%);
	}
	.flickity-prev-next-button.previous {
		left: -50px;
	}
	.flickity-prev-next-button.next {
		right: -50px;
	}

	.flickity-prev-next-button.previous,
	.flickity-prev-next-button.next {
		display: none;
	}
	@media screen and ( min-width: 1024px ) {
		.flickity-prev-next-button.previous,
		.flickity-prev-next-button.next {
			display: block;
		}
	}

	.flickity-rtl .flickity-prev-next-button.previous {
		left: auto;
		right: 10px;
	}
	.flickity-rtl .flickity-prev-next-button.next {
		right: auto;
		left: 10px;
	}
	.flickity-prev-next-button .flickity-button-icon {
		position: absolute;
		left: 20%;
		top: 20%;
		width: 60%;
		height: 60%;
	}
	.flickity-page-dots {
		position: absolute;
		width: 100%;
		bottom: -25px;
		padding: 0;
		margin: 0;
		list-style: none;
		text-align: center;
		line-height: 1;
	}
	.flickity-rtl .flickity-page-dots {
		direction: rtl;
	}
	.flickity-page-dots .dot {
		display: inline-block;
		width: 10px;
		height: 10px;
		margin: 0 8px;
		background: #333;
		border-radius: 50%;
		opacity: 0.25;
		cursor: pointer;
	}
	.flickity-page-dots .dot.is-selected {
		opacity: 1;
	}
`;

export {
	FlickityWrapper
};