<template>
  <div>
    <el-dropdown
      v-if="flag.length > 0"
      class="edc-lang-control"
      trigger="click"
    >
      <span class="el-dropdown-link">
        <edc-flag :code="flag" />
      </span>

      <el-dropdown-menu slot="dropdown" class="edc-lang-control__dropdown">
        <el-dropdown-item v-for="item in languages" :key="item.code">
          <nuxt-link :to="switchLocalePath(item.code)">
            <edc-flag :code="item.flag" />
          </nuxt-link>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'

interface LangInterface {
  flag: string
  code: string
}

export default Vue.extend({
  data() {
    return {
      flag: '',
    }
  },
  computed: {
    langSelected(): string {
      return this.$store.state.app.locale
    },
    languages(): Array<LangInterface> {
      return (this.$i18n as any).locales
    },
  },
  watch: {
    '$i18n.locale': {
      immediate: true,
      handler(code) {
        this.setLocale(code)
      },
    },
    langSelected: {
      immediate: true,
      handler() {
        this.setFlag()
      },
    },
  },
  methods: {
    setFlag(): void {
      const locale = this.languages.find((i) => i.code === this.langSelected)

      if (locale) {
        this.flag = locale.flag
      }
    },
    ...mapMutations({
      setLocale: 'app/setLocale',
    }),
  },
})
</script>

<style lang="scss">
@import 'assets/styles/helpers/variables';

.edc-lang-control {
  margin-left: $margin-lg;
  background: $c-light;
  padding: $padding-xs $padding-sm;
  border-radius: $br-rd-sm;

  &__dropdown {
    .el-dropdown-menu__item {
      padding: 0;

      a {
        padding: $padding-sm $padding-base;
      }
    }
  }
}
</style>
