import { ref, computed, watch } from 'vue'

const CART_STORAGE_KEY = 'cars_vue_cart_v1'

function loadInitialCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (Array.isArray(parsed)) return parsed
    return []
  } catch {
    return []
  }
}

const cartItems = ref(loadInitialCart())

watch(
  cartItems,
  (items) => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
    } catch {
      // ignore persistence errors
    }
  },
  { deep: true }
)

export function useCart() {
  const itemCount = computed(() => cartItems.value.reduce((sum, item) => sum + item.quantity, 0))

  const subtotal = computed(() => cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0))

  const shipping = computed(() => {
    return subtotal.value > 0 ? 49 : 0
  })

  const tax = computed(() => {
    // simple 7.5% tax estimator
    return Math.round(subtotal.value * 0.075)
  })

  const total = computed(() => subtotal.value + shipping.value + tax.value)

  function addToCart(product, quantity = 1) {
    const existing = cartItems.value.find((c) => c.id === product.id)
    if (existing) {
      existing.quantity += quantity
    } else {
      cartItems.value.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images?.[0] || product.image || '',
        quantity,
        stock: product.stock ?? 10,
      })
    }
  }

  function setQuantity(productId, quantity) {
    const item = cartItems.value.find((c) => c.id === productId)
    if (!item) return
    if (quantity <= 0) {
      removeFromCart(productId)
    } else {
      item.quantity = quantity
    }
  }

  function increment(productId) {
    const item = cartItems.value.find((c) => c.id === productId)
    if (item) item.quantity += 1
  }

  function decrement(productId) {
    const item = cartItems.value.find((c) => c.id === productId)
    if (!item) return
    if (item.quantity <= 1) removeFromCart(productId)
    else item.quantity -= 1
  }

  function removeFromCart(productId) {
    cartItems.value = cartItems.value.filter((c) => c.id !== productId)
  }

  function clearCart() {
    cartItems.value = []
  }

  return {
    cartItems,
    itemCount,
    subtotal,
    shipping,
    tax,
    total,
    addToCart,
    setQuantity,
    increment,
    decrement,
    removeFromCart,
    clearCart,
  }
}


