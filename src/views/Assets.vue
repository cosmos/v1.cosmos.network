<template lang="pug">

.page-assets
  tm-header(title="Visual Assets" subtitle="An overview of diagrams, wallpapers, and other media.")
    // tm-btn(value="Logos" icon="file_download" type="anchor" href="https://drive.google.com/uc?export=download&id=1O97nfTJ0hb0jGtiukQrUNKIwChX7HduM")
    tm-btn(value="Design & Logos" type="link" :to="{ name: 'design' }")
    tm-btn(value="Download Assets" type="anchor" href="https://drive.google.com/open?id=1IjsubJvkUIZ47Bvy4FNv8ggxbxTPXSyr" color="primary" icon="file_download" target="_blank" rel="noreferrer noopener")

  tm-section
    p The Cosmos identity is a seal of integrity and a promise of quality. When you decide to use Cosmos assets in your promotional materials, you are also responsible for representing Cosmos. By using the Cosmos identity, you must agree to our #[router-link(:to="{ name: 'trademark' }") trademark guidelines] and follow the #[router-link(:to="{ name: 'design' }") brand guide].

  tm-section
    .tm-cards-hz
      card-hz(
        v-for="i in orderedAssets"
        :href="i.url"
        :key="i.id"
        :img-src="require(`@/assets/images/assets/${i.id}.png`)"
        flush="true"
        :title="i.title")
        template(slot="subtitle")
          p(v-if="i.body") {{ i.body }}
          p
            span Published on {{ i.date }} #{' '}
            span(v-if="i.size") - {{ i.size }} {{ i.format.toUpperCase() }}
</template>

<script>
import { mapGetters } from "vuex"
import { orderBy } from "lodash"
import moment from "moment"
import CardHz from "cards/TmCardHz"
import TmBtn from "common/TmBtn"
import TmHeader from "common/TmHeader"
import TmSection from "common/TmSection"
export default {
  name: "page-assets",
  metaInfo: { title: "Visual Assets" },
  components: {
    TmBtn,
    CardHz,
    TmHeader,
    TmSection
  },
  computed: {
    ...mapGetters(["assets"]),
    orderedAssets() {
      return orderBy(
        this.assets,
        [
          function(a) {
            return moment(a.date)
          }
        ],
        "desc"
      )
    }
  }
}
</script>
