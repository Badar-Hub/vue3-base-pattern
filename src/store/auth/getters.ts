import { computed } from "vue";
import { useState } from "./state";
import { defineStore } from "pinia";

export const useGetters = defineStore("auth.getters", () => {
  const state = useState();

  const userInfo = computed((): any => state.userInfo);
  const accessToken = computed((): string => state.accessToken);
  const refreshToken = computed((): string => state.refreshToken);
  const isAuthorized = computed((): boolean => state.isAuthorized);

  return {
    userInfo,
    accessToken,
    refreshToken,
    isAuthorized,
  };
});
