<template>
  <div class="bg-gray-950 min-h-screen text-white">
    <div
      class="max-w-6xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-10"
    >
      <div class="lg:col-span-2 -mt-10 animate-fade-in-up">
        <Breadcrumbs
          second="Inventory"
          :second-url="{ name: 'Shop' }"
          :third="product.name"
        />
      </div>
      <div class="animate-fade-in-left animate-delay-200">
        <img
          :src="product.images[0]"
          :alt="product.name"
          class="w-full h-96 object-cover rounded-2xl hover-lift transition-all duration-500"
        />
      </div>
      <div class="animate-fade-in-right animate-delay-300">
        <h1 class="text-3xl md:text-4xl font-bold mb-2 animate-slide-in-top">
          {{ product.name }}
        </h1>
        <div
          class="text-orange-500 text-2xl font-bold mb-4 animate-fade-in-up animate-delay-400"
        >
          ${{ product.price.toLocaleString() }}
        </div>
        <p class="text-gray-300 mb-6 animate-fade-in-up animate-delay-500">
          {{ product.description }}
        </p>

        <div
          class="grid grid-cols-2 gap-4 text-sm text-gray-300 mb-6 animate-fade-in-up animate-delay-600"
        >
          <div class="hover-lift">
            Brand: <span class="text-white">{{ product.brand }}</span>
          </div>
          <div class="hover-lift">
            Year: <span class="text-white">{{ product.year }}</span>
          </div>
          <div class="hover-lift">
            Type: <span class="text-white">{{ product.type }}</span>
          </div>
          <div class="hover-lift">
            Mileage:
            <span class="text-white"
              >{{ product.mileage.toLocaleString() }} km</span
            >
          </div>
          <div class="hover-lift">
            Transmission:
            <span class="text-white">{{ product.transmission }}</span>
          </div>
          <div class="hover-lift">
            Fuel: <span class="text-white">{{ product.fuel }}</span>
          </div>
        </div>

        <div class="mb-6 animate-fade-in-up animate-delay-700">
          <h3 class="font-semibold mb-2">Features</h3>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-300">
            <li
              v-for="(f, index) in product.features"
              :key="f"
              :class="`flex items-center gap-2 hover-lift animate-fade-in-up animate-delay-${
                800 + index * 50
              }`"
            >
              <span class="text-orange-500">•</span> {{ f }}
            </li>
          </ul>
        </div>

        <div
          class="flex items-center gap-4 animate-fade-in-up animate-delay-900"
        >
          <button
            @click="onAddToCart()"
            class="btn-primary hover-lift hover-glow"
          >
            Add to Cart
          </button>
          <RouterLink to="/checkout" class="btn-outline hover-lift"
            >Buy Now</RouterLink
          >
          <button
            @click="toggleWishlist(product.id)"
            :class="[
              'btn-outline hover-lift',
              isWished(product.id) ? 'border-orange-500 text-orange-400' : '',
            ]"
          >
            ♥ Wishlist
          </button>
        </div>
        <Toast v-if="toast" :text="toast" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { findProductById } from "@/data/products";
import { useCart } from "@/composables/useCart";
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import { useWishlist } from "@/composables/useWishlist";
import Toast from "@/components/Toast.vue";

const route = useRoute();
const { addToCart } = useCart();
const { isWished, toggle: toggleWishlist } = useWishlist();
const toast = ref("");

const product = computed(() => findProductById(route.params.id));

function onAddToCart() {
  addToCart(product.value, 1);
  toast.value = "Added to cart";
  setTimeout(() => (toast.value = ""), 2000);
}
</script>
