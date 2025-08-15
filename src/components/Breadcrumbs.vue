<template>
  <nav class="text-sm text-gray-400 animate-fade-in-up" aria-label="Breadcrumb">
    <ol class="flex items-center gap-2">
      <li class="animate-fade-in-left animate-delay-100">
        <RouterLink
          to="/"
          class="hover:text-white hover-lift transition-all duration-300"
          >Home</RouterLink
        >
      </li>
      <li class="animate-fade-in-up animate-delay-150">•</li>
      <li v-if="second" class="animate-fade-in-left animate-delay-200">
        <RouterLink
          v-if="secondUrl"
          :to="secondUrl"
          class="hover:text-white hover-lift transition-all duration-300"
          >{{ second }}</RouterLink
        >
        <span v-else>{{ second }}</span>
      </li>
      <li v-if="third" class="animate-fade-in-up animate-delay-250">•</li>
      <li v-if="third" class="animate-fade-in-left animate-delay-300">
        <span class="text-white">{{ third }}</span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
defineProps({
  second: { type: String, default: "" },
  secondUrl: { type: [String, Object], default: "" },
  third: { type: String, default: "" },
});
</script>
