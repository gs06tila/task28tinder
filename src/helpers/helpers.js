import axios from 'axios'

const baseURL = 'http://localhost:3000/users/'

const handleError = fn => (...params) =>
  fn(...params).catch(error => {
    console.log(error)
  })

// Exposes methods corresponding to the endpoints we created in the backend
export const api = {
  getProfile: handleError(async id => {
    const res = await axios.get(baseURL + id)
    return res.data
  }),
  getProfiles: handleError(async () => {
    const res = await axios.get(baseURL)
    return res.data
  })
}
