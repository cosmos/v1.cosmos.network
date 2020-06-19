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
        h1: "Sign up for Cosmos updates",
        h2:
          "Get the latest from the Cosmos ecosystem and engineering updates, straight to your inbox.",
        topics: [
          {
            h1: "Tools & technology",
            h2:
              "Engineering and development updates on Cosmos SDK, Tendermint, IBC and more.",
            zcld: "16352f8832a25ec1",
            zc_formIx: "4ef47fbb86ab6668aa0d5017850d35fbf4ad4b279730a79d",
            svg: "/images/icons/icon-window-code.svg"
          },
          {
            h1: "Ecosystem & community",
            h2:
              "General news and updates from the Cosmos ecosystem and community.",
            zcld: "16352f8832a25f5b",
            zc_formIx: "4ef47fbb86ab6668aa0d5017850d35fbcd58b642c14f9e39",
            svg: "/images/icons/icon-network.svg"
          }
        ]
      }
    }
  }
}
</script>
