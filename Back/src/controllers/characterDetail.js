
const axios = require('axios')
const {KEY, URL_BASE} = process.env
const URL = 'https://rickandmortyapi.com/api/character';


const characterDetail = async(params) => {
  return response =  axios.get(`${URL}/${params.id}`)
}
module.exports = characterDetail;