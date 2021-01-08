let Airtable = require("airtable")

const apiKey = process.env.VUE_APP_AIRTABLE_API_KEY

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: `${apiKey}`
})

let base = Airtable.base("app6cmf6dU89OHtUP")

let gatherRecords = function(commit, baseName, mutationName) {
  base(baseName)
    .select()
    // firstPage() returns first 100 of records in each request
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
  media: [],
  videos: [],
  events: []
}

const actions = {
  initCommunityMedia({ commit }) {
    gatherRecords(commit, "media", "addCommunityMedia")
  },
  initCommunityVideos({ commit }) {
    gatherRecords(commit, "videos", "addCommunityVideo")
  },
  initCommunityEvents({ commit }) {
    gatherRecords(commit, "events", "addCommunityEvent")
  }
}

const mutations = {
  addCommunityMedia(state, value) {
    state.media.push(value.fields)
  },
  addCommunityVideo(state, value) {
    state.videos.push(value.fields)
  },
  addCommunityEvent(state, value) {
    state.events.push(value.fields)
  }
}

export default { state, actions, mutations }
