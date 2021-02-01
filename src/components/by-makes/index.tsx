// Definitions
import { IMake } from '@def/IMake';

// Components
import Row from '@comp/container/row';
import Column from '@comp/container/column';
import MakeList from "@comp/make-list";

// Styles
import { ByMakesWrapper } from './style';

const ByMakes: React.FC = () => {
	return (
		<ByMakesWrapper>
			<Row>
				<Column xs={1} sm={1} md='auto'>
					<MakeList />
				</Column>
				<Column xs={1} sm={1} md={4}>
					<p>Image</p>
				</Column>
			</Row>
		</ByMakesWrapper>
	);
};

export default ByMakes;