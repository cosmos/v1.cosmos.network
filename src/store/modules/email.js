import moment from "moment"

const state = {
  active: false
}

const mutations = {
  // This mutation will toggle the active state of the email
  // signup modal. If the modal is closed, the date of the
  // modal dismissal is saved to revitalize at later date.
  setEmailActive(state, active) {
    state.active = active
    if (!active) {
      localStorage.setItem("emailDismissed", new Date())
    }
  }
}

const actions = {
  // This action will revitalize the email signup modal if
  // $unitCount $unit have passed since the user dimissed the modal,
  // or if the new user has never dimissed the modal before
  initializeEmail({ commit }) {
    let unitCount = 7
    let unit = "day"
    let dateToday = new Date()
    let dateDismissed = localStorage.getItem("emailDismissed")
    let dateDiff = moment(dateToday).diff(dateDismissed, unit)

    if (!dateDismissed || dateDiff >= unitCount) {
      commit("setEmailActive", true)
    }
  }
}

export default {
  state,
  mutations,
  actions
}
