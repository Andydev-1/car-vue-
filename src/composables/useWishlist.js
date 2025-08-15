import { ref, watch } from 'vue'

const STORAGE_KEY = 'cars_vue_wishlist_v1'

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

const wishlist = ref(load())

watch(
  wishlist,
  (val) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    } catch {
      /* ignore */
    }
  },
  { deep: true }
)

export function useWishlist() {
  function isWished(productId) {
    return wishlist.value.includes(productId)
  }
  function toggle(productId) {
    if (isWished(productId)) {
      wishlist.value = wishlist.value.filter((id) => id !== productId)
    } else {
      wishlist.value = [...wishlist.value, productId]
    }
  }
  return { wishlist, isWished, toggle }
}


