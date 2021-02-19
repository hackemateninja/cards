// Components
import ByMakeForm from '@comp/forms/by-make';
import Tabs from '@comp/tabs';
import Tab from '@comp/tabs/tab';

const ByTabs: React.FC = ( props ) => {
	return (
		<Tabs activeTab="by-make">
			<Tab id="by-make" label="By Make">
				<ByMakeForm button="New Search" variation="blue" />
			</Tab>
			<Tab id="by-type" label="By Type">Types Form</Tab>
			<Tab id="by-price" label="By Price">Prices Form</Tab>
		</Tabs>
	);
};

export default ByTabs;