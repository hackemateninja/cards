// Packages
import React, { useState } from 'react';

// Definitions
import { IBuyListingContent } from '@def/IBuyListings';

// Components
import Gallery from './gallery';

// Styles
import { ListingWrapper, ListingImg, ListingMainText, ListingMain, ListingInfo, ListingMainTrigger, ListingMainContent, ListingMainContentPad, ListingMainTitle, ListingMainSpecs, ListingMainSpec, ListingMainLocation, ListingMainButton, ListingInfoSale, ListingInfoPrice, ListingInfoPayment, ListingInfoTitle, ListingInfoText, ListingInfoBtn, ListingBadge, ListingBadgeSvg, ListingBadgeBg, ListingRibbon } from './style';

const Listing: React.FC<IBuyListingContent> = (props) => {
	const [accordion, setAccordion] = useState<boolean>(false);
	const handlerSubmit = (e: React.MouseEvent<HTMLDivElement>) => {
		e.preventDefault();
		setAccordion(!accordion);
	};
	const item = props.item;

	return (
		<ListingWrapper>
			<ListingImg>
				<Gallery images={item.images} />
			</ListingImg>
			<ListingMainText href={item.url}>
				<ListingMain>
					<ListingMainTrigger active={accordion} onClick={handlerSubmit}>Preview</ListingMainTrigger>
					<ListingMainContent active={accordion}>
						<ListingMainContentPad>
							<ListingMainTitle>{item.year} {item.make} {item.model}</ListingMainTitle>
							<ListingMainSpecs>
								<ListingMainSpec>VIN: <span>{item.vin}</span></ListingMainSpec>
								<ListingMainSpec>Stock #: <span>{item.stock}</span></ListingMainSpec>
								<ListingMainSpec>Mileage: <span>{item.mileage}</span></ListingMainSpec>
								<ListingMainSpec>Engine: <span>{item.engine}</span></ListingMainSpec>
								<ListingMainSpec>Doors: <span>{item.doors}</span></ListingMainSpec>
								<ListingMainSpec>Transmission: <span>{item.transmission}</span></ListingMainSpec>
								<ListingMainSpec>Fuel Type: <span>{item.fuelType}</span></ListingMainSpec>
								<ListingMainSpec>MPG: <span>{item.mpg}</span></ListingMainSpec>
								<ListingMainSpec>Color Exterior: <span>{item.colorExterior}</span></ListingMainSpec>
								<ListingMainSpec>Color Interior: <span>{item.colorInterior}</span></ListingMainSpec>
							</ListingMainSpecs>
							<ListingMainLocation>{item.location} - {item.milesAway} miles away</ListingMainLocation>
							<ListingMainButton>View all details</ListingMainButton>
						</ListingMainContentPad>
					</ListingMainContent>
				</ListingMain>
				<ListingInfo>
					{item.badge !== undefined && 
						<ListingBadge>
							<ListingBadgeBg badge={item.badge}>
								{item.badge} Deal
								<ListingBadgeSvg><use xlinkHref="#icon-star-bg" /></ListingBadgeSvg>
								<ListingBadgeSvg><use xlinkHref="#icon-star-bg" /></ListingBadgeSvg>
								<ListingBadgeSvg><use xlinkHref="#icon-star-bg" /></ListingBadgeSvg>
							</ListingBadgeBg>
							<ListingRibbon badge={item.badge}></ListingRibbon>
						</ListingBadge>
					}
					<ListingInfoSale>
						<ListingInfoPrice><span>Sale Price</span>${item.salePrice}</ListingInfoPrice>
						<ListingInfoPayment><span>Monthly Payments</span>${item.monthlyPayment}/Mo</ListingInfoPayment>
					</ListingInfoSale>
					<ListingInfoTitle>{item.year} {item.make} {item.model}</ListingInfoTitle>
					<ListingInfoText>{item.mileage} miles</ListingInfoText>
					<ListingInfoText>{item.location} - {item.milesAway} miles away</ListingInfoText>
					<ListingInfoBtn>Check Availability</ListingInfoBtn>
				</ListingInfo>
			</ListingMainText>
		</ListingWrapper>
	);
};

export default Listing;