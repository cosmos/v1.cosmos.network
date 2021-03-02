<template lang="pug">
  div
    .container
      .dropdown.wrapper
        div Version:
        select(:value="version" @input="versionChange($event.target.value)")
          option(v-for="v in versionList" :value="v.key") {{v.label}}
      .wrapper
        .input-url
          span.input-url__label Base URL:
          input.input-url__input(v-model="host" placeholder="example.org" @keypress.enter="hostChange")
          button.input-url__button(@click="hostChange") Change
      #swagger
</template>

<style lang="stylus" scoped>
.container
  margin-top 10rem

.wrapper
  margin-left auto
  margin-right auto
  max-width 1460px
  padding 0 20px
  display flex
  justify-content flex-end
  font-size 1rem
  margin-bottom 0.5rem

.dropdown
  box-siging border-box
  align-items center
  font-size 1rem

select
  font-family inherit
  font-size inherit
  margin-left 0.5rem
  border 1px solid rgba(140, 145, 177, 0.32)
  background rgba(0, 0, 0, 0)
  line-height 1.75

input
  font-size inherit
  border 1px solid rgba(140, 145, 177, 0.32)
  margin-top 0.25rem

.input-url
  align-items center
  gap 0.5rem
  grid-auto-flow column

.input-url__label
  margin-right 0.5rem

.input-url__input
  line-height 1.75
  width 250px
  padding 0 0.25rem
  margin 0.5rem 0.5rem 0.5rem 0

.input-url__button
  font-size inherit
  border 1px solid rgba(140, 145, 177, 0.32)
  background none
  cursor pointer
  padding 0 0.5rem
  border-radius 4px
  line-height 1.75
  transition all 0.25s

  &:hover
    border 1px solid rgba(140, 145, 177, 0.5)

  &:active
    opacity 0.5

#swagger
  min-height 100vh
</style>

<script>
import SwaggerUI from "swagger-ui"
import "swagger-ui/dist/swagger-ui.css"
import versionList from "@/swagger.json"
import { find } from "lodash"
import axios from "axios"
import YAML from "yamljs"

export default {
  props: ["version"],
  mounted() {
    this.swaggerInit(this.version)
  },
  watch: {
    version: {
      handler: function(newVersion) {
        this.swaggerInit(newVersion)
      }
    }
  },
  data: function() {
    return {
      versionList,
      spec: null,
      host: null
    }
  },
  methods: {
    async swaggerInit(v, host) {
      const version = find(versionList, ["key", v])
      const yaml = (await axios.get(version.url)).data
      const spec = YAML.parse(yaml)
      spec.schemes = ["https", "http"]
      const dom_id = "#swagger"
      if (host) {
        spec.host = host
      } else spec.host = "api.cosmos.network"
      this.host = spec.host
      if (version) {
        this.spec = SwaggerUI({ dom_id, spec })
      } else {
        this.versionChange("")
      }
    },
    versionChange(ver) {
      this.$router.push(`/rpc/${ver}`)
    },
    hostChange() {
      this.swaggerInit(this.version, this.host)
    }
  }
}
</script>
