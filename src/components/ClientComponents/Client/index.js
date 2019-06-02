import React from 'react';
import IndexSplash from './IndexSplash.js';
import IndexMission from './IndexMission.js';
import IndexPoints from './IndexPoints.js';

import './stylesheet.css';

export default class Client extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			loggedIn: false,
		}
	}
	componentDidMount(){
		if(this.props.loggedIn){
			this.setState({
				loggedIn: true
			})
		}
	}

	render(){
		return(
			<div className='client-index-page'>
				<div>
		        <div className='index-splash-container ' />
					<IndexPoints />
					<IndexMission />
				</div>
			</div>
		)
	}
}
