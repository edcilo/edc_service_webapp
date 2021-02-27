<template>
  <div class="edc-about">
    <edc-container class="edc-about__content">
      <div class="edc-about__body">
        <div class="edc-about__me">
          <span class="edc-about__label">{{ label }}</span>
          <h2 class="edc-about__title">{{ title }}</h2>
          <p class="edc-about__description">{{ description }}</p>
        </div>
      </div>

      <el-row type="flex" class="edc-about__rows">
        <el-col class="edc-about__cols">
          <h3 class="edc-about__subtitle">{{ jobs.title }}</h3>
          <ul class="edc-about__job-list">
            <li
              v-for="job in jobs.jobs"
              :key="job.title"
              class="edc-about__job-item"
            >
              <h5 class="edc-about__job-title">{{ job.title }}</h5>
              <span class="edc-about__job-position">{{ job.position }}</span>
              <span class="edc-about__job-time">{{ job.time }}</span>
            </li>
          </ul>
        </el-col>

        <el-col class="edc-about__cols">
          <h3 class="edc-about__subtitle">{{ doing.title }}</h3>
          <p class="edc-about__doing-description">
            {{ doing.description }}
          </p>
          <ul class="edc-about__doing-list">
            <li
              v-for="tech in doing.technologies"
              :key="tech.title"
              class="edc-about__doing-item"
            >
              <h5 class="edc-about__doing-title">{{ tech.title }}</h5>
              <span class="edc-about__doing-description">
                {{ tech.description }}
              </span>
            </li>
          </ul>
        </el-col>

        <el-col class="edc-about__cols">
          <h3 class="edc-about__subtitle">{{ skills.title }}</h3>
          <ul class="edc-about__skills-list">
            <li
              v-for="skill in skills.skills"
              :key="skill.title"
              class="edc-about__skills-item"
            >
              <el-progress
                :percentage="(100 / experience) * skill.years"
                :show-text="false"
              />
              <div class="edc-about__skills-description">
                <span class="edc-about__skills-title">{{ skill.title }}</span>
                <span class="edc-about__skills-years">
                  {{ skill.years }}
                  {{ $tc('year', (100 / experience) * skill.years) }}
                </span>
              </div>
            </li>
          </ul>
        </el-col>
      </el-row>
    </edc-container>
  </div>
</template>

<script lang="ts">
import { SchemaInterface } from '~/store/landingpage'

export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
    jobs: {
      type: Object as () => SchemaInterface['about']['jobs'],
      required: true,
    },
    doing: {
      type: Object as () => SchemaInterface['about']['doing'],
      required: true,
    },
    skills: {
      type: Object as () => SchemaInterface['about']['skills'],
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/helpers/variables';

.edc-about {
  background: transparent;
  display: flex;
  min-width: 320px;
  width: 100%;
  line-height: $line-height-base;
  font-family: $font-sans;

  .dark-mode & {
    background: darken($c-white, 90%);

    &__title,
    &__subtitle {
      color: $c-gray-lightest;
    }

    &__description {
      color: $c-gray-lighter;
    }

    &__job {
      &-position {
        color: $c-gray-lighter;
      }
      &-time {
        color: $c-gray-base;
      }
    }

    &__doing {
      &-description {
        color: $c-gray-lighter;
      }
    }

    &__skills {
      &-item {
        color: $c-gray-lighter;
      }
    }
  }

  &__content {
    width: 100%;
    height: 100%;
    padding: $padding-3xl 0;
  }

  &__body {
    display: flex;
    flex-direction: column;
  }

  &__me {
    max-width: 640px;
    width: 100%;
    text-align: center;
    align-self: center;
    margin-bottom: $margin-xl;
  }

  &__label {
    font-family: $font-family-cursive;
    font-size: $font-base;
    color: $c-primary;
  }

  &__title {
    margin: 0 0 $margin-lg;
    color: $c-dark;
    font-family: $font-sans-2;
    font-size: $font-4xl;
    font-weight: $fw-semibold;
    line-height: 1;
    text-transform: uppercase;
  }

  &__subtitle {
    text-align: center;
    font-family: $font-sans-2;
    font-size: $font-2xl;
    font-weight: $fw-medium;
    line-height: 1;
    text-transform: uppercase;
    margin-bottom: $margin-xl;
  }

  &__description {
    color: $c-gray-darker;
  }

  &__job {
    &-list {
      margin: 0;
      padding: 0;
      list-style: none;
      text-align: left;
    }

    &-item {
      margin-bottom: $margin-base;

      @media only screen and (max-width: 768px) {
        text-align: center;
      }
    }

    &-title {
      color: $c-primary;
      font-size: $font-base;
      font-family: $font-sans;
      font-weight: $fw-semibold;
      margin-bottom: 0;
    }

    &-position {
      display: block;
    }

    &-time {
      display: block;
      color: $c-gray-darker;
    }
  }

  &__doing {
    &-list {
      margin: 0;
      padding: 0;
      list-style: none;
      text-align: left;
    }

    &-item {
      margin-bottom: $margin-base;
    }

    &-title {
      color: $c-primary;
      font-size: $font-base;
      font-family: $font-sans;
      font-weight: $fw-semibold;
      margin-bottom: 0;
    }

    &-description {
      color: $c-gray-darker;
      text-align: left;
      margin-bottom: $margin-base;
    }
  }

  &__skills {
    &-list {
      margin: 0;
      padding: 0;
      list-style: none;
      text-align: left;
    }

    &-item {
      margin-bottom: $margin-base;
    }

    &-description {
      display: flex;
      justify-content: space-between;
    }

    &-title {
    }

    &-years {
    }
  }

  &__rows {
    @media only screen and (max-width: 768px) {
      flex-direction: column;
      margin-bottom: $margin-2xl;

      .edc-about__cols {
        padding: 0 $padding-base;
      }
    }
  }

  &__cols {
    padding: $padding-base;
  }
}
</style>
