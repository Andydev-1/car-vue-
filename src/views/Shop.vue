<template>
  <div class="bg-gray-950 min-h-screen text-white">
    <div class="max-w-7xl mx-auto px-6 py-28">
      <div
        class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8"
      >
        <Breadcrumbs second="Inventory" />
        <div class="animate-fade-in-left">
          <h1 class="text-3xl md:text-4xl font-bold animate-slide-in-top">
            Browse Inventory
          </h1>
          <p class="text-gray-300 animate-fade-in-up animate-delay-200">
            Find your perfect car by type, brand, year, and budget.
          </p>
        </div>
        <div class="flex items-center gap-3 animate-fade-in-right">
          <input
            v-model="query"
            type="text"
            placeholder="Search cars..."
            class="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <select
            v-model="sortBy"
            class="px-3 py-2 rounded-lg bg-gray-800 border border-gray-700"
          >
            <option value="relevance">Sort: Relevance</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="year-desc">Newest Year</option>
            <option value="year-asc">Oldest Year</option>
          </select>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <aside
          class="md:col-span-1 bg-gray-900 rounded-xl p-5 h-fit sticky top-24 animate-fade-in-left animate-delay-300"
        >
          <h3 class="font-semibold mb-4">Filters</h3>
          <div class="space-y-4">
            <div>
              <label class="block text-sm text-gray-400 mb-1">Type</label>
              <div class="flex flex-wrap gap-2">
                <button
                  v-for="t in types"
                  :key="t"
                  @click="toggleFilter('type', t)"
                  :class="[
                    'px-3 py-1 rounded-full border',
                    hasFilter('type', t)
                      ? 'bg-orange-500 border-orange-500'
                      : 'bg-gray-800 border-gray-700',
                  ]"
                >
                  {{ t }}
                </button>
              </div>
            </div>
            <div>
              <label class="block text-sm text-gray-400 mb-1">Brand</label>
              <div class="flex flex-wrap gap-2">
                <button
                  v-for="b in brands"
                  :key="b"
                  @click="toggleFilter('brand', b)"
                  :class="[
                    'px-3 py-1 rounded-full border',
                    hasFilter('brand', b)
                      ? 'bg-orange-500 border-orange-500'
                      : 'bg-gray-800 border-gray-700',
                  ]"
                >
                  {{ b }}
                </button>
              </div>
            </div>
            <div>
              <label class="block text-sm text-gray-400 mb-1">Max Price</label>
              <input
                type="range"
                min="10000"
                max="120000"
                step="1000"
                v-model.number="maxPrice"
                class="w-full"
              />
              <div class="text-sm text-gray-400">
                Up to ${{ maxPrice.toLocaleString() }}
              </div>
            </div>
          </div>
        </aside>

        <main class="md:col-span-3 animate-fade-in-right animate-delay-400">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article
              v-for="(p, index) in results"
              :key="p.id"
              :class="`bg-gray-900 rounded-xl overflow-hidden group hover-lift animate-fade-in-up animate-delay-${
                500 + index * 100
              }`"
            >
              <img
                :src="p.images[0]"
                :alt="p.name"
                class="w-full h-48 object-cover group-hover:scale-105 transition"
              />
              <div class="p-5">
                <h3 class="font-semibold mb-1">{{ p.name }}</h3>
                <div class="text-orange-500 font-bold mb-2">
                  ${{ p.price.toLocaleString() }}
                </div>
                <div class="text-sm text-gray-400 mb-4">
                  {{ p.year }} • {{ p.type }} •
                  {{ p.mileage.toLocaleString() }} km
                </div>
                <div class="flex gap-2">
                  <RouterLink
                    :to="{ name: 'Product', params: { id: p.id } }"
                    class="flex-1 text-center btn-primary"
                    >View</RouterLink
                  >
                  <button @click="quickAdd(p)" class="btn-outline">Add</button>
                </div>
              </div>
            </article>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import { products } from "@/data/products";
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import { useCart } from "@/composables/useCart";
import Toast from "@/components/Toast.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const query = ref("");
const sortBy = ref("relevance");
const maxPrice = ref(120000);
const activeFilters = ref({ type: new Set(), brand: new Set() });

// Handle URL parameters for search and brand filtering
onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);

  // Handle search parameter
  const searchParam = urlParams.get("search");
  if (searchParam) {
    query.value = searchParam;
  }

  // Handle brand parameter
  const brandParam = urlParams.get("brand");
  if (brandParam) {
    activeFilters.value.brand.add(brandParam);
    // Force reactivity
    activeFilters.value = {
      ...activeFilters.value,
      brand: new Set(activeFilters.value.brand),
    };
  }
});

const types = Array.from(new Set(products.map((p) => p.type)));
const brands = Array.from(new Set(products.map((p) => p.brand)));
const toast = ref("");
const { addToCart } = useCart();

function toggleFilter(key, value) {
  const set = activeFilters.value[key];
  if (set.has(value)) set.delete(value);
  else set.add(value);
  // force reactivity
  activeFilters.value = { ...activeFilters.value, [key]: new Set(set) };
}

function hasFilter(key, value) {
  return activeFilters.value[key].has(value);
}

const results = computed(() => {
  let list = products.filter((p) => p.price <= maxPrice.value);

  if (query.value.trim()) {
    const q = query.value.toLowerCase();
    list = list.filter((p) =>
      [p.name, p.brand, p.type, String(p.year)].some((v) =>
        String(v).toLowerCase().includes(q)
      )
    );
  }

  if (activeFilters.value.type.size) {
    list = list.filter((p) => activeFilters.value.type.has(p.type));
  }
  if (activeFilters.value.brand.size) {
    list = list.filter((p) => activeFilters.value.brand.has(p.brand));
  }

  if (sortBy.value === "price-asc")
    list = [...list].sort((a, b) => a.price - b.price);
  if (sortBy.value === "price-desc")
    list = [...list].sort((a, b) => b.price - a.price);
  if (sortBy.value === "year-desc")
    list = [...list].sort((a, b) => b.year - a.year);
  if (sortBy.value === "year-asc")
    list = [...list].sort((a, b) => a.year - b.year);
  return list;
});

function quickAdd(p) {
  addToCart(p, 1);
  toast.value = "Added to cart";
  setTimeout(() => (toast.value = ""), 2000);
}
</script>
