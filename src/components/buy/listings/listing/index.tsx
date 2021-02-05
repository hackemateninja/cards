// Packages
import React, { useState } from 'react';

// Definitions
import { IBuyListingContent } from '@def/IBuyListings';

// Styles
import { ListingWrapper, ListingImg, ListingMain, ListingInfo, ListingMainTrigger, ListingMainContent, ListingMainContentPad, ListingMainTitle, ListingMainSpecs, ListingMainSpec, ListingMainLocation, ListingMainButton, ListingInfoSale, ListingInfoPrice, ListingInfoPayment, ListingInfoTitle, ListingInfoMiles, ListingInfoLocation, ListingInfoBtn } from './style';

const Listing: React.FC<IBuyListingContent> = (props) => {
	const [accordion, setAccordion] = useState<boolean>(false);
	const handlerSubmit = (e: React.MouseEvent<HTMLDivElement>) => {
		e.preventDefault();
		setAccordion(!accordion);
	};
	const item = props.item;
	return (
		<ListingWrapper href={item.url}>
			<ListingImg>
				{/*item.images.map((item: string, index: number) => (
					<img src={item} />
				))*/}
				<span>Image</span>
			</ListingImg>
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
				<ListingInfoSale>
					<ListingInfoPrice><span>Sale Price</span>${item.salePrice}</ListingInfoPrice>
					<ListingInfoPayment><span>Monthly Payments</span>${item.monthlyPayment}/Mo</ListingInfoPayment>
				</ListingInfoSale>
				<ListingInfoTitle>{item.year} {item.make} {item.model}</ListingInfoTitle>
				<ListingInfoMiles>{item.mileage} miles</ListingInfoMiles>
				<ListingInfoLocation>{item.location} - {item.milesAway} miles away</ListingInfoLocation>
				<ListingInfoBtn>Check Availability</ListingInfoBtn>
			</ListingInfo>
		</ListingWrapper>
	);
};

export default Listing;