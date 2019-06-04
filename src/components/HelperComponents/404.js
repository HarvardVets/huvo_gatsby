import React from 'react';
import { Link } from 'react-router-dom';
import './stylesheet.css';

export default function NotFound(props){

	return(
		<div className='not-found-page'>
			<h2 className='not-found-tag'>Oh no!</h2>
			<p>It looks like this page doesn't exist. Please double check the URL or click on a link on the nav bar above.</p>
			<p><Link to='/reachout'>Contact us</Link>if you think there's a mistake.</p>
		</div>
	)
}
