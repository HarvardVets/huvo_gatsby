import React from 'react';
import Ajax from '../../../Ajax.js';
import './stylesheet.css';

export default class FAQ extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			questions: []
		}
	}

	async componentDidMount(){
		try{
			let questions = await Ajax.getAllQuestions();
			this.setState({
				questions
			})
		}catch(e){
			console.error(e);
		}
	}

	render(){
		return(
			<div className='faq-page'>
				<h3 className='faq-tag'>FAQs</h3>
				{this.state.questions.map(question => (
					<div className='faq-question-wrapper' key={question.id}>
						<h4>{question.question}</h4>
						<p>{question.answer}</p>
					</div>
				))}
			</div>
		)
	}

}
