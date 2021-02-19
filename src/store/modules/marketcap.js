const axios = require("axios")

const state = {
  totalMarketcap: 60
}

const mutations = {
  async initTotalMarketcap(state) {
    let data = (
      await axios.get(`https://cosmos-ecosystem-api.vercel.app/marketcap`)
    ).data
    state.totalMarketcap = data
  }
}

export default { state, mutations }
