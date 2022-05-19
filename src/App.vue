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

body {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span {
    font-family: "Poppins-rg";
  }
  font-family: "Poppins-rg" !important;
}
.screen-center {
  max-width: 1200px;
  margin: auto;
}
.brdr {
  border: 1px solid #e6e7e9 !important;
  &-br {
    border: 1px solid #e6e7e9 !important;
    border-radius: 8px !important;
  }
  &-dashed {
    border: 1px dashed #9e9e9e !important;
    border-radius: 1% !important;
  }
}
</style>
