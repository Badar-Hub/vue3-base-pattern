<template>
  <q-card-section>
    <div class="text-center">
      <h5 class="q-mt-none text-bold">Register</h5>
      <p class="text-body1">Welcome back! Please register as a new user.</p>
    </div>
    <q-form v-if="step === 1" class="q-pt-lg" @submit="onSubmit">
      <div>
        <Input
          v-model="user.name"
          type="text"
          label="Username"
          lazy-rules
          :rule="[(val:string) => val || 'This field is required']"
        />
        <Input
          v-model="user.email"
          type="text"
          label="Email"
          lazy-rules
          :rule="[(val:string) => val || 'This field is required']"
        />
        <Input
          v-model="user.password"
          type="password"
          label="Password"
          lazy-rules
          :rule="[(val:string) => val || 'This field is required']"
        />
        <Input
          v-model="confirmPassword"
          type="password"
          label="Confirm Password"
          lazy-rules
          :rule="[(val:string) => val !== user.password || 'Password does not match']"
        />
        <q-btn
          :loading="loading"
          color="primary"
          text-color="white"
          label="Submit"
          push
          no-caps
          type="submit"
        />
        <div class="float-right">
          Already have an account?
          <q-btn
            flat
            color="primary"
            class="q-pa-xs"
            @click="router.push({ name: 'Login' })"
            label="Login"
          />
        </div>
      </div>
    </q-form>
    <q-form v-else class="q-pt-lg" @submit="onVerifyOTP">
      <div>
        <Input
          v-model="user.email"
          type="text"
          label="Email"
          lazy-rules
          :readonly="!!user.name"
          :rule="[(val:string) => val || 'This field is required']"
        />
        <Input
          v-model="otp"
          type="number"
          label="Verify OTP"
          lazy-rules
          :rule="[(val:string) => val || 'This field is required']"
        />
        <div class="float-right">
          <q-btn
            flat
            color="primary"
            class="q-pa-xs"
            @click="onResendOTP"
            label="Resend OTP?"
          />
        </div>
        <q-btn
          type="submit"
          label="Submit"
          color="primary"
          :loading="loading"
        />
      </div>
    </q-form>
  </q-card-section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import AuthService from "../helper/AuthService";
import IReqUserRegModelDto from "../helper/IReqUserRegModelDto";

const router = useRouter();

const user = ref<IReqUserRegModelDto>({
  name: "",
  email: "",
  password: "",
  verified: true,
});

const step = ref(1);
const otp = ref(0);
const loading = ref(false);
const confirmPassword = ref("");

const onSubmit = async () => {
  let response = await AuthService.register(user.value);
  console.log(response);
  step.value = 2;
};

const onVerifyOTP = async () => {
  let body = {
    email: user.value.email,
    otp: otp.value,
  };
  let response = await AuthService.verifyOTP(body);
  console.log(response);
  router.push({ name: "Login" });
};

const onResendOTP = async () => {
  let response = await AuthService.resendOTP(user.value.email);
  console.log(response);
};
</script>
<style></style>
