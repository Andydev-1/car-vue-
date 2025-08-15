<template>
  <div class="bg-gray-950 min-h-screen text-white">
    <div class="max-w-6xl mx-auto px-6 py-28">
      <h1 class="text-3xl font-bold mb-6 animate-slide-in-top">Your Cart</h1>
      <div
        v-if="!cartItems.length"
        class="bg-gray-900 rounded-xl p-8 text-center animate-fade-in-up animate-delay-200"
      >
        <p class="text-gray-300 mb-4">Your cart is empty.</p>
        <RouterLink
          to="/shop"
          class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg"
          ><p class="animate-bounce-in animate-delay-1000 py-2 px-3">
            Browse Cars
          </p></RouterLink
        >
      </div>

      <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div
          class="lg:col-span-2 space-y-4 animate-fade-in-left animate-delay-300"
        >
          <div
            v-for="(item, index) in cartItems"
            :key="item.id"
            :class="`flex items-center gap-4 bg-gray-900 rounded-xl p-4 hover-lift animate-fade-in-up animate-delay-${
              400 + index * 100
            }`"
          >
            <img
              :src="item.image"
              :alt="item.name"
              class="w-28 h-20 object-cover rounded-lg"
            />
            <div class="flex-1">
              <div class="font-semibold">{{ item.name }}</div>
              <div class="text-orange-500 font-bold">
                ${{ item.price.toLocaleString() }}
              </div>
            </div>
            <div class="flex items-center gap-2">
              <button
                @click="decrement(item.id)"
                class="w-8 h-8 rounded bg-gray-800"
              >
                -
              </button>
              <input
                type="number"
                min="1"
                class="w-14 text-center bg-gray-800 rounded"
                :value="item.quantity"
                @input="onQtyInput(item.id, $event)"
              />
              <button
                @click="increment(item.id)"
                class="w-8 h-8 rounded bg-gray-800"
              >
                +
              </button>
            </div>
            <button
              @click="removeFromCart(item.id)"
              class="text-red-400 hover:text-red-300"
            >
              Remove
            </button>
          </div>
        </div>

        <aside
          class="bg-gray-900 rounded-xl p-6 h-fit animate-fade-in-right animate-delay-500"
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
          <RouterLink
            to="/checkout"
            class="mt-4 block text-center w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg"
            >Proceed to Checkout</RouterLink
          >
          <button
            @click="clearCart"
            class="mt-2 w-full text-sm text-gray-400 hover:text-white"
          >
            Clear cart
          </button>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCart } from "@/composables/useCart";

const {
  cartItems,
  itemCount,
  subtotal,
  shipping,
  tax,
  total,
  increment,
  decrement,
  setQuantity,
  removeFromCart,
  clearCart,
} = useCart();

function onQtyInput(id, e) {
  const val = parseInt(e.target.value || "0", 10);
  if (Number.isFinite(val)) setQuantity(id, val);
}
</script>
