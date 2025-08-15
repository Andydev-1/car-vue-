<template>
  <div class="min-h-screen bg-gray-900">
    <div class="max-w-6xl mx-auto px-6 py-12">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-5xl font-bold text-white mb-6 animate-slide-in-top">
          Contact Us
        </h1>
        <p
          class="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animate-delay-200"
        >
          Have questions? Want to schedule a test drive? We're here to help!
          Reach out to us and we'll get back to you as soon as possible.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div
          class="bg-gray-800 rounded-2xl shadow-sm p-8 animate-fade-in-left animate-delay-300 hover-lift"
        >
          <h2 class="text-2xl font-bold text-white mb-6">Send us a Message</h2>
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  for="firstName"
                  class="block text-sm font-medium text-gray-300 mb-2"
                >
                  First Name *
                </label>
                <input
                  id="firstName"
                  v-model="form.firstName"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                  placeholder="John"
                />
              </div>
              <div>
                <label
                  for="lastName"
                  class="block text-sm font-medium text-gray-300 mb-2"
                >
                  Last Name *
                </label>
                <input
                  id="lastName"
                  v-model="form.lastName"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-300 mb-2"
              >
                Email Address *
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label
                for="phone"
                class="block text-sm font-medium text-gray-300 mb-2"
              >
                Phone Number
              </label>
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                class="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label
                for="subject"
                class="block text-sm font-medium text-gray-300 mb-2"
              >
                Subject *
              </label>
              <select
                id="subject"
                v-model="form.subject"
                required
                class="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="test-drive">Schedule Test Drive</option>
                <option value="financing">Financing Questions</option>
                <option value="service">Service & Maintenance</option>
                <option value="trade-in">Trade-In Evaluation</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                for="message"
                class="block text-sm font-medium text-gray-300 mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                required
                class="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                placeholder="Tell us how we can help you..."
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full btn-primary btn-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="isSubmitting">Sending...</span>
              <span v-else>Send Message</span>
            </button>
          </form>

          <Toast v-if="toast" :text="toast" />
        </div>

        <!-- Contact Information -->
        <div class="space-y-8">
          <!-- Business Info -->
          <div class="bg-gray-800 rounded-2xl shadow-sm p-8">
            <h2 class="text-2xl font-bold text-white mb-6">
              Business Information
            </h2>
            <div class="space-y-4">
              <div class="flex items-start gap-4">
                <div
                  class="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-5 h-5 text-blue-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-white">Address</h3>
                  <p class="text-gray-300">
                    123 Auto Drive<br />City, State 12345
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="w-10 h-10 bg-green-900 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-5 h-5 text-green-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-white">Phone</h3>
                  <p class="text-gray-300">(555) 123-4567</p>
                  <p class="text-gray-300">(555) 123-4568</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="w-10 h-10 bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-5 h-5 text-purple-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-white">Email</h3>
                  <p class="text-gray-300">info@legacycars.com</p>
                  <p class="text-gray-300">sales@legacycars.com</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Business Hours -->
          <div class="bg-gray-800 rounded-2xl shadow-sm p-8">
            <h2 class="text-2xl font-bold text-white mb-6">Business Hours</h2>
            <div class="space-y-3">
              <div class="flex justify-between">
                <span class="text-gray-300">Monday - Friday</span>
                <span class="font-medium text-white">8:00 AM - 8:00 PM</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-300">Saturday</span>
                <span class="font-medium text-white">9:00 AM - 6:00 PM</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-300">Sunday</span>
                <span class="font-medium text-white">10:00 AM - 4:00 PM</span>
              </div>
            </div>
            <div class="mt-4 p-4 bg-blue-900/50 rounded-lg">
              <p class="text-sm text-blue-200">
                <strong>Note:</strong> We're closed on major holidays. Test
                drives are available during business hours by appointment.
              </p>
            </div>
          </div>

          <!-- Quick Actions -->
          <div
            class="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 text-white"
          >
            <h2 class="text-xl font-bold mb-4">Quick Actions</h2>
            <div class="space-y-3">
              <RouterLink
                to="/shop"
                class="block w-full text-center py-3 px-4 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
              >
                Browse Inventory
              </RouterLink>
              <a
                href="tel:+15551234567"
                class="block w-full text-center py-3 px-4 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
              >
                Call Now
              </a>
              <a
                href="mailto:info@legacycars.com"
                class="block w-full text-center py-3 px-4 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Map Section -->
      <section class="mt-16">
        <h2 class="text-3xl font-bold text-white text-center mb-8">Find Us</h2>
        <div class="bg-gray-800 rounded-2xl shadow-sm p-8">
          <div
            class="bg-gray-700 rounded-lg h-96 flex items-center justify-center"
          >
            <div class="text-center text-gray-400">
              <svg
                class="w-16 h-16 mx-auto mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                />
              </svg>
              <p class="text-lg">Interactive Map Coming Soon</p>
              <p class="text-sm">123 Auto Drive, City, State 12345</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Toast from "@/components/Toast.vue";

const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
});

const isSubmitting = ref(false);
const toast = ref("");

async function submitForm() {
  isSubmitting.value = true;

  // Simulate form submission
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Show success message
  toast.value =
    "Thank you! Your message has been sent successfully. We'll get back to you soon.";

  // Clear form
  form.value = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  // Hide toast after 5 seconds
  setTimeout(() => {
    toast.value = "";
  }, 5000);

  isSubmitting.value = false;
}
</script>
