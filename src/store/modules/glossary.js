let Airtable = require("airtable")

const apiKey = process.env.VUE_APP_AIRTABLE_API_KEY

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: `${apiKey}`
})
let base = Airtable.base("appNu0Ye9QMY89sCh")

const state = []

const actions = {
  initializeGlossary({ commit }) {
    base("glossary")
      .select()
      .firstPage((err, records) => {
        if (err) {
          return
        }
        records.forEach(record => {
          if (record.fields.active) commit("addTerm", record)
        })
      })
  }
}

const mutations = {
  addTerm(state, value) {
    state.push(value.fields)
  }
}

export default { state, actions, mutations }
