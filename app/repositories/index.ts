import { NuxtAxiosInstance } from "@nuxtjs/axios";
import LandingPageRepository from "./landingPageRepository";

export default ($axios: NuxtAxiosInstance) => ({
  landingpage: LandingPageRepository($axios),
})
