// Packages
import { useState } from 'react';

// Definitions
import { IListContent } from '@def/IList';

// Styles
import { MenuWrapper, MenuButton, MenuContent, MenuHeader, MenuIconCross, MenuClose, MenuList, MenuItem, MenuAnchor } from './style';

// Data
const menuData = [
	{ url: '/', title: 'Search By' },
	{ url: '/', title: 'Certified Pre-Owned' },
	{ url: '/', title: 'Deals' },
	{ url: '/', title: 'Advice' },
	{ url: '/', title: 'Best Cars' }
];

const Menu: React.FC = ( props ) => {
	const [open, setOpen] = useState<boolean>( false );

	return (
		<MenuWrapper active={open}>
			<MenuButton onClick={() => setOpen( true )}><span>Menu</span></MenuButton>
			<MenuContent>
				<MenuHeader>
					<MenuClose onClick={() => setOpen( false )}><MenuIconCross><use xlinkHref="#icon-cross" /></MenuIconCross> Close</MenuClose>
				</MenuHeader>
				<MenuList>
					{menuData.map(( item: IListContent, index: number ) =>
						<MenuItem key={index}><MenuAnchor href={item.url} title={item.title}>{item.title}</MenuAnchor></MenuItem>
					)}
				</MenuList>
			</MenuContent>
		</MenuWrapper>
	);
};

export default Menu;