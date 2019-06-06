import React from 'react'

import About from '../components/About.js'
import Layout from '../components/layout.js'
import Ajax from '../Ajax.js'
import style from './styles/AboutUs.module.sass'

const AboutUs = () => (
  <Layout>
    <About />
  </Layout>
)

export default AboutUs
/*
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
				    <div className={style.page}>
					  <h3 className={ style.tag }>The Team</h3>
					<div className={ style.wrapper } style={this.state.loaded ? {}: {display: 'none'}}>
						{this.state.members.map(member => (
							<div className={ style.member } key={member.id}>
								<img src={member.picture} alt={member.name} onLoad={()=> this.setState({loaded: true})}/>
								<div className={ style.description }>
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
*/
