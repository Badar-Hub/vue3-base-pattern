<template>
  <q-page-container>
    <q-page class="bg-primary">
      <div class="row justify-center">
        <div class="col-4">
          <div class="text-center q-mt-xl">
            <q-avatar size="100px">
              <img src="@/assets/logo.svg" />
            </q-avatar>
          </div>
        </div>
      </div>
      <div class="row justify-center">
        <div class="col-5">
          <q-card class="q-pa-xl q-ma-xl" style="border-radius: 45px">
            <router-view />
          </q-card>
        </div>
      </div>
    </q-page>
  </q-page-container>
</template>
