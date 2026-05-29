import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
})

export const sendContactForm = async (data) => {
  // In production, replace with real endpoint
  return new Promise((resolve) => {
    setTimeout(() => resolve({ success: true }), 1200)
  })
}

export default api
