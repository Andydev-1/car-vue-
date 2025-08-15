<template>
  <transition name="slide-up">
    <div
      v-if="message"
      class="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg border border-gray-700 z-50"
    >
      {{ message }}
    </div>
  </transition>
</template>

<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({
  text: { type: String, default: "" },
  durationMs: { type: Number, default: 2200 },
});

const message = ref("");

onMounted(() => {
  if (props.text) {
    message.value = props.text;
    setTimeout(() => (message.value = ""), props.durationMs);
  }
});
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translate(-50%, 10px);
}
</style>
