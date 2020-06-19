import jsonp from "jsonp"

const state = {
  meetupEvents: []
}

const mutations = {
  initMeetupEvents(state) {
    jsonp(
      "https://api.meetup.com/pro/cosmos_network/events",
      null,
      (err, { data }) => {
        state.meetupEvents = data
      }
    )
  }
}

export default { state, mutations }
