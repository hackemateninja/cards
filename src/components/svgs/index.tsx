import React from 'react';
import { IPlainObject } from '@def/IPlainObject';

const SVGs: React.FC<IPlainObject> = ( props ) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" style={{ width: 0, height: 0, display: 'block' }}>
			<symbol id="icon-arrow-next" viewBox="0 0 10 17">
				<path d="M17.9,16l-5.968-5.961a1.488,1.488,0,1,1,2.106-2.1l7.021,7.012a1.486,1.486,0,0,1,0,2.1l-7.021,7.012a1.488,1.488,0,1,1-2.106-2.1Z" transform="translate(-11.5 -7.5)"/>
			</symbol>
		</svg>
	);
};

export default SVGs;