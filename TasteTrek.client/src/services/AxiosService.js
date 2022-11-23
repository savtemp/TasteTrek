import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})


// need to create a profile and request API key in order to access API
export const wineApi = Axios.create({
  baseURL: 'https://www.globalwinescore.com/',
  timeout: 8000
})
