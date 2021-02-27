<template>
  <div class="container">
    <edc-cover
      v-show="hero !== null"
      :background="hero ? hero.background : ''"
      :label="hero ? hero.label : ''"
      :title="hero ? hero.title : ''"
      :subtitle="hero ? hero.subtitle : ''"
    />

    <edc-about
      v-show="about !== null"
      :label="about ? about.label : ''"
      :title="about ? about.title : ''"
      :description="about ? about.description : ''"
      :experience="about ? about.experience : 0"
      :jobs="about ? about.jobs : {}"
      :doing="about ? about.doing : {}"
      :skills="about ? about.skills : {}"
    />

    <edc-powered-by
      v-show="powered !== null"
      :label="powered ? powered.label : ''"
      :title="powered ? powered.title : ''"
      :branding="powered ? powered.branding : []"
    />

    <edc-contact
      v-show="contact !== null"
      :label="contact ? contact.label : ''"
      :title="contact ? contact.title : ''"
    />

    <edc-trademark
      v-show="footer !== null"
      :title="footer ? footer.title : ''"
      :email="footer ? footer.email : ''"
      :address="footer ? footer.address : ''"
      :social="footer ? footer.social : {}"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { SchemaInterface } from '~/store/landingpage'

export default Vue.extend({
  data() {
    return {
      heroHeight: 100,
    }
  },
  computed: {
    about(): SchemaInterface['about'] | null {
      return this.landingSchema.about || null
    },
    contact(): SchemaInterface['contact'] | null {
      return this.landingSchema.contact || null
    },
    footer(): SchemaInterface['footer'] | null {
      return this.landingSchema.footer || null
    },
    hero(): SchemaInterface['hero'] | null {
      return this.landingSchema.hero || null
    },
    landingSchema(): SchemaInterface {
      return this.$store.state.landingpage.schema || {}
    },
    locale(): string {
      return this.$store.state.app.locale
    },
    powered(): SchemaInterface['powered_by'] | null {
      return this.landingSchema.powered_by || null
    },
  },
})
</script>

<style lang="scss">
@import 'assets/styles/helpers/variables';

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
