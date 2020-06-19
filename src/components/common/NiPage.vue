<template lang="pug">
.ni-page
  page-header(:icon='icon' :splash="splash")
    div(slot='title') {{ title }}
    div(slot='subtitle')
      template(v-if="subtitle") {{ subtitle }}
      template(v-else): slot(name="subtitle")
    div(slot="menu"): slot(name="menu")
  main.ni-page-main: slot
  page-footer
</template>

<script>
import PageHeader from "common/NiPageHeader"
import PageFooter from "common/NiPageFooter"
export default {
  name: "ni-page",
  props: ["title", "subtitle", "icon", "splash"],
  components: {
    PageHeader,
    PageFooter
  }
}
</script>

<style lang="stylus">
@require '~variables'

.ni-page
  padding var(--pad320)

@media screen and (min-width: 768px)
  .ni-page
    padding-right var(--pad768)
    padding-left var(--pad768)

@media screen and (min-width: 1280px)
  .ni-page
    padding-right var(--pad1280)
    padding-left var(--pad1280)

@media screen and (min-width: 1920px)
  .ni-page
    padding-right var(--pad1920)
    padding-left var(--pad1920)
</style>
