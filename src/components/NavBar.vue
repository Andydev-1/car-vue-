<template>
  <header
    class="fixed top-0 left-0 w-full z-40 bg-black/60 backdrop-blur border-b border-white/10"
  >
    <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <RouterLink
        to="/"
        class="flex items-center gap-3 text-white animate-fade-in-left"
      >
        <img
          :src="logo"
          alt="logo"
          class="w-28 hover-lift transition-all duration-300"
        />
      </RouterLink>
      <nav
        class="hidden md:flex items-center gap-6 text-sm animate-fade-in-up animate-delay-200"
      >
        <RouterLink
          to="/"
          class="relative text-white hover:text-orange-400 transition-all duration-300 font-medium group"
          :class="{ 'text-orange-400': $route.path === '/' }"
        >
          Home
          <span
            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"
            :class="{ 'w-full': $route.path === '/' }"
          ></span>
        </RouterLink>
        <RouterLink
          to="/shop"
          class="relative text-white hover:text-orange-400 transition-all duration-300 font-medium group"
          :class="{ 'text-orange-400': $route.path === '/shop' }"
        >
          Inventory
          <span
            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"
            :class="{ 'w-full': $route.path === '/shop' }"
          ></span>
        </RouterLink>
        <RouterLink
          to="/about"
          class="relative text-white hover:text-orange-400 transition-all duration-300 font-medium group"
          :class="{ 'text-orange-400': $route.path === '/about' }"
        >
          About
          <span
            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"
            :class="{ 'w-full': $route.path === '/about' }"
          ></span>
        </RouterLink>
        <RouterLink
          to="/contact"
          class="relative text-white hover:text-orange-400 transition-all duration-300 font-medium group"
          :class="{ 'text-orange-400': $route.path === '/contact' }"
        >
          Contact
          <span
            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"
            :class="{ 'w-full': $route.path === '/contact' }"
          ></span>
        </RouterLink>
        <RouterLink
          to="/terms"
          class="relative text-white hover:text-orange-400 transition-all duration-300 font-medium group"
          :class="{ 'text-orange-400': $route.path === '/terms' }"
        >
          Terms
          <span
            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"
            :class="{ 'w-full': $route.path === '/terms' }"
          ></span>
        </RouterLink>
      </nav>

      <!-- Right side: Login/Logout and Cart -->
      <div
        class="flex items-center gap-4 pr-10 animate-fade-in-right animate-delay-300"
      >
        <RouterLink
          v-if="!currentUser"
          to="/login"
          class="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all duration-300 font-medium hover:shadow-lg hover:shadow-orange-500/25 transform hover:-translate-y-0.5"
          ><p class="px-3 py-1">Login</p></RouterLink
        >
        <button
          v-else
          @click="logout()"
          class="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 font-medium hover:shadow-lg hover:shadow-gray-600/25 transform hover:-translate-y-0.5"
        >
          Logout
        </button>
        <RouterLink
          to="/cart"
          class="relative text-white hover:text-orange-400 transition-all duration-300 group"
          aria-label="Cart"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path
              d="M1 1h4l2.68 12.39a2 2 0 0 0 2 1.61h7.72a2 2 0 0 0 2-1.61L23 6H6"
            />
          </svg>
          <span
            v-if="itemCount"
            class="absolute -top-2 -right-2 text-xs bg-orange-500 text-white w-5 h-5 rounded-full grid place-items-center animate-bounce-in"
            >{{ itemCount }}</span
          >
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import logo from "@/assets/img/logo1.png";
import { useCart } from "@/composables/useCart";
import { useAuth } from "@/composables/useAuth";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const { itemCount: count } = useCart();
const itemCount = computed(() => count.value);
const { currentUser, logout } = useAuth();
</script>
