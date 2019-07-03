import React from "react"
import PropTypes from "prop-types"

import Category from "./faq/category.js"
import style from "./../styles/faqs.module.sass"
import { Question } from "./../schema.js"

export default class FAQ extends React.Component {
  constructor(props) {
    super(props)
    let questions = props.faqs
    // {"questioncategory": [{question:, answer:}]}
    console.log(questions)
    let categories = []
    Object.keys(questions).forEach(category => {
      categories.push({ category: category, questions: questions[category] })
    })

    this.state = {
      categories,
    }
  }
  render() {
    return (
      <div className={style.wrapper}>
        {this.state.categories.map(({ category, questions }) => (
          <Category title={category} questions={questions} key={category} />
        ))}
      </div>
    )
  }
}

FAQ.propTypes = {
  faqs: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.exact(Question))),
}
