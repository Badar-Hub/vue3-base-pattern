import { User, UserPermissions } from "./../../types/user";
import { defineStore } from "pinia";
import { computed } from "vue";
import { useState } from "./state";

export const useGetters = defineStore("UM.getters", () => {
  const state = useState();

  const isSettingsDialogOpen = computed(
    (): boolean => state.isUserSettingsOpen
  );
  const rolesList = computed((): string[] => {
    return state.rolesList;
  });

  const designationsList = computed((): string[] => state.designationsList);

  const userPermissions = computed(
    (): UserPermissions => state.selectedUserPermissions
  );

  const selectedUser = computed((): User | null => state.selectedUser);

  const usersList = computed((): User[] => state.users);
  const count = computed((): number => state.usersCount);

  return {
    userPermissions,
    isSettingsDialogOpen,
    rolesList,
    designationsList,
    selectedUser,
    usersList,
    count,
  };
});
