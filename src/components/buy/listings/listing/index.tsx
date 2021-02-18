// Packages
import React, { useState } from 'react';

// Definitions
import { IBuyListingContent } from '@def/IBuyListings';

// Components
import Gallery from './gallery';

// Styles
import { ListingWrapper, ListingImg, ListingMainText, ListingMain, ListingInfo, ListingMainTrigger, ListingMainContent, ListingMainContentPad, ListingMainTitle, ListingMainSpecsContainer, ListingMainSpecs, ListingMainSpec, ListingMainLocation, ListingMainLocationSvg, ListingMainButton, ListingInfoSale, ListingInfoPrice, ListingInfoPayment, ListingInfoTitle, ListingInfoText, ListingInfoMonths, ListingInfoBtn, ListingBadge, ListingBadgeSvg, ListingBadgeBg, ListingRibbon } from './style';

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
				<Gallery images={item.images} partner={item.partner} make={item.make} />
			</ListingImg>
			<ListingMainText href={item.url}>
				<ListingMain>
					<ListingMainTrigger active={accordion} onClick={handlerSubmit}>Preview</ListingMainTrigger>
					<ListingMainContent active={accordion}>
						<ListingMainContentPad>
							<ListingMainTitle>{item.year} {item.make} {item.model}</ListingMainTitle>
							<ListingMainSpecsContainer>
								<ListingMainSpecs>
									<ListingMainSpec><span>VIN:</span> <span>{item.vin ? item.vin : 'N/A'}</span></ListingMainSpec>
									<ListingMainSpec><span>Stock #:</span> <span>{item.stock ? item.stock : 'N/A'}</span></ListingMainSpec>
									<ListingMainSpec><span>Mileage:</span> <span>{item.mileage ? item.mileage : 'N/A'}</span></ListingMainSpec>
									<ListingMainSpec><span>Engine:</span> <span>{item.engine ? item.engine : 'N/A'}</span></ListingMainSpec>
									<ListingMainSpec><span>Doors:</span> <span>{item.doors ? item.doors : 'N/A'}</span></ListingMainSpec>
									<ListingMainSpec><span>Transmission:</span> <span>{item.transmission ? item.transmission : 'N/A'}</span></ListingMainSpec>
									<ListingMainSpec><span>Fuel Type:</span> <span>{item.fuelType ? item.fuelType : 'N/A'}</span></ListingMainSpec>
									<ListingMainSpec><span>MPG:</span> <span>{item.mpg ? item.mpg : 'N/A'}</span></ListingMainSpec>
									<ListingMainSpec><span>Color Exterior:</span> <span>{item.colorExterior ? item.colorExterior : 'N/A'}</span></ListingMainSpec>
									<ListingMainSpec><span>Color Interior:</span> <span>{item.colorInterior ? item.colorInterior : 'N/A'}</span></ListingMainSpec>
								</ListingMainSpecs>
							</ListingMainSpecsContainer>
							<ListingMainLocation>
								<ListingMainLocationSvg><use xlinkHref="#icon-location" /></ListingMainLocationSvg>
								{item.location ? item.location : 'N/A'} - {item.milesAway ? item.milesAway : 'N/A'} miles away
							</ListingMainLocation>
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
					<ListingInfoMonths>*{item.monthPeriod} Month Period</ListingInfoMonths>
					<ListingInfoBtn>Check Availability</ListingInfoBtn>
				</ListingInfo>
			</ListingMainText>
		</ListingWrapper>
	);
};

export default Listing;