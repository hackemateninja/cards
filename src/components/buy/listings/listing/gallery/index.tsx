// Packages
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Flickity from 'react-flickity-component';

// Definitions
import { RootState } from '@def/TRootReducer';
import { IBuyListingGallery } from '@def/IBuyListings';

// Slices
import { setCurrent } from '@redux/slices/test';

// Components
import SliderWrapper from '@comp/slider-wrapper';

// Styles
import { GalleryWrapper, GalleryImgContainer, GalleryImgCover, GalleryImg } from './style';

const Gallery: React.FC<IBuyListingGallery> = (props) => {
	let flkty = null;
	const dispatch = useDispatch();
	const [currentSelected, setCurrentSelected] = useState<number>(1);
	const [slidesAvailable, setslidesAvailable] = useState<number>(undefined);
	const currentElem = useSelector((state: RootState) => state.test.currentSelected);
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

	useEffect(() => {
		if (flkty !== null) {
			flkty.on('ready', () => {
				setslidesAvailable(flkty.slides.length);
			});
			flkty.on('change', (event: any, index: number) => {
				dispatch(setCurrent(index));
			});
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
				<p>{currentElem} of {slidesAvailable}</p>
			</SliderWrapper>
		</GalleryWrapper>
	);
};

export default Gallery;