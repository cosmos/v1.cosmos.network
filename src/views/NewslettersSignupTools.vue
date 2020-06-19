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
        h1: "Get Cosmos tools & technology updates",
        h2:
          "Get engineering and development updates on Cosmos SDK, Tendermint Core, IBC and more - straight to your inbox.",
        zcld: "16352f8832a25ec1",
        zc_formIx: "4ef47fbb86ab6668aa0d5017850d35fbf4ad4b279730a79d",
        svg: "/images/icons/icon-terminal-window.svg"
      }
    }
  }
}
</script>
