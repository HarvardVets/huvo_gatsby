import React from 'react'
import style from './../styles/faqs.module.sass'

export default class FAQ extends React.Component {
  constructor(props) {
    super(props)
    let questions = props.faqs
    let categories = []
    console.log(questions)
    Object.keys(questions).forEach(category => {
      let category_div = (
        <div className={style.category} key={category}>
          <div>
            <span>{category}</span>
            <span />
          </div>
          <div className={style.faqs}>
            {questions[category].map((question, i) => (
              <div className={style.faq} key={i}>
                <div className={style.question} key={style.question}>
                  <span className={style.Q}>Q:</span>
                  <span> {question.question}</span>
                </div>
                <div className={style.answer} key={style.answer}>
                  <span className={style.A}>A:</span>
                  <span> {question.answer}</span>
                </div>
              </div>
            ))}
            <br />
          </div>
        </div>
      )
      categories.push(category_div)
    })
    this.state = {
      categories,
    }
  }
  render() {
    return <div className={style.wrapper}> {this.state.categories} </div>
  }
}
