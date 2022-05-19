import { defineStore } from "pinia";

export interface State {
  userInfo: any;
  accessToken: string;
  refreshToken: string;
  isAuthorized: boolean;
}

export const useState = defineStore({
  id: "auth.state",
  state: (): State => {
    return {
      userInfo: "",
      accessToken: "",
      refreshToken: "",
      isAuthorized: false,
    };
  },
});
