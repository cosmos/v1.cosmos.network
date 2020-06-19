<template lang="pug">
  div
    .container
      cosmos-newsletter-signup(v-bind="{...newsletter}" fullscreen="100vh")
</template>

<style lang="stylus" scoped>
.container
  padding-top 4rem
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
        zcld: "16352f88328053f9",
        zc_formIx: "4ef47fbb86ab6668b78ce576d7aa791940fbf6cd35f5c50c",
        svg: "/images/icons/icon-ibc.svg",
        background:
          'url("/images/background-stars.svg") repeat, linear-gradient(137.58deg, #161931 9.49%, #2D1731 91.06%)'
      }
    }
  }
}
</script>
