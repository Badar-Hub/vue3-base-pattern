import {
  NewUser,
  User,
  UserPermissions,
  ChangePassword,
} from "./../../types/user";
import { defineStore } from "pinia";
import { useState } from "./state";
import UserManagementService from "@/services/userManagementService";
import { Notify } from "quasar";
export const useActions = defineStore("UM.actions", () => {
  const state = useState();
  function setUserSettingsDialogState(payload: boolean): void {
    state.isUserSettingsOpen = payload;
  }

  async function addNewUser(payload: NewUser) {
    const { data } = await UserManagementService.createUser(payload);
    state.users = [...state.users, data.added_user];
    Notify.create({ color: "#31ccec", message: "User added successfully!" });
    return data;
  }

  async function updateUser(payload: User) {
    const { data } = await UserManagementService.updateUser(payload);
    const idx = state.users.findIndex((x) => x.username === data.username);
    state.users[idx] = data.updated_user;
    Notify.create({ color: "#31ccec", message: "User updated successfully!" });
    return data;
  }

  async function changePassword(user: ChangePassword) {
    const { data } = await UserManagementService.changePassword(user);
    Notify.create({
      color: "#31ccec",
      message: "Password updated successfully!",
    });
    return data;
  }

  async function updateProfilePicture(userId: string, picture: File) {
    const { data } = await UserManagementService.updateProfilePicture(
      userId,
      picture
    );
    Notify.create({
      color: "#31ccec",
      message: "Profile picture updated successfully!",
    });
    return data;
  }

  async function getUsersList(payload?: any) {
    const data = await UserManagementService.getUsersList(payload);
    if (data) {
      state.users = data.users;
      state.usersCount = data.total_count;
    }
  }

  async function getUsersByRole(payload?: any) {
    const data = await UserManagementService.getUsersList(payload);
    if (data) {
      state.users = data.users;
      state.usersCount = data.total_count;
    }
  }

  async function getUserRoles() {
    const { data } = await UserManagementService.getRolesList();
    if (data) {
      state.rolesList = data.roles;
    }
  }

  async function getListDesignations() {
    const { data } = await UserManagementService.getListDesignations();
    if (data) {
      state.designationsList = data.designations;
    }
  }

  function setSelectedUser(payload: User) {
    state.selectedUser = payload;
    state.selectedUserPermissions = {
      ...payload.permissions,
      user_id: payload.id,
    };
  }

  async function onDeleteUser(id: string) {
    const { data } = await UserManagementService.deleteUser(id);
    state.users = state.users.filter((u) => u.id !== id);
  }

  async function setUserPermissions(permissions: UserPermissions) {
    await UserManagementService.setPermissions(permissions);
    Notify.create({
      color: "#31ccec",
      message: "User permissions updated successfully!",
    });
  }

  // Note you are free to define as many internal functions as you want.
  // You only expose the functions that are returned.
  return {
    addNewUser,
    updateUser,
    getUserRoles,
    getUsersList,
    onDeleteUser,
    getUsersByRole,
    changePassword,
    setSelectedUser,
    setUserPermissions,
    getListDesignations,
    updateProfilePicture,
    setUserSettingsDialogState,
  };
});
