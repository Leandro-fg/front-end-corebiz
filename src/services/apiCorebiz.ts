import axios from 'axios'

const apiCorebiz = axios.create({
  baseURL: 'https://corebiz-test.herokuapp.com/api/v1'
})

export default apiCorebiz