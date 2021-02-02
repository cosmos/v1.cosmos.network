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
        h1: "Get Cosmos tools & technology updates",
        h2:
          "Get engineering and development updates on Cosmos SDK, Tendermint Core, IBC and more - straight to your inbox.",
        requestURL: "https://app.mailerlite.com/webforms/submit/u3s3t9",
        callback: "jQuery1830889145586852685_1594158789750",
        _: "1594158795317",
        svg: "/images/icons/icon-terminal-window.svg"
      }
    }
  }
}
</script>
