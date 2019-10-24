import axios from 'axios'

const baseURL = 'http://localhost:3000/users/'

// Higher-order function to handle the error for us
// Takes a function as an argument (function a) and returns a function (function b),
// which, when called, will call function a, passing along any arguments it received
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
  }),
  createProfile: handleError(async payload => {
    const res = await axios.post(baseURL, payload)
    return res.data
  })
}
