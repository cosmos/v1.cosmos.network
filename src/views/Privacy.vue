<template lang="pug">
page(
  title="Privacy Policy"
  subtitle="Learn about our strict privacy policy.")
  tm-content: page-content
</template>

<script>
import Page from "common/NiPage"
import PageContent from "content/md/privacy-policy-icf.md"
import TmContent from "common/TmContent"
export default {
  name: "page-privacy",
  metaInfo: { title: "Privacy Policy" },
  components: {
    Page,
    PageContent,
    TmContent
  }
}
</script>
