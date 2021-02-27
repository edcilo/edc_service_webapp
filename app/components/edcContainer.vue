<template>
  <div :class="containerClasses">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface NameClassesInterface {
  'edc-container': boolean
  'edc-container-fluid': boolean
}

export default Vue.extend({
  props: {
    fluid: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      className: 'edc-container',
    }
  },
  computed: {
    containerClasses(): NameClassesInterface {
      return {
        'edc-container': !this.fluid,
        'edc-container-fluid': this.fluid,
      }
    },
  },
})
</script>

<style lang="scss" scoped>
@import 'assets/styles/helpers/variables';
@import 'assets/styles/helpers/mixins';

.edc-container {
  @include make-container();
  @include make-container-max-widths();
}

.edc-container-fluid {
  @include make-container();
}
</style>
