const state = {
  countdown: {
    now: Math.trunc(new Date().getTime() / 1000),
    genesis: "2019-03-13T23:00:00.000Z"
  },
  largeCountdownButton: false,
  largeCountdown: false,
  step: 1,
  steps: [
    {
      id: 5,
      mobile: "SDK Security Audits",
      desktop: "Cosmos SDK Security Audits"
    },
    {
      id: 4,
      mobile: "SDK Feature Freeze",
      desktop: "Cosmos SDK Feature Freeze"
    },
    {
      id: 3,
      mobile: "Game of Stakes Ends",
      desktop: "Game of Stakes Completed"
    },
    {
      id: 2,
      mobile: "Genesis Txs Collected",
      desktop: "Genesis Transactions Collected"
    },
    {
      id: 1,
      mobile: "Cosmos Launch Started",
      desktop: "Cosmos Hub Launch Initiated"
    }
  ],
  tweet:
    "https://twitter.com/home?status=%F0%9F%9A%A6The%20countdown%20for%20the%20Cosmos%20Hub%20mainnet%20launch%20has%20started.%20Houston,%20prepare%20for%20liftoff.%20Follow%20the%20launch%20progress%3A%20https%3A//cosmos.network/launch%0A%23cosmoslaunch",
  hashtag: "#cosmoslaunch"
}

const actions = {}

const mutations = {
  setLaunchCountdownButton(state, value) {
    state.largeCountdownButton = value
  },
  setLaunchCountdown(state, value) {
    state.largeCountdown = value
  },
  setLaunchStep(state, value) {
    state.step = value
  },
  updateNow(state) {
    state.countdown.now = Math.trunc(new Date().getTime() / 1000)
  }
}

export default { state, actions, mutations }
