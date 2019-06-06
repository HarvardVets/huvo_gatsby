import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { navigate } from 'gatsby'
import Ajax from '../Ajax.js'
import style from '../styles/ReachOut.module.sass'

export default class ReachOut extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: '',
      name: '',
      email: '',
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
      await Ajax.sendEmail(data)
      window.alert('Email Sent!')
      navigate('/')
    } catch (e) {
      console.error(e)
    }
  }

  render() {
    return (
      <div className={style.page}>
        <h3 className={style.tag}>Reach Out to Us</h3>
        <div className={style.wrapper}>
          <Form>
            <Form.Group controlId="formSendEmail">
              <Form.Control
                type="text"
                name="name"
                placeholder="Your Name"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <Form.Control
                type="email"
                name="email"
                placeholder="Your Email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <Form.Control
                as="textarea"
                name="message"
                placeholder="Your Message"
                value={this.state.message}
                onChange={this.handleChange}
              />
              <Button onClick={this.handleSubmit}>Submit</Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    )
  }
}
