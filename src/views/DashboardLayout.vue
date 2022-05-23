<template>
  <q-layout view="lHh lpR lFf">
    <Sidebar v-if="$q.screen.gt.sm" v-model="showSideBar" />
    <MobileSidebar v-else />
    <q-page-container class="q-mx-sm">
      <router-view />
    </q-page-container>
    <Footer />
  </q-layout>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Footer from "../components/layout/Footer.vue";
import Sidebar from "../components/layout/Sidebar.vue";
import MobileSidebar from "../components/layout/MobileSidebar.vue";

const showSideBar = ref(false);
</script>
