const axios = require("axios")

const state = {
  totalMarketcap: 60
}

const mutations = {
  async initTotalMarketcap(state) {
    let data = (await axios.get(`https://backend.tendermint.com/marketcap`))
      .data
    state.totalMarketcap = data
  }
}

export default { state, mutations }
