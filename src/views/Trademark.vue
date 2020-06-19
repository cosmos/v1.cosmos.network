<template lang="pug">
.page-trademark
  tm-header(
    title="Trademark"
    subtitle="Learn about the guidelines for Cosmos trademark usage.")
    tm-btn(value="Visual Design" type="link" :to="{ name: 'design' }" color="primary")
  tm-section
    tm-content: page-content
</template>

<script>
import PageContent from "content/md/trademark.md"
import TmBtn from "common/TmBtn"
import TmContent from "common/TmContent"
import TmHeader from "common/TmHeader"
import TmSection from "common/TmSection"
export default {
  name: "page-trademark",
  metaInfo: {
    title: "Trademark"
  },
  components: {
    TmBtn,
    TmContent,
    TmHeader,
    TmSection,
    PageContent
  }
}
</script>
