<template>
  <q-card-section>
    <div class="text-center">
      <h5 class="q-mt-none text-bold">Login</h5>
      <p class="text-body1">Welcome back! Please login to your account.</p>
    </div>
    <q-form class="q-pt-lg" @submit="onSubmit">
      <div class="q-gutter-lg">
        <q-input
          v-model="user.email"
          outlined
          type="text"
          label="Username"
          lazy-rules
        />
        <q-input
          v-model="user.password"
          outlined
          type="password"
          label="Password"
          lazy-rules
        />
        <q-btn
          :loading="loading"
          color="primary"
          text-color="white"
          label="Login"
          push
          no-caps
          type="submit"
        />
        <div class="float-right">
          Don't have an account?
          <q-btn
            flat
            color="primary"
            class="q-pa-xs"
            label="Register"
            @click="router.push({ name: 'Register' })"
          />
        </div>
      </div>
    </q-form>
  </q-card-section>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/store/auth";
import AuthService from "../helper/AuthService";
import IReqAuthModelDto from "../helper/IReqAuthModelDto";

const router = useRouter();
const authStore = useAuthStore();

const refreshToken = computed((): string => {
  return authStore.refreshToken;
});
console.log("RefreshToken", refreshToken);

const user = ref<IReqAuthModelDto>({
  email: "",
  password: "",
});
const loading = ref(false);
const onSubmit = async () => {
  let response = await AuthService.login(user.value);
  console.log(response);
  authStore.setToken(response);
  router.push({ name: "Dashboard" });
};
</script>
<style></style>
