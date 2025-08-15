<template>
  <footer
    id="footer"
    class="bg-black/80 border-t border-white/10 text-gray-300"
  >
    <div
      class="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-start"
    >
      <!-- Brand -->
      <div class="animate-fade-in-up animate-delay-200">
        <div class="flex items-center gap-3 mb-3">
          <img
            :src="logo"
            alt="Legacy Cars logo"
            class="w-28 hover-lift transition-all duration-300"
          />
        </div>
        <p class="text-sm leading-relaxed">
          Premium vehicles, transparent deals,<br />and a delightful buying
          experience.
        </p>
        <div class="flex items-center gap-3 mt-4">
          <a href="#" aria-label="Twitter" class="hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M22.46 6c-.77.35-1.6.58-2.46.69c.89-.53 1.57-1.37 1.89-2.37c-.83.5-1.76.86-2.75 1.06A4.17 4.17 0 0 0 16.11 4c-2.32 0-4.2 1.88-4.2 4.2c0 .33.04.65.11.95C8 9 5.14 7.38 3.15 5.01c-.36.63-.57 1.37-.57 2.15c0 1.48.75 2.78 1.88 3.54c-.7-.02-1.35-.22-1.93-.53v.05c0 2.07 1.47 3.8 3.41 4.19c-.36.1-.74.15-1.13.15c-.27 0-.54-.03-.79-.07c.54 1.7 2.11 2.94 3.97 2.97A8.38 8.38 0 0 1 2 19.54A11.84 11.84 0 0 0 8.29 21c7.55 0 11.68-6.26 11.68-11.68l-.01-.53A8.34 8.34 0 0 0 22.46 6z"
              />
            </svg>
          </a>
          <a href="#" aria-label="Instagram" class="hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm10 2a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"
              />
            </svg>
          </a>
          <a href="#" aria-label="Facebook" class="hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M22 12a10 10 0 1 0-11.5 9.95v-7.04H7.9V12h2.6V9.8c0-2.57 1.53-3.99 3.87-3.99c1.12 0 2.3.2 2.3.2v2.53h-1.3c-1.28 0-1.67.8-1.67 1.62V12h2.83l-.45 2.91h-2.38v7.04A10 10 0 0 0 22 12"
              />
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn" class="hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M19 3A2.94 2.94 0 0 1 22 6v12a2.94 2.94 0 0 1-3 3H5a2.94 2.94 0 0 1-3-3V6a2.94 2.94 0 0 1 3-3Zm-9 7H7v8h3Zm0-4H7v3h3Zm10 8.4V18h-3v-3.6c0-1.91-2-1.77-2 0V18h-3v-8h3v1.18C12.83 9.09 16 8.93 16 11.76Z"
              />
            </svg>
          </a>
        </div>
      </div>

      <!-- Company -->
      <div class="animate-fade-in-up animate-delay-300">
        <div class="text-white font-semibold mb-3">Company</div>
        <ul class="space-y-2 text-sm">
          <li><RouterLink to="/" class="hover:text-white">Home</RouterLink></li>
          <li>
            <RouterLink to="/shop" class="hover:text-white"
              >Inventory</RouterLink
            >
          </li>

          <li>
            <RouterLink to="/terms" class="hover:text-white">Terms</RouterLink>
          </li>
        </ul>
      </div>

      <!-- Support -->
      <div class="animate-fade-in-up animate-delay-400">
        <div class="text-white font-semibold mb-3">Support</div>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:text-white">FAQs</a></li>
          <li><a href="#" class="hover:text-white">Financing</a></li>
          <li><a href="#" class="hover:text-white">Warranty</a></li>
          <li><a href="#" class="hover:text-white">Contact</a></li>
        </ul>
      </div>

      <!-- Newsletter -->
      <div>
        <div class="text-white font-semibold mb-3">Newsletter</div>
        <form
          class="flex flex-col sm:flex-row gap-2"
          @submit.prevent="subscribe"
        >
          <input
            v-model="email"
            type="email"
            aria-label="Email address"
            placeholder="Enter your email"
            class="flex-1 px-3 py-2 rounded bg-gray-800 border border-gray-700"
          />
          <button class="btn-primary">Send</button>
        </form>
        <p class="text-xs text-gray-500 mt-2">
          We care about your privacy. No spam, ever.
        </p>
        <Toast v-if="toast" :text="toast" />
      </div>
    </div>

    <div class="border-t border-white/10 py-4">
      <div
        class="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
      >
        <div class="space-x-3 text-gray-400">
          <a href="#" class="hover:text-white">Privacy Policy</a>
          <span>•</span>
          <a href="#" class="hover:text-white">Terms</a>
          <span>•</span>
          <a href="#" class="hover:text-white">Cookies</a>
        </div>
        <div class="text-gray-500">
          © {{ new Date().getFullYear() }} Legacy Cars. All rights reserved.
        </div>
        <a href="#" class="hover:text-white">Back to top ↑</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import Toast from "@/components/Toast.vue";
import logo from "@/assets/img/logo1.png";

const email = ref("");
const toast = ref("");

async function subscribe() {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    toast.value = "Enter a valid email.";
    setTimeout(() => (toast.value = ""), 2200);
    return;
  }
  await new Promise((r) => setTimeout(r, 500));
  toast.value = "Subscribed successfully!";
  email.value = "";
  setTimeout(() => (toast.value = ""), 2200);
}
</script>
