let Airtable = require("airtable")

const apiKey = process.env.VUE_APP_AIRTABLE_API_KEY

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: `${apiKey}`
})
let base = Airtable.base("apphVC4IpCTi0JBCl")

const state = []

const actions = {
  initializeMentions({ commit }) {
    base("mentions")
      .select()
      .firstPage((err, records) => {
        if (err) {
          return
        }
        records.forEach(record => {
          if (record.fields.active) commit("addMention", record)
        })
      })
  }
}

const mutations = {
  addMention(state, value) {
    let mentionExists = state.find(i => i.id === value.fields.id)
    if (!mentionExists) {
      state.push(value.fields)
    }
  }
}

export default { state, actions, mutations }
