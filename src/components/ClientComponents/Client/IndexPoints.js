import React from 'react';
import { Link } from 'gatsby';
import './stylesheet.css';

export default function IndexPoints(props){

	return(
		<div className='index-point-wrapper'>
			<h3 className='index-point-casing'><Link className='index-point' to='events'>Get Involved</Link></h3>
			<h3 className='index-point-vertical'>|</h3>
			<div className='index-point-horizontal'></div>
			<h3 className='index-point-casing'><Link className='index-point' to='faqs'>Get Informed</Link></h3>
			<h3 className='index-point-vertical'>|</h3>
			<div className='index-point-horizontal'></div>
			<h3 className='index-point-casing'><Link className='index-point' to='reachout'>Reach Out</Link></h3>
		</div>
	)
}
