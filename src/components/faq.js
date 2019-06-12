import React from 'react'
import Ajax from '../Ajax.js'
import style from '../styles/FAQs.module.sass'

/*
  this.props.faqs = {
  category: [{
  {
  "question": "Can I get into Harvard?",
  "answer": "No",
  "category": "admissions"
  }

  }]
  }
   */

export default class FAQ extends React.Component {
  render() {
    let questions = this.props.faqs
    let resultant_jsx
    let categories = []
    console.log(questions)
    Object.keys(questions).forEach(category => {
      let category_div = (
        <div className={style.category} key={category}>
          <h3>{category}</h3>
          <div className={style.faqs}>
            {questions[category].map((question, i) => (
              <div className={style.faq} key={i}>
                <div className={style.question} key={style.question}>
                  <p className={style.Q}>Q:</p>
                  <p> {question.question}</p>
                </div>
                <div className={style.answer} key={style.answer}>
                  <p className={style.A}>A:</p>
                  <p> {question.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
      categories.push(category_div)
    })
    return categories
  }
}
