// Packages
import { useState } from 'react';

// Denifitions
import { ITabs } from '@def/ITabs';

// Styles
import { TabsHeader, TabsButton, TabsContent } from './style';

const Tabs: React.FC<ITabs> = ({ activeTab, children }) => {
	const [active, setActive] = useState( activeTab );

	const handlerClick = ( id: string ) => {
		setActive( id );
	};

	return (
		<>
			<TabsHeader>
				{children.map(( child: any, index: number ) => {
					const { id, label } = child.props;
					return <TabsButton active={active === id} key={index} onClick={(e) => handlerClick( id )}>{label}</TabsButton>;
				})}
			</TabsHeader>
			<TabsContent>
				{children.map(( child: any, index: number ) =>
					child.props.id === active && child.props.children
				)}
			</TabsContent>
		</>
	);
};

export default Tabs;