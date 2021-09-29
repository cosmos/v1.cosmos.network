<template lang="pug">
  div
    .container
      cosmos-newsletter-signup(v-bind="{...newsletter}" fullscreen="100vh")
</template>

<style lang="stylus" scoped>
.container
  background var(--app-nav)
</style>

<script lang="ts">
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
        h1: "Sign up for Cosmos updates",
        h2:
          "Get the latest from the Cosmos ecosystem and engineering updates, straight to your inbox.",
        requestURL: "https://app.mailerlite.com/webforms/submit/o0t6d7",
        callback: "jQuery18307296239382192573_1594158619276",
        _: "1594158625563",
        groups: "107770117"
      }
    }
  }
}
</script>
