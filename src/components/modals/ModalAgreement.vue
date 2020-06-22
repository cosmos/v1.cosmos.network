<template lang="pug">
modal.modal-agreement(size='fullscreen')
  div(slot='title') HackATOM Participation Agreement
  text-container: page-content
  div(slot='footer')
    btn(value='Cancel', @click.native='no')
    btn(value='Agree', @click.native='yes')
</template>

<script>
import { mapGetters } from "vuex"
import Btn from "@nylira/vue-button"
import Modal from "modals/Modal"
import PageContent from "content/md/hackatom-agreement.md"
import TextContainer from "common/NiTextContainer"
export default {
  name: "modal-agreement",
  components: {
    Btn,
    Modal,
    PageContent,
    TextContainer
  },
  computed: {
    ...mapGetters(["links"])
  },
  methods: {
    yes() {
      this.$store.commit("setHackATOMAgreed", true)
      window.location.href = this.links.hackathon.two
    },
    no() {
      this.$store.commit("setHackATOMModal", false)
    }
  }
}
</script>
