<template lang="pug">
.modal-definition(@click="close" v-if="def.active")
  .modal-definition__container(:style="css")
    .modal-definition__title {{ def.current.title }}
    .modal-definition__description {{ def.current.description }}
    .modal-definition__url(v-if="def.current.url")
      a(:href="def.current.url" target="_blank" rel="noreferrer noopener") {{ def.current.url }}
</template>

<script>
import MarkdownIt from "markdown-it"
import { mapGetters } from "vuex"
export default {
  name: "modal-definition",
  computed: {
    ...mapGetters(["modals"]),
    def() {
      return this.modals.definition
    },
    css() {
      return {
        top: this.def.top + 10 + "px",
        left: this.def.left - 16 + "px",
        right: "auto",
        bottom: "auto"
      }
    }
  },
  data: () => ({
    md: new MarkdownIt()
  }),
  methods: {
    close() {
      this.$store.commit("closeDefinition")
    }
  }
}
</script>

<style lang="stylus">
.modal-definition
  position fixed
  top 0
  left 0
  width 100vw
  height 100vh
  background hsla(0,0,0,0.1)
  background linear-gradient(to top, hsla(0,0,0,0.25), hsla(0,0,0,0.0) 30%)
  background hsla(0,0,0,0.1)
  z-index var(--z-modal)
  font-size 0.875rem

.modal-definition__container
  margin 1rem
  box-shadow hsla(0,0,0,0.25) 0 0.25rem 0.5rem
  border-radius 0.5rem
  background var(--app-bg)

  position absolute
  bottom 0
  right 0
  padding 0.75rem

.modal-definition__title
  font-weight var(--fw-bold)
  margin-bottom 0.25em

@media screen and (max-width: 767px)
  .modal-definition__container
    left 0 !important
    right 0 !important

@media screen and (min-width: 415px)
  .modal-definition__container
    max-width 24rem

@media screen and (min-width: 768px)
  .modal-definition__container
    padding 1rem
</style>
