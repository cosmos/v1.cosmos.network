<template lang="pug">
form#form-unsub(
  action='https://crm.zoho.com/crm/Unsubscribe?encoding=UTF-8', method='POST')
  highlight(
    title="Unsubscribe"
    subtitle="Enter your email to unsubscribe from the Cosmos newsletter.")
    tm-field#unsubscribe-email(name="email" maxlength="100" type="email" required="true" value="" placeholder="Email Address" size="lg")
    tm-btn(type="submit" value="Unsubscribe" color="primary" size="lg")

    input(type='hidden', name='xnQsjsdp', value='e0996b72afb9a3131746a238cf49afe9e8b4a9dbba9cd007fb78124d27b9df73')
    input(type='hidden', name='actionType', value='dW5zdWJzY3JpYmU=')
    input(type='hidden', name='returnURL', value='https://cosmos.network')
</template>

<script>
import Page from "common/NiPage"
import Highlight from "cards/Highlight"
import TmBtn from "common/TmBtn"
import TmField from "common/TmField"
export default {
  name: "page-unsubscribe",
  metaInfo: { title: "Unsubscribe" },
  components: {
    Highlight,
    Page,
    TmBtn,
    TmField
  }
}
</script>

<style lang="stylus">
@import '~variables'

#form-unsub
  margin 0 auto
  max-width 40rem
  input
    background var(--app-bg)

@media screen and (min-width: 768px)
  #form-unsub
    margin 3rem auto
</style>
