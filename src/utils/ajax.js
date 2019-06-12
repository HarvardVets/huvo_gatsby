import axios from 'axios'
const BASE_URL = 'https://huvo-server.herokuapp.com'

export default class Ajax {
  // meaningless ping to wake up the free dyno
  // ##TODO: robustify
  static async ping() {
    axios.get(`${BASE_URL}`)
  }

  // Email
  static async sendEmail(payload) {
    try {
      //##TODO: include unique token to stop spam
      let response = axios.post(`${BASE_URL}/reachout`, payload)
      return response.data
    } catch (e) {
      console.error(e)
      //##TODO: check out error handling of form
      return false
    }
  }
}
