import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = (): StateInterface => ({
  name: "default",
  schema: null,
})

export type LandingpageState = ReturnType<typeof state>

export const getters: GetterTree<LandingpageState, LandingpageState> = {
  name: state => state.name,
}

export const mutations: MutationTree<LandingpageState> = {
  setName(state, name: string) {
    state.name = name
  },
  setSchema(state, schema: SchemaInterface) {
    state.schema = schema
  },
}

export const actions: ActionTree<LandingpageState, LandingpageState> = {
  async getLandingPageSchema({ commit }, payload: { locale: string }) {
    const res = await (this as any).$repositories.landingpage.getSchema(
      payload.locale
    )
    const { status, data } = res

    if (status === 200) {
      commit('setName', data.data.name)
      commit('setSchema', data.data.schema)
    } else {
      console.error('--> Error getting schema from landing.edcilo.com')
    }
  },
  async postContactForm({ commit }, payload: PostContactInterface) {
    const res = await (this as any).$repositories.landingpage.postContactForm(
      payload.name,
      payload.email,
      payload.msg,
    )
    const { status, data } = res
  },
}

export interface PostContactInterface {
  name: string
  email: string
  msg: string
}

export interface JobInterface {
  title: string
  position: string
  time: number
}

export interface TechnologieInterface {
  title: string
  description: string
}

export interface SkillInterface {
  title: string
  years: number
}

export interface ScheduleInterface {
  activity: string
  start: string
  duration: number
  icon: string
}

export interface SchemaInterface {
  hero: {
    label: string
    title: string
    subtitle: string
    background: string
  }
  about: {
    label: string
    title: string
    name: string
    experience: number
    description: string
    jobs: {
      title: string
      jobs: Array<JobInterface>
    }
    doing: {
      title: string
      description: string
      technologies: Array<TechnologieInterface>
    }
    skills: {
      title: string
      skills: Array<SkillInterface>
    }
  }
  powered_by: {
    label: string
    title: string
    branding: Array<string>
  }
  contact: {
    label: string
    title: string
    background: string
    schedule: Array<ScheduleInterface>
  }
  footer: {
    title: string
    email: string
    address: string
    timezone: number,
    social: {
      facebook: string
      linkedin: string
      twitter: string
    }
  }
  terms_and_conditions: {
    title: string
    label: string
    content: string
  },
  cookies: {
    title: string
    label: string
    content: string
  }
}

interface StateInterface {
  name: String
  schema: null | SchemaInterface
}
