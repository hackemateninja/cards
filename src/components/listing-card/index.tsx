// Definitions
import { IListing } from '@def/IListing';

// Styles
import { ListingCardImage, ListingCardWrapper, ListingCardContent, ListingCardHeader, ListingCardTitle, ListingCardText, ListingCardBadge, ListingCardStar } from './style';

const ListingCard: React.FC<IListing> = ( props ) => {
	return (
		<ListingCardWrapper href="#">
			<ListingCardImage src={props.image} alt={props.title} />
			<ListingCardContent>
				<ListingCardBadge type={props.type}>
					<ListingCardStar><use xlinkHref="#icon-star" /></ListingCardStar>
						{props.type} Deal
					<ListingCardStar><use xlinkHref="#icon-star" /></ListingCardStar>
				</ListingCardBadge>
				<ListingCardHeader>{props.price} <span>{props.priceMo}/Mo</span></ListingCardHeader>
				<ListingCardTitle>{props.title}</ListingCardTitle>
				<ListingCardText>{props.miles} miles</ListingCardText>
				<ListingCardText>{props.city} - {props.nearness} mi. from {props.zip}</ListingCardText>
			</ListingCardContent>
		</ListingCardWrapper>
	);
};

export default ListingCard;