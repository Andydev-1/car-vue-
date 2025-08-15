import { ref, watch } from 'vue'

const STORAGE_KEY = 'cars_vue_user_v1'

function loadUser() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

const currentUser = ref(loadUser())

watch(currentUser, (val) => {
  try {
    if (val) localStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    else localStorage.removeItem(STORAGE_KEY)
  } catch {
    /* ignore */
  }
})

export function useAuth() {
  async function login(email, password) {
    // Demo auth: accept any non-empty credentials
    if (!email || !password) throw new Error('Email and password are required')
    currentUser.value = { id: crypto?.randomUUID?.() || Date.now(), name: email.split('@')[0], email }
  }

  async function signup(name, email, password) {
    if (!name || !email || !password) throw new Error('All fields are required')
    currentUser.value = { id: crypto?.randomUUID?.() || Date.now(), name, email }
  }

  function logout() {
    currentUser.value = null
  }

  return { currentUser, login, signup, logout }
}


