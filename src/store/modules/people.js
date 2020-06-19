let Airtable = require("airtable")

const apiKey = process.env.VUE_APP_AIRTABLE_API_KEY

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: `${apiKey}`
})
let base = Airtable.base("appciBpErOMIpSV0l")

const state = []

const actions = {
  initializePeople({ commit }) {
    base("people")
      .select()
      .firstPage((err, records) => {
        if (err) {
          return
        }
        records.forEach(record => {
          if (record.fields.active) commit("addPerson", record)
        })
      })
  }
}

const mutations = {
  addPerson(state, value) {
    state.push(value.fields)
  }
}

export default { state, actions, mutations }
