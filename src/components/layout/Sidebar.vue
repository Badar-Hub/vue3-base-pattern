<template>
  <q-drawer
    show-if-above
    v-bind="$attrs"
    elevated
    :width="230"
    class="bg-primary text-white sidebar"
  >
    <q-list>
      <q-item class="q-pa-none" clickable to="/">
        <q-item-section>
          <img
            style="max-width: 100%; height: 80px"
            src="data:image/png;base64,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"
          />
        </q-item-section>
      </q-item>
      <q-item clickable to="/">
        <q-item-section avatar>
          <q-icon size="sm" color="white" name="home" />
        </q-item-section>
        <q-item-section class="text-white">Home</q-item-section>
      </q-item>
      <q-item clickable @click="logOut" class="absolute-bottom">
        <q-item-section avatar>
          <q-icon size="sm" name="logout" />
        </q-item-section>
        <q-item-section>Logout</q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useAuthStore } from "@/store/auth";
const router = useRouter();
const authStore = useAuthStore();

const logOut = () => {
  authStore.setToken({
    access_token: "",
    refresh_token: "",
  });
  router.push({ name: "Login" });
};
</script>

<style lang="scss">
.sidebar {
  .user-icon {
    max-width: 50px;
    width: 100%;
  }
  .menu-icons {
    opacity: 0.6;
  }
  .q-router-link--active {
    svg {
      opacity: 1 !important;
    }
  }
}
</style>
