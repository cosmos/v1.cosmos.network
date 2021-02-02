<template lang="pug">
  div
    .container
      validator-newsletter-signup(v-bind="{...newsletter}" validator fullscreen="100vh")
</template>

<style lang="stylus" scoped>
.container
  background var(--app-nav)
</style>

<script>
import { ValidatorNewsletterSignup } from "@cosmos-ui/vue"

export default {
  props: {
    validator: {
      default: true
    }
  },
  components: {
    ValidatorNewsletterSignup
  },
  created() {
    this.$emit("newsletter", false)
  },
  data() {
    return {
      newsletter: {
        h1: "Cosmos Hub Validator Updates",
        h2:
          "Are you a Cosmos Hub Validator? Sign up for the latest on Cosmos Hub – straight to your inbox.",
        requestURL: "https://app.mailerlite.com/webforms/submit/i6u0c7",
        callback: "jQuery183011071425776505928_1611970246127",
        _: "1611970257061"
      }
    }
  }
}
</script>
