<template>
  <div class="bg-gray-950 min-h-screen text-white">
    <div
      class="max-w-6xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-3 gap-10"
    >
      <form
        class="lg:col-span-2 bg-gray-900 rounded-2xl p-6 space-y-6 animate-fade-in-left animate-delay-200"
        @submit.prevent="submitOrder"
      >
        <h1 class="text-2xl font-bold animate-slide-in-top">Checkout</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm text-gray-400 mb-1">First name</label>
            <input
              v-model="firstName"
              required
              class="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700"
            />
          </div>
          <div>
            <label class="block text-sm text-gray-400 mb-1">Last name</label>
            <input
              v-model="lastName"
              required
              class="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700"
            />
          </div>
          <div class="md:col-span-2">
            <label class="block text-sm text-gray-400 mb-1">Email</label>
            <input
              type="email"
              v-model="email"
              required
              class="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700"
            />
          </div>
          <div class="md:col-span-2">
            <label class="block text-sm text-gray-400 mb-1">Address</label>
            <input
              v-model="address"
              required
              class="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700"
            />
          </div>
          <div>
            <label class="block text-sm text-gray-400 mb-1">City</label>
            <input
              v-model="city"
              required
              class="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700"
            />
          </div>
          <div>
            <label class="block text-sm text-gray-400 mb-1">Postal Code</label>
            <input
              v-model="postal"
              required
              class="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700"
            />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="md:col-span-2">
            <label class="block text-sm text-gray-400 mb-1">Card Number</label>
            <input
              v-model="cardNumber"
              inputmode="numeric"
              maxlength="19"
              placeholder="1234 5678 9012 3456"
              class="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700"
            />
          </div>
          <div>
            <label class="block text-sm text-gray-400 mb-1">Expiry</label>
            <input
              v-model="cardExpiry"
              placeholder="MM/YY"
              class="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700"
            />
          </div>
          <div>
            <label class="block text-sm text-gray-400 mb-1">CVC</label>
            <input
              v-model="cardCvc"
              maxlength="4"
              class="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700"
            />
          </div>
        </div>

        <button
          class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover-lift hover-glow transition-all duration-300"
        >
          Place Order
        </button>
        <p v-if="message" class="text-green-400">{{ message }}</p>
      </form>

      <aside
        class="bg-gray-900 rounded-2xl p-6 h-fit animate-fade-in-right animate-delay-400"
      >
        <h2 class="text-xl font-semibold mb-4">Order Summary</h2>
        <div class="space-y-2 text-sm">
          <div class="flex justify-between">
            <span class="text-gray-400">Items ({{ itemCount }})</span>
            <span>${{ subtotal.toLocaleString() }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-400">Shipping</span>
            <span>${{ shipping.toLocaleString() }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-400">Tax</span>
            <span>${{ tax.toLocaleString() }}</span>
          </div>
          <div
            class="border-t border-gray-700 pt-2 flex justify-between font-bold"
          >
            <span>Total</span> <span>${{ total.toLocaleString() }}</span>
          </div>
        </div>
        <ul class="mt-4 divide-y divide-gray-800">
          <li
            v-for="item in cartItems"
            :key="item.id"
            class="flex items-center gap-3 py-3"
          >
            <img :src="item.image" class="w-14 h-12 object-cover rounded" />
            <div class="flex-1">
              <div class="text-sm">{{ item.name }}</div>
              <div class="text-xs text-gray-400">Qty: {{ item.quantity }}</div>
            </div>
            <div class="text-sm">
              ${{ (item.price * item.quantity).toLocaleString() }}
            </div>
          </li>
        </ul>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCart } from "@/composables/useCart";

const { cartItems, itemCount, subtotal, shipping, tax, total, clearCart } =
  useCart();

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const address = ref("");
const city = ref("");
const postal = ref("");
const cardNumber = ref("");
const cardExpiry = ref("");
const cardCvc = ref("");
const message = ref("");

function submitOrder() {
  if (!cartItems.value.length) {
    message.value = "Your cart is empty.";
    return;
  }
  // Demo flow: pretend payment succeeded
  clearCart();
  message.value = "Thank you! Your order has been placed.";
}
</script>
