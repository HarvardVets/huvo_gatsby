import React from 'react';
import { Link } from 'gatsby';
import Loading from '../../HelperComponents/Loading';
import './stylesheet.css';

export default class Calendar extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			loaded: false
		}
	}
	render(){
		return(
			<div className='events-page'>
				<h3 className='events-tag'>Upcomming Events</h3>
				{this.state.loaded ? (<div></div>) : (<Loading />)}
				<div className='cal-wrapper'>
					<iframe onLoad={()=> this.setState({loaded: true})} title='Google Calendar' src="https://calendar.google.com/calendar/embed?src=harvardvets%40gmail.com&ctz=America%2FNew_York" className="cal"></iframe>
				</div>
				<div className='events-page-suggestions'>
					<p>Is there something missing? <Link className='events-link' to='/contactus'>Reach out to us</Link> to make a suggestion.</p>
					<p>Want to get involved in another way? Please <Link className='events-link' to='/'>donate</Link> to support us and our mission.</p>
				</div>
			</div>
		)
	}

}
