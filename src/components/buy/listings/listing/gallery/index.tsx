// Packages
import { useEffect } from 'react';
import Flickity from 'react-flickity-component';

// Definitions
import { IBuyListingGallery } from '@def/IBuyListings';

// Components
import SliderWrapper from '@comp/slider-wrapper';

// Styles
import { GalleryWrapper, GalleryImgContainer, GalleryImgCover, GalleryImg } from './style';

const Gallery: React.FC<IBuyListingGallery> = (props) => {
	const flickityOptions = {
		lazyLoad: true,
		prevNextButtons: true,
		pageDots: true,
		cellAlign: 'left',
		contain: true,
		arrowShape: { 
			x0: 20,
			x1: 70, y1: 30,
			x2: 70, y2: 15,
			x3: 70
		}
	}

	return (
		<GalleryWrapper>
			<SliderWrapper>
				<Flickity
					className={'carousel'}
					elementType={'div'}
					options={flickityOptions}
					disableImagesLoaded={false}
					reloadOnUpdate
				>
					{props.images.map((item: string, index: number) => (
						<GalleryImgContainer key={index}>
							<GalleryImgCover>
								<GalleryImg src={item} alt="Gallery Image" />
							</GalleryImgCover>
						</GalleryImgContainer>
					))}
				</Flickity>
			</SliderWrapper>
		</GalleryWrapper>
	);
};

export default Gallery;