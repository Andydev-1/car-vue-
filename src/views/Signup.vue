<template>
  <div
    class="min-h-screen bg-gray-950 grid place-items-center text-white px-6 py-24"
  >
    <div
      class="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl p-6 animate-scale-in animate-delay-200"
    >
      <h1 class="text-2xl font-bold mb-6 animate-slide-in-top">
        Create account
      </h1>
      <form @submit.prevent="onSubmit" class="space-y-4">
        <div>
          <label class="block text-sm text-gray-400 mb-1">Name</label>
          <input
            v-model="name"
            class="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700"
            required
          />
        </div>
        <div>
          <label class="block text-sm text-gray-400 mb-1">Email</label>
          <input
            v-model="email"
            type="email"
            class="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700"
            required
          />
        </div>
        <div>
          <label class="block text-sm text-gray-400 mb-1">Password</label>
          <input
            v-model="password"
            type="password"
            class="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700"
            required
          />
        </div>
        <button class="btn-primary w-full hover-lift hover-glow">
          Sign up
        </button>
        <p class="text-sm text-gray-400">
          Already have an account?
          <RouterLink class="text-orange-400 hover:text-orange-300" to="/login"
            >Log in</RouterLink
          >
        </p>
      </form>
      <Toast v-if="toast" :text="toast" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from "@/composables/useAuth";
import Toast from "@/components/Toast.vue";

const { signup } = useAuth();
const router = useRouter();

const name = ref("");
const email = ref("");
const password = ref("");
const toast = ref("");

async function onSubmit() {
  try {
    await signup(name.value, email.value, password.value);
    router.push("/");
  } catch (e) {
    toast.value = e?.message || "Signup failed";
    setTimeout(() => (toast.value = ""), 2200);
  }
}
</script>
