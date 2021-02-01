// Packages
import { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';

// Styles
import { HeroImageWrapper, HeroImageCover, HeroImageTitle } from './style';


const HeroImage: React.FC = ( props ) => {
	const [image, setImage] = useState<string>( '' );
	const { width } = useWindowSize();

	useEffect(() => {
		width >= 768 ? setImage( 'assets/img/hero-image/desktop.png' ) : setImage( 'assets/img/hero-image/mobile.png' );
	});

	return (
		<HeroImageWrapper>
			<HeroImageCover>
				<img src={image} alt="" />
			</HeroImageCover>
			<HeroImageTitle><span>Welcome, Now Let's</span> Find Some Cars!</HeroImageTitle>
		</HeroImageWrapper>
	);
};

export default HeroImage;