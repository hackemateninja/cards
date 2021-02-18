// Packages
import { useEffect } from 'react';
import Flickity from 'react-flickity-component';

// Definitions
import { IBuyListingGallery } from '@def/IBuyListings';

// Components
import SliderWrapper from '@comp/slider-wrapper';

// Styles
import { GalleryWrapper, GalleryImgContainer, GalleryImgCover, GalleryImg, GalleryBottom, GalleryPtr } from './style';

const Gallery: React.FC<IBuyListingGallery> = (props) => {
	let flkty = null;

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

	const updateStatus = () => {
		var slideNumber = flkty.selectedIndex + 1;
		flkty.element.nextSibling.lastChild.textContent = flkty.slides.length > 1 ? slideNumber + ' of ' + flkty.slides.length + ' images' : 'No more images available';
	}

	useEffect(() => {
		if (flkty !== null) {
			updateStatus();
			flkty.on( 'select', updateStatus );
		}
	}, []);

	return (
		<GalleryWrapper>
			<SliderWrapper>
				<Flickity
					className={'carousel'}
					elementType={'div'}
					options={flickityOptions}
					disableImagesLoaded={false}
					reloadOnUpdate
					flickityRef={c => (flkty = c)}
				>
					{props.images.map((item: string, index: number) => (
						<GalleryImgContainer key={index}>
							<GalleryImgCover>
								<GalleryImg src={item} alt="Gallery Image" />
							</GalleryImgCover>
						</GalleryImgContainer>
					))}
				</Flickity>
				<GalleryBottom partner={props.partner}>
					{props.partner === 'cpo' && <GalleryPtr partner={props.partner} make={props.make.toLowerCase()}><span>CERTIFIED PRE-OWNED</span></GalleryPtr>}
					{props.partner === 'carmax' && <GalleryPtr partner={props.partner}><svg><use xlinkHref="#carmax-logo" /></svg></GalleryPtr>}
					{props.partner === 'autonation' && <GalleryPtr partner={props.partner}><svg><use xlinkHref="#autonation-logo" /></svg></GalleryPtr>}
					<p></p>
				</GalleryBottom>
			</SliderWrapper>
		</GalleryWrapper>
	);
};

export default Gallery;