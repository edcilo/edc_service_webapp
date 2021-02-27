<template>
  <div class="edc-dark-theme">
    <font-awesome-icon class="edc-dark-theme__sun" icon="sun" />
    <el-switch
      v-model="active"
      class="edc-dark-theme__switch"
      @change="changeTheme"
    />
    <font-awesome-icon class="edc-dark-theme__moon" icon="moon" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

library.add(faSun, faMoon)

export default Vue.extend({
  data() {
    return {
      active: false,
    }
  },
  computed: {
    darkThemeActivated(): boolean {
      return this.$store.state.app.darkTheme
    },
  },
  watch: {
    active: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          ;(this as any).$colorMode.preference = 'dark'
        } else {
          ;(this as any).$colorMode.preference = 'light'
        }
      },
    },
  },
  mounted() {
    this.active = this.darkThemeActivated
  },
  methods: {
    changeTheme() {
      this.setDarkTheme(this.active)
    },
    ...mapMutations({
      setDarkTheme: 'app/setDarkTheme',
    }),
  },
})
</script>

<style lang="scss" scoped>
@import 'assets/styles/helpers/variables';

.edc-dark-theme {
  display: inline-flex;
  align-items: center;
  font-size: $font-lg;

  &__switch {
    margin: 0 $margin-sm;
  }
}
</style>
