import axios from 'axios'
/* eslint-disable no-param-reassign */
/* eslint-disable prettier/prettier */

const api = 'https://quote-garden.herokuapp.com/api/v3/quotes'

const getQuotes = (that, page = 1) => {
  axios
    .get(`${api}?page=${page}`)
    .then((res) => {
      that.results = res.data.data
      that.pagination = res.data.pagination
      that.$toast.success(`New Quotes loaded on page - ${page}`)
    })
    .finally(() => {
      that.loading = false
    })
}

export default getQuotes
