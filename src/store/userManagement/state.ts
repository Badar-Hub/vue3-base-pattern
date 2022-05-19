import { User, UserPermissions } from "./../../types/user";
import { defineStore } from "pinia";

export interface State {
  isUserSettingsOpen: boolean;
  rolesList: string[];
  designationsList: string[];
  users: User[];
  usersCount: number;
  selectedUser: User | null;
  selectedUserPermissions: UserPermissions;
  error: any;
}

export const useState = defineStore({
  id: "UM.state",
  state: (): State => {
    return {
      isUserSettingsOpen: false,
      rolesList: [],
      designationsList: [],
      users: [],
      selectedUser: null,
      usersCount: 0,
      selectedUserPermissions: {
        user_id: "",
        enable_auto_save: false,
        auto_save_duration: "",
        show_object_details: false,
        automatic_bordering: false,
        intelligent_polygon_cropping: false,
        add_new_classes_to_project: false,
        create_new_task_for_annotators: false,
        aam_zoom_margin: 100,
      },
      error: null,
    };
  },
});
