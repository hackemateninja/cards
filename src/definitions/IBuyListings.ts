export interface IBuyListings {
	items: IBuyListing[]
}

export interface IBuyListingContent {
	item: IBuyListing
}

export interface IBuyListingGallery {
    images: []
}

export interface IBuyListing {
    id: number,
    url: string,
    images: [],
    year: string,
    make: string,
    model: string,
    badge?: string,
    vin: string,
    stock: string,
    mileage: string,
    engine: string,
    doors: string,
    transmission: string,
    fuelType: string,
    mpg: string,
    colorExterior: string,
    colorInterior: string,
    location: string,
    milesAway: string,
    salePrice: string,
    monthlyPayment: string,
    monthPeriod: string,
    partner?: string
}