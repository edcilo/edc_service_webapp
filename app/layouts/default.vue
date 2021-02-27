<template>
  <el-container>
    <edc-header class="edc-header" :fixed="headerFixed" />

    <Nuxt />

    <el-footer class="edc-footer" height="auto">
      <edc-footer />
    </el-footer>
  </el-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'

const title = 'edcilo.com'
const description = 'Eduardo Cifuentes, Fullstack developer'
const image = 'https://space.edcilo.com/spa/spa_hero_background.jpg'

interface DataInterface {
  loading: any
}

export default Vue.extend({
  data(): DataInterface {
    return {
      loading: null,
    }
  },
  computed: {
    headerFixed(): string {
      return this.$store.state.app.headerFixed
    },
  },
  watch: {
    '$nuxt.$route'(newVal): void {
      this.fixHeader(newVal.name.includes('index'))
    },
    '$i18n.locale'(): void {
      this.getSchema()
    },
    locale(): void {
      this.getSchema()
    },
  },
  methods: {
    async getSchema() {
      await this.$store.dispatch('landingpage/getLandingPageSchema', {
        locale: this.$i18n.locale,
      })

      if (this.loading !== null) {
        this.loading.close()
      }
    },
    ...mapMutations({
      fixHeader: 'app/fixHeader',
    }),
  },
  created() {
    this.loading = this.$loading({
      lock: true,
      background: 'rgba(0, 0, 0, 0.99)'
    });
  },
  mounted() {
    this.$nextTick(() => {
      this.getSchema()
    })
  },
  head() {
    return {
      title,
      meta: [
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: image },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'og:site_name', hid: 'og:site_name', content: 'edcilo.com' },
        { name: 'og:url', hid: 'og:url', content: 'https://edcilo.com' },
        { name: 'og:type', hid: 'og:type', content: 'website' },
        { name: 'og:title', hid: 'og:title', content: title },
        { name: 'og:description', hid: 'og:description', content: description },
        { name: 'og:image', hid: 'og:image', content: image },
      ],
    }
  },
})
</script>

<style lang="scss">
@import 'assets/styles/main';

.edc-header {
  z-index: 1;
}

.edc-footer {
  padding: 0;
}
</style>
