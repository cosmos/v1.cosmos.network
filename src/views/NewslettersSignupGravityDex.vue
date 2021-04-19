<template lang="pug">
  div
    .container
      cosmos-newsletter-signup(v-bind="{...newsletter}" fullscreen="100vh")
</template>

<style lang="stylus" scoped>
.container
  background var(--app-nav)
</style>

<script>
import { CosmosNewsletterSignup } from "@cosmos-ui/vue"

export default {
  components: {
    CosmosNewsletterSignup
  },
  created() {
    this.$emit("newsletter", false)
  },
  data() {
    return {
      newsletter: {
        h1: "Get Gravity DEX updates",
        h2: "Get Gravity DEX updates - straight to your inbox.",
        requestURL: "https://app.mailerlite.com/webforms/submit/r6l5z8",
        callback: "jQuery18306433350137233467_1617924323730",
        "ml-submit": "1",
        anticsrf: "anticsrf",
        ajax: "1",
        guid: "6ca22b31-4124-e926-cf4f-272ff9f44ec3",
        _: "1617924327784",
        svg: "/images/icons/icon-terminal-window.svg"
      }
    }
  }
}
</script>
