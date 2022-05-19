<template>
  <q-toggle v-model="inputValue" v-bind="$attrs" :color="color" />
</template>

<script lang="ts" setup>
import { computed } from "vue";
const props = defineProps<{
  color: string;
  modelValue: number | boolean;
}>();
const emit = defineEmits<{
  (e: "update:modelValue", val: boolean | number): void;
}>();

const inputValue = computed({
  get() {
    if (props.modelValue) {
      return true;
    } else {
      return false;
    }
  },
  set(val: boolean) {
    emit("update:modelValue", val);
  },
});
</script>
