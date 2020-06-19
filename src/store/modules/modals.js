import disableScroll from "disable-scroll"

const state = {
  definition: {
    current: "",
    active: false,
    top: 0,
    left: 0
  }
}

const actions = {}

const mutations = {
  showDefinition(state, { event, glossary }) {
    // set the position of the modal
    let viewportOffset = event.target.getBoundingClientRect()
    state.definition.top = viewportOffset.top
    state.definition.left = viewportOffset.left

    // set the data of the modal
    let defSlug = event.target.getAttribute("data-def")
    state.definition.current = glossary.find(i => i.slug === defSlug)

    // enable the modal
    if (state.definition.current) {
      disableScroll.on()
      state.definition.active = true
    }
  },
  closeDefinition(state) {
    disableScroll.off()
    state.definition.active = false
  }
}

export default { state, actions, mutations }
