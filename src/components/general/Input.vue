<template>
  <p v-if="heading" :class="headingColor">
    {{ heading }}
  </p>
  <q-input outlined v-bind="$attrs" class="q-mb-lg">
    <template #prepend>
      <slot name="prepend"></slot>
    </template>
    <template #append>
      <slot name="append"></slot>
    </template>
  </q-input>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    heading: {
      type: String,
    },
    headingColor: {
      type: String,
    },
  },
});
</script>
