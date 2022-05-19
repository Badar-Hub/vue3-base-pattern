import { useState } from "./state";
import { defineStore } from "pinia";

export const useActions = defineStore("auth.actions", () => {
  const state = useState();

  async function setToken(payload: any) {
    state.accessToken = payload.access_token;
    state.refreshToken = payload.refresh_token;
  }

  return {
    setToken,
  };
});
