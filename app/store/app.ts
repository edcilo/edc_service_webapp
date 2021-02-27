import { MutationTree } from 'vuex'

export const state = (): StateInterface => {
  return ({
    version: "1.0.0",
    locale: "es",
    darkTheme: false,
    headerFixed: true,
    loading: true
  })
}

export type AppState = ReturnType<typeof state>

export const mutations: MutationTree<AppState> = {
  fixHeader(state, fixed: boolean = true): void {
    state.headerFixed = fixed;
  },
  setDarkTheme(state, active: boolean) {
    state.darkTheme = active;
  },
  setLocale(state, lang: string) {
    state.locale = lang;
  }
}

interface StateInterface {
  version: String;
  locale: String;
  darkTheme: Boolean;
  headerFixed: Boolean;
  loading: Boolean;
}
