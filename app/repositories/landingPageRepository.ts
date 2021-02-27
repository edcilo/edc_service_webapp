import { NuxtAxiosInstance } from "@nuxtjs/axios"

class LandingPageRepository {
  protected http!: NuxtAxiosInstance;
  protected baseUrl: string = "https://landing.edcilo.com"
  protected resource = '/api/v1'

  constructor($axios: NuxtAxiosInstance) {
    this.http = $axios
    this.http.defaults.baseURL = this.baseUrl;
  }

  getSchema(lang: string) {
    return this.http.get(`${this.resource}?lang=${lang}`)
  }

  postContactForm(name: string, email: string, message: string, recaptcha: string) {
    return this.http.post(`${this.resource}/contact`, {
      name, email, message, recaptcha
    })
  }
}

export default ($axios: NuxtAxiosInstance) => (new LandingPageRepository($axios))
