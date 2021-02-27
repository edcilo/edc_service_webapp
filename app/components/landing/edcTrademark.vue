<template>
  <div class="edc-trademark">
    <edc-container class="edc-trademark__content">
      <div class="edc-trademark__body">
        <el-row type="flex" class="edc-trademark__row">
          <el-col class="edc-trademark__col">
            <img
              class="edc-trademark__logo"
              src="https://space.edcilo.com/edcilo-logo-clear.svg"
              alt="logo-white"
            />
          </el-col>

          <el-col class="edc-trademark__col" />

          <el-col class="edc-trademark__col" />

          <el-col class="edc-trademark__col">
            <h3 class="edc-trademark__title">{{ title }}</h3>
            <ul class="edc-trademark__contact">
              <li class="edc-trademark__contact-item">
                <el-link :href="`mailto:${email}`" type="primary">
                  {{ email }}
                </el-link>
              </li>
              <li class="edc-trademark__contact-item">
                {{ address }}
              </li>
              <li class="edc-trademark__contact-item">
                <font-awesome-icon
                  v-if="activity"
                  :icon="['fas', activity.icon]"
                />
                {{ currentTime }}
                GMT{{ `${timezone > 0 ? '+' : ''}${timezone}` }}
              </li>
            </ul>

            <ul class="edc-trademark__social">
              <li v-for="(link, net) in social" :key="net">
                <a :href="link" target="_blank">
                  <font-awesome-icon :icon="['fab', net]" />
                </a>
              </li>
            </ul>
          </el-col>
        </el-row>
      </div>
    </edc-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { addHours, format, isAfter, isBefore } from 'date-fns'
import { es, enUS } from 'date-fns/locale'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBed, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { SchemaInterface, ScheduleInterface } from '~/store/landingpage'

library.add(faBed, faFacebook, faLaptopCode, faLinkedin, faTwitter)

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    social: {
      type: Object as () => SchemaInterface['footer']['social'],
      required: true,
    },
  },
  data() {
    const dateTimeFn: number | undefined = undefined
    const time: Date = new Date()
    return {
      time,
      dateTimeFn,
      locale: es,
    }
  },
  computed: {
    activity(): string {
      const schema = this.$store.state.landingpage.schema

      if (schema === null) {
        return ''
      }

      const schedule = schema.contact.schedule

      const activity = schedule.find((s: ScheduleInterface): boolean => {
        const start = new Date(`${format(this.time, 'yyyy-MM-dd')} ${s.start}`)
        const end = addHours(start, s.duration)

        return isAfter(this.time, start) && isBefore(this.time, end)
      })

      return activity === undefined ? '' : activity
    },
    timezone(): number {
      const schema = this.$store.state.landingpage.schema

      if (schema === null) {
        return 0
      }

      return schema.footer.timezone
    },
    currentTime(): string {
      return format(this.time, 'hh:mm bbbb', { locale: this.locale })
    },
  },
  beforeDestroy() {
    clearTimeout(this.dateTimeFn)
  },
  mounted() {
    this.$nextTick(() => {
      this.dateTimeFn = setInterval(this.getCurrentTime, 1000) as any
    })
  },
  methods: {
    getCurrentTime() {
      const now = new Date()
      const utc = now.getTime() + now.getTimezoneOffset() * 60000

      this.time = new Date(utc + 3600000 * this.timezone)
      this.locale = this.$i18n.locale === 'es' ? es : enUS
    },
  },
})
</script>

<style lang="scss" scoped>
@import 'assets/styles/helpers/variables';

.edc-trademark {
  background: $c-gray-darkest;
  min-width: 320px;
  width: 100%;

  .dark-mode & {
    background: darken($c-gray-darkest, 15%);

    &__title {
      color: $c-gray-lighter;
    }
  }

  &__content {
    padding: $padding-lg;
  }

  &__row {
    @media only screen and (max-width: 512px) {
      flex-direction: column;
    }
  }

  &__col {
    text-align: center;
    color: $c-white;

    @media only screen and (max-width: 512px) {
      margin-bottom: $margin-lg;
    }
  }

  &__logo {
    width: 80px;
  }

  &__title {
    margin: 0 0 $margin-lg;
    font-family: $font-sans-2;
    font-size: $font-2xl;
    font-weight: $fw-semibold;
    line-height: 1;
    text-transform: uppercase;
  }

  &__contact {
    margin: 0 0 $margin-lg;
    padding: 0;
    list-style: none;

    &-item {
      margin-bottom: $margin-sm;
      font-size: $font-base;
    }
  }

  &__social {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin: 0 $margin-sm;

      a {
        color: $c-white;
      }
    }
  }
}
</style>
