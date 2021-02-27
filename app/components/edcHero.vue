<template>
  <div :class="className" :style="{ height: `${height}vh` }">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    height: {
      type: Number,
      default: 100,
      validator(value: number): boolean {
        return value >= 0 && value <= 100
      },
    },
  },
  data() {
    return {
      className: 'edc-hero',
    }
  },
}
</script>

<style lang="scss" scoped>
.edc-hero {
  width: 100%;
  height: 100vh;
}
</style>
