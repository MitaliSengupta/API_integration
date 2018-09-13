import axios from 'axios'

export default function() {
  const headers = {
    'Accept': 'application/json',
    'User-Agent': 'Bearer'
  }

  return axios.create({
    baseURL: 'https://rickandmortyapi.com/api/',
    timeout: 5000,
    headers
  })
}
