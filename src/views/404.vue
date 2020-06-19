<template lang="pug">
page(title="Error 404" subtitle="Page Not Found")
  tm-content
    h2 Whoops!
    p The page you visited either does not exist or has been moved in a website reshuffle. We're sorry for the inconvenience. Try navigating with the website menu above.
    p Please notify us in #[a(:href="links.community.matrix") Developer Chat] and we will fix this error as soon as we can. Thank you for your patience.
</template>

<script>
import { mapGetters } from "vuex"
import Page from "common/NiPage"
import TmContent from "common/TmContent"
export default {
  name: "page-404",
  components: {
    Page,
    TmContent
  },
  computed: { ...mapGetters(["links"]) },
  metaInfo: { title: "Error 404" }
}
</script>
