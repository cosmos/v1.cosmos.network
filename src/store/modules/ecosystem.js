let Airtable = require("airtable")

const apiKey = process.env.VUE_APP_AIRTABLE_API_KEY

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: `${apiKey}`
})

let base = Airtable.base("app257DDgKV2KGpWA")

let gatherRecords = function(commit, baseName, mutationName) {
  base(baseName)
    .select()
    .all((err, records) => {
      if (err) {
        return
      }
      records.forEach(record => {
        if (record.fields.active) commit(mutationName, record)
      })
    })
}

const state = {
  apps: [],
  wallets: []
}

const actions = {
  initEcosystemApps({ commit }) {
    gatherRecords(commit, "apps", "addEcosystemApps")
  },
  initEcosystemWallets({ commit }) {
    gatherRecords(commit, "wallets", "addEcosystemWallets")
  }
}

const mutations = {
  addEcosystemApps(state, value) {
    state.apps.push(value.fields)
  },
  addEcosystemWallets(state, value) {
    state.wallets.push(value.fields)
  }
}

export default { state, actions, mutations }
