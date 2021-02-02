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
        h1: "Sign up for IBC updates",
        h2:
          "Get engineering, development and ecosystem updates on IBC (Inter-Blockchain Communciation protocol) - straight to your inbox.",
        requestURL: "https://app.mailerlite.com/webforms/submit/y2i9q3",
        callback: "jQuery183003200065485233239_1594158714190",
        _: "1594158730789",
        svg: "/images/icons/icon-ibc.svg",
        background:
          'url("/images/background-stars.svg") repeat, linear-gradient(137.58deg, #161931 9.49%, #2D1731 91.06%)'
      }
    }
  }
}
</script>
