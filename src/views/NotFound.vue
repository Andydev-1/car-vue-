<template>
  <div class="min-h-screen grid place-items-center bg-gray-950 text-white">
    <div class="text-center px-6">
      <div class="text-8xl font-black text-orange-500">404</div>
      <h1 class="text-2xl font-semibold mt-2">Page not found</h1>
      <p class="text-gray-400 mt-2">
        The page you are looking for does not exist.
      </p>
      <RouterLink
        to="/"
        class="mt-6 inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg"
        >Go Home</RouterLink
      >
    </div>
  </div>
</template>
