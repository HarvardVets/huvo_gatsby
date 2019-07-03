import React from "react"
import { Form, Button } from "react-bootstrap"
import { navigate } from "gatsby"
import axios from "axios"

import style from "./../styles/reachout.module.sass"

export default class ReachOut extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: "",
      name: "",
      email: "",
      reset: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  async handleSubmit(e) {
    e.preventDefault()
    try {
      let { name, email, message } = this.state
      let data = { name, email, message }
      const headers = {
        "x-api-key": process.env.GATSBY_API_KEY,
      }
      const config = {
        method: "post",
        url: process.env.GATSBY_API_URL,
        headers,
        data,
      }
      await axios(config)
        .then(c => {
          navigate("/")
        })
        .catch(e => {
          alert(
            "Error sending message, please check your internet connection and try again"
          )
          console.log(e)
        })
    } catch (e) {
      console.log("bye")
      console.log(e)
    }
  }

  render() {
    return (
      <div className={style.page}>
        <div className={style.marquee}>
          <h3 className={style.tag}>Reach Out to Us</h3>
        </div>
        <Form>
          <Form.Group controlId="formSendEmail" className={style.wrapper}>
            <div>
              <Form.Control
                type="text"
                name="name"
                placeholder="Your Name"
                className={`${style.formItem} ${style.formFirstCol}`}
                value={this.state.name}
                onChange={this.handleChange}
              />
              <Form.Control
                type="email"
                name="email"
                placeholder="Your Email"
                className={`${style.formItem} ${style.formFirstCol}`}
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <Form.Control
              as="textarea"
              name="message"
              placeholder="Your Message"
              className={`${style.formItem} ${style.formSecondCol}`}
              value={this.state.message}
              onChange={this.handleChange}
            />
            <Button className={style.formButton} onClick={this.handleSubmit}>
              Submit
            </Button>
          </Form.Group>
        </Form>
      </div>
    )
  }
}
