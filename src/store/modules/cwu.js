let Airtable = require("airtable")

const apiKey = process.env.VUE_APP_AIRTABLE_API_KEY

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: `${apiKey}`
})

let base = Airtable.base("appGq4J4B7aGj2d3P")

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
  cwu: []
}

const actions = {
  initCwuWorkshops({ commit }) {
    gatherRecords(commit, "cwu", "addCwuWorkshops")
  }
}

const mutations = {
  addCwuWorkshops(state, value) {
    state.cwu.push(value.fields)
  }
}

export default { state, actions, mutations }
