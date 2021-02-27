<template>
  <span :class="classes" />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    code: {
      type: String,
      required: true,
    },
    squared: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      className: 'edc-flag-icon',
    }
  },
  computed: {
    classes(): Array<string> {
      const classes = [this.className, 'flag-icon', `flag-icon-${this.code}`]

      if (this.squared) {
        classes.push('flag-icon-squared')
      }

      return classes
    },
  },
})
</script>

<style lang="scss" scoped>
@import 'flag-icon-css/css/flag-icon.css';
</style>
