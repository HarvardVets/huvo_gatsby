import React from 'react';
import Ajax from '../../../Ajax.js';
import './stylesheet.css';

export default class AboutUs extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			members: [],
			loaded: false
		}
	}

	async componentDidMount(){
		try{
			let members = await Ajax.getAllMembers();
			this.setState({
				members
			})
		}catch(e){
			console.error(e);
		}
	}


	render(){
		return(
				<div className='about-us-page'>
					<h3 className='about-us-tag'>The Team</h3>
					<div className='about-us-members-wrapper' style={this.state.loaded ? {}: {display: 'none'}}>
						{this.state.members.map(member => (
							<div className='about-us-single-member' key={member.id}>
								<img src={member.picture} alt={member.name} onLoad={()=> this.setState({loaded: true})}/>
								<div className='about-us-single-member-description'>
									<h4>{member.name}</h4>
									<p>{member.description}</p>
									<p>Contact me at {member.email}</p>
								</div>
							</div>
						))}
					</div>
				</div>

		)
	}

}
