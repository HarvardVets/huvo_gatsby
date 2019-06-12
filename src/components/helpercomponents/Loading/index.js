import React from 'react';
import './stylesheet.css';

export default function Loading(props) {

	return (
		<div className='loading'>
			<div className="lds-ring"><div></div><div></div><div></div><div></div></div>
		</div>
	)
}
