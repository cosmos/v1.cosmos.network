import nodes from "content/json/roadmap.json"

const apiKey = process.env.VUE_APP_AIRTABLE_API_KEY

const state = {
  nodes: nodes,
  milestones: []
}

let Airtable = require("airtable")
Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: `${apiKey}`
})
let base = Airtable.base("appk7A90P9mH7LFnl")

const actions = {
  initializeRoadmap({ commit }) {
    base("roadmap")
      .select()
      .firstPage((err, records) => {
        if (err) {
          return
        }
        records.forEach(record => {
          if (record.fields.active) commit("addMilestone", record)
        })
      })
  }
}

const mutations = {
  addMilestone(state, value) {
    state.milestones.push(value.fields)
  }
}

export default { state, actions, mutations }
