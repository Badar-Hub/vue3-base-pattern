<template>
  <q-layout view="hHh LpR lFf">
    <div>
      <router-view />
    </div>
  </q-layout>
</template>

<script lang="ts" setup></script>

<style lang="scss">
@font-face {
  font-family: "Poppins-rg";
  src: url("./assets/fonts/Poppins-Regular.ttf");
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
span {
  font-family: "Poppins-rg" !important;
}
</style>
