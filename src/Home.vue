<template>
  <div
    class="relative min-h-screen bg-cover bg-center"
    :style="`background-image: url('${bgImage}')`"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/60"></div>
    <div class="relative z-10">
      <!-- Hero Content -->
      <section
        class="relative z-10 max-w-7xl mx-auto px-6 py-40 flex flex-col lg:flex-row items-center gap-16 text-white"
      >
        <div class="flex-1 p-10 text-center">
          <h1
            class="text-5xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg animate-slide-in-top"
          >
            Find Your Dream Car With<br />
            <span class="text-orange-500 animate-bounce-in animate-delay-200"
              >Legacy Cars</span
            >
          </h1>
          <p
            class="mt-4 text-xl text-gray-200 font-light animate-fade-in-up animate-delay-300"
          >
            Discover top-tier new and used vehicles with premium quality and
            competitive prices.
          </p>
          <p
            class="mt-2 text-lg text-orange-200 italic animate-fade-in-up animate-delay-400"
          >
            Drive your passion, own your journey.
          </p>

          <!-- Search Bar Start -->
          <div
            class="mt-8 w-full max-w-xl mx-auto relative animate-scale-in animate-delay-500"
            @click.away="closeSuggestions"
          >
            <form @submit.prevent="handleSearch" class="flex w-full">
              <div class="relative flex-1">
                <input
                  v-model="searchTerm"
                  type="text"
                  placeholder="Search for cars, models, or brands..."
                  @input="handleSearchInput"
                  @focus="showSuggestions = true"
                  class="w-full px-4 py-3 rounded-l-lg border-t border-b border-l border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 text-white bg-transparent"
                />
                <!-- Search Suggestions Dropdown -->
                <div
                  v-if="showSuggestions && filteredSuggestions.length > 0"
                  class="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto"
                >
                  <div
                    v-for="suggestion in filteredSuggestions"
                    :key="suggestion.id"
                    @click="selectSuggestion(suggestion)"
                    class="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                  >
                    <div class="flex items-center gap-3">
                      <img
                        :src="suggestion.image"
                        :alt="suggestion.name"
                        class="w-12 h-8 object-cover rounded"
                      />
                      <div class="flex-1">
                        <div class="font-medium text-gray-900">
                          {{ suggestion.name }}
                        </div>
                        <div class="text-sm text-gray-600">
                          {{ suggestion.brand }} • {{ suggestion.type }} • ${{
                            suggestion.price.toLocaleString()
                          }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                class="px-6 py-3 bg-orange-500 text-white font-semibold rounded-r-lg hover:bg-orange-600 transition"
              >
                Search
              </button>
            </form>

            <!-- Popular Brands Quick Search -->
            <div
              class="mt-3 flex flex-wrap gap-2 justify-center animate-fade-in-up animate-delay-600"
            >
              <span class="text-sm text-gray-300">Popular:</span>
              <button
                v-for="(brand, index) in popularBrands"
                :key="brand"
                @click="searchByBrand(brand)"
                :class="`px-3 py-1 text-xs bg-white/20 text-white rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:bg-white/40 animate-fade-in-up animate-delay-${
                  700 + index * 100
                }`"
              >
                {{ brand }}
              </button>
            </div>
          </div>
          <!-- Search Bar End -->

          <div
            class="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-800"
          >
            <RouterLink
              to="/shop"
              class="btn-cta btn-lg bg-orange-500 hover:bg-orange-600 text-white shadow hover-lift hover-glow"
            >
              <span class="animate-bounce-in animate-delay-900">🚗</span>
              <span>Explore Cars</span>
            </RouterLink>
            <a
              href="#footer"
              class="btn-cta btn-lg btn-outline-accent hover-lift"
            >
              <span class="animate-bounce-in animate-delay-1000">📞</span>
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
  <div class="bg-gray-950">
    <section class="-mt-30">
      <div
        class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        <!-- Card 1 -->
        <div
          class="relative rounded-2xl overflow-hidden shadow-lg group hover-lift animate-fade-in-left animate-delay-300"
        >
          <img
            src="@/assets/img/car4.jpg"
            alt="Car 1"
            class="w-full h-64 object-cover group-hover:scale-105 transition-all duration-500"
          />
          <div
            class="absolute inset-0 bg-black/40 flex items-center justify-center"
          >
            <span
              class="text-white font-serif text-2xl font-bold drop-shadow-lg"
              >Your</span
            >
          </div>
        </div>
        <!-- Card 2 -->
        <div
          class="relative rounded-2xl overflow-hidden shadow-lg bg-black group hover-lift animate-fade-in-up animate-delay-400"
        >
          <img
            src="@/assets/img/car3.webp"
            alt="Car 2"
            class="w-100 h-64 object-cover group-hover:scale-105 transition-all duration-500"
          />
          <div
            class="absolute inset-0 bg-black/40 flex items-center justify-center"
          >
            <span
              class="text-white font-serif text-2xl font-bold drop-shadow-lg"
              >Perfect Ride</span
            >
          </div>
        </div>
        <!-- Card 3 -->
        <div
          class="relative rounded-2xl overflow-hidden shadow-lg group hover-lift animate-fade-in-right animate-delay-500"
        >
          <img
            src="@/assets/img/car6.avif"
            alt="Car 3"
            class="w-full h-64 object-cover group-hover:scale-105 transition-all duration-500"
          />
          <div
            class="absolute inset-0 bg-black/40 flex items-center justify-center"
          >
            <span
              class="text-white font-serif text-2xl font-bold drop-shadow-lg"
              >Awaits</span
            >
          </div>
        </div>
      </div>
    </section>
    <!-- Featured Cars Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-6">
        <h2
          class="text-3xl font-bold text-white mb-2 text-center animate-slide-in-top"
        >
          Featured Cars
        </h2>
        <div
          class="flex justify-center mb-8 animate-fade-in-up animate-delay-200"
        >
          <svg
            height="12"
            width="120"
            viewBox="0 0 120 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="animate-scale-in animate-delay-300"
          >
            <path
              d="M10 10 Q60 0 110 10"
              stroke="#f97316"
              stroke-width="4"
              fill="transparent"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div
          class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
        >
          <div
            v-for="(car, index) in featuredCars"
            :key="car.id"
            :class="`bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group hover-lift animate-fade-in-up animate-delay-${
              400 + index * 100
            }`"
          >
            <img
              :src="car.image"
              :alt="car.name"
              class="w-full h-56 object-cover group-hover:scale-105 transition"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-white mb-2">
                {{ car.name }}
              </h3>
              <p class="text-orange-400 text-lg font-bold mb-2">
                ${{ car.price.toLocaleString() }}
              </p>
              <ul class="flex flex-wrap gap-4 text-gray-300 text-sm mb-4">
                <li><span class="font-medium">Year:</span> {{ car.year }}</li>
                <li>
                  <span class="font-medium">Mileage:</span> {{ car.mileage }} km
                </li>
                <li><span class="font-medium">Type:</span> {{ car.type }}</li>
              </ul>
              <RouterLink
                :to="{ name: 'Product', params: { id: carRouteId(car.name) } }"
                class="w-full block text-center py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition"
              >
                View Details
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Why Choose Us Section -->
    <section class="py-20 bg-gray-950">
      <div class="max-w-7xl mx-auto px-6">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-white mb-4 animate-slide-in-top">
            Why Choose Legacy Cars?
          </h2>
          <div
            class="flex justify-center mb-8 animate-fade-in-up animate-delay-200"
          >
            <svg
              height="12"
              width="120"
              viewBox="0 0 120 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="animate-scale-in animate-delay-300"
            >
              <path
                d="M10 10 Q60 0 110 10"
                stroke="#f97316"
                stroke-width="4"
                fill="transparent"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <p
            class="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animate-delay-400"
          >
            We've been helping customers find their perfect vehicles for over 15
            years. Our commitment to quality, transparency, and customer
            satisfaction sets us apart.
          </p>
        </div>

        <!-- Statistics -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div
            class="text-center animate-fade-in-up animate-delay-500 hover-lift"
          >
            <div
              class="text-4xl font-bold text-orange-500 mb-2 animate-bounce-in animate-delay-600"
            >
              15+
            </div>
            <div class="text-gray-300">Years Experience</div>
          </div>
          <div
            class="text-center animate-fade-in-up animate-delay-600 hover-lift"
          >
            <div
              class="text-4xl font-bold text-orange-500 mb-2 animate-bounce-in animate-delay-700"
            >
              5000+
            </div>
            <div class="text-gray-300">Happy Customers</div>
          </div>
          <div
            class="text-center animate-fade-in-up animate-delay-700 hover-lift"
          >
            <div
              class="text-4xl font-bold text-orange-500 mb-2 animate-bounce-in animate-delay-800"
            >
              200+
            </div>
            <div class="text-gray-300">Cars Available</div>
          </div>
          <div
            class="text-center animate-fade-in-up animate-delay-800 hover-lift"
          >
            <div
              class="text-4xl font-bold text-orange-500 mb-2 animate-bounce-in animate-delay-900"
            >
              98%
            </div>
            <div class="text-gray-300">Satisfaction Rate</div>
          </div>
        </div>

        <!-- Features Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <!-- Feature 1 -->
          <div
            class="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 hover-lift animate-fade-in-up animate-delay-500"
          >
            <div
              class="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mb-6"
            >
              <span class="text-2xl"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    d="M28.5 32a3.48 3.48 0 0 1-2.475-1.025l-4.128-4.128a6.496 6.496 0 0 1-7.348-8.956l.588-1.34l4.156 4.156a1.023 1.023 0 0 0 1.414 0a1 1 0 0 0 0-1.414l-4.156-4.157l1.34-.588a6.497 6.497 0 0 1 8.956 7.349l4.128 4.128A3.5 3.5 0 0 1 28.5 32m-6.03-7.409l4.97 4.97a1.535 1.535 0 0 0 2.12 0a1.5 1.5 0 0 0 0-2.121l-4.969-4.97l.188-.583A4.496 4.496 0 0 0 20.5 16q-.126 0-.25.007l1.872 1.872a3 3 0 0 1 0 4.242a3.07 3.07 0 0 1-4.243 0l-1.872-1.872Q16 20.374 16 20.5a4.497 4.497 0 0 0 5.888 4.28Z"
                  />
                  <path
                    fill="currentColor"
                    d="M25 5h-3V4a2.006 2.006 0 0 0-2-2h-8a2.006 2.006 0 0 0-2 2v1H7a2.006 2.006 0 0 0-2 2v21a2.006 2.006 0 0 0 2 2h7v-2H7V7h3v3h12V7h3v5h2V7a2.006 2.006 0 0 0-2-2m-5 3h-8V4h8Z"
                  /></svg
              ></span>
            </div>
            <h3 class="text-xl font-semibold text-white mb-4">
              Certified Pre-Owned
            </h3>
            <p class="text-gray-300">
              All our used vehicles undergo rigorous 150-point inspection and
              come with extended warranties.
            </p>
          </div>

          <!-- Feature 2 -->
          <div
            class="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 hover-lift animate-fade-in-up animate-delay-600"
          >
            <div
              class="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mb-6"
            >
              <span class="text-2xl"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 64 64"
                >
                  <ellipse
                    cx="10.97"
                    cy="52.578"
                    fill="currentColor"
                    rx="1.742"
                    ry="1.188"
                  />
                  <path
                    fill="currentColor"
                    d="m62 46.669l-.654-.384c-.05-.029-5.047-2.994-6.289-6.592l-.277-.797l-.512.669c-.016.021-.726.899-2.713 1.929c-1.471-8.373-6.475-18.369-13.051-22.631c1.88.152 3.766-.004 5.586-.666c1.096-.398.623-2.184-.483-1.78c-1.492.543-2.987.691-4.479.615c3.663-3.357 6.539-8.502 6.539-12.264c0-.904 0-2.587-1.34-2.587c-.538 0-.973.336-1.574.8c-.922.711-2.314 1.787-4.359 1.787c-.779 0-2.205-.822-3.351-1.482C33.658 2.489 32.773 2 32.029 2c-1.232 0-3.043.996-4.641 1.875c-.65.357-1.539.847-1.723.894c-2.316 0-3.661-1.068-4.553-1.775c-.52-.414-.897-.714-1.4-.714c-1.318 0-1.318 1.581-1.318 3.412c0 3.534 2.692 8.199 6.217 11.334c-2.221.159-4.411.83-5.95 2.321c-.85.822.438 2.126 1.285 1.306c1.279-1.24 2.956-1.771 4.75-1.874q.076.274.189.54C17.369 24.72 12.03 37.545 12.03 46.203c0 .854.066 1.627.168 2.355c-1.938-.861-2.645-1.616-2.659-1.633l-.516-.595l-.254.75c-1.123 3.304-6.005 6.17-6.054 6.199L2 53.694l.727.393c.255.138.508.259.763.39l-.46.319l.243 3.04L22.326 62l7.224-4.621q1.093.006 2.218.006L40.212 62l19.089-6v-3.209l-.505-.303q.378-.24.755-.491l.669-.447l-.147-.072l.851-.233l.144-3.336l-.492-.349q.393-.235.785-.483zM20.213 5.692c0-.444.006-.79.015-1.059c.153.12.331.251.521.386c.583 1.396 1.686 3.406 3.556 4.672c2.272 1.54 1.97-.23 3.182-1.846c1.212-1.615 2.032-2.461 4.062 1.693c.885 1.811 2.36-3.25 3.762-3.989c.371.202.741.39 1.104.55c2.514 4.088 3.679 2.813 5.912-.585c.614-.36 1.118-.746 1.519-1.055q.003.139.004.311c0 3.21-2.623 7.814-5.835 10.817a3.6 3.6 0 0 0-.642-1.053c-1.297-1.469-3.324.16-4.285 1.229c-1.705-.548-4.483-2.057-6.293-1.193a4.6 4.6 0 0 0-1.226.831c-2.96-2.698-5.356-6.593-5.356-9.709m16.204 10.974a27 27 0 0 1-1.337-.32c.558-.481 1.07-.649 1.285.066c.023.078.037.167.052.254m-7.6.621q-.496-.096-1.021-.165a14 14 0 0 1-.779-.525c.914-.613 2.49-.287 3.996.224c-.743.075-1.476.237-2.196.466m.454 2.64c-.56.14-1.17.084-1.697-.126c.214-.113.43-.211.646-.31c.35.169.7.31 1.051.436M10.774 56.379a39.3 39.3 0 0 1-6.912-2.733c1.357-.892 4.313-3.049 5.515-5.641c.824.647 2.726 1.827 6.43 2.733c-.063.102-.14.211-.214.318c-3.162-.828-4.96-1.875-4.989-1.893l-.436-.26l-.209.467c-.275.612-.92.704-1.279.704c-.1 0-.167-.007-.176-.008l-.357-.052l-.13.342c-.266.698-1.358 1.61-1.758 1.903l-.668.49l.764.313c.284.116.361.223.365.251c.01.069-.111.251-.24.356l-.582.469l.677.313c1.387.64 2.958 1.17 4.529 1.607q-.186.183-.33.321m8.064-3.726c1.398.196 2.947.32 4.639.32h.001q.527 0 1.073-.017a1 1 0 0 0 .103.213q.133.203.361.334l-2.552 2.181l-.146-.003c-1.137 0-1.985.418-2.392 1.162a69 69 0 0 1-4.602-.747a51 51 0 0 0 3.515-3.443M7.489 53.85c.1-.189.165-.418.13-.668a1 1 0 0 0-.307-.59c.449-.385 1.068-.979 1.408-1.594c.773-.011 1.411-.304 1.813-.822c.677.354 2.202 1.069 4.455 1.689c-.921 1.155-2.162 2.465-3.127 3.439c-1.504-.398-3.019-.878-4.372-1.454m14.251 4.209l-.205.001c-.861 0-3.714-.07-7.483-.855c.132-.112.269-.227.396-.337c3.058.639 5.524.913 5.709.934l.366.039l.113-.355c.247-.766 1.158-.879 1.68-.879c.143 0 .238.009.249.01l.194.021l4.433-3.788l-1.185-.039c-.396-.014-.563-.103-.604-.164l.251-.657l-.694.029q-.759.033-1.483.033h-.001c-1.396 0-2.691-.092-3.888-.237l.278-.328c2.416.323 5.309.522 8.802.497c-.834 1.17-2.914 3.657-6.928 6.075m10.024-4.345v1.825q-.853 0-1.665-.006l-.163-2.054l-1.354.11c.912-1.078 1.301-1.797 1.336-1.862l.367-.694l-.775.014c-7.418.136-12.256-.748-15.31-1.73c-.223-.902-.352-1.922-.352-3.113c0-8.123 5.191-20.401 12.083-25.377c1.221 1.181 3.073 1.698 4.833.549c.386-.252.722-.582 1.037-.933c.075.002.152.019.228.019c.252 0 .508-.021.763-.053c.323.129.639.259.932.388c1.403.618 2.601.234 3.419-.618c6.313 3.82 11.371 13.925 12.702 22.093c-2.886 1.154-7.464 2.28-14.49 2.478c1.386-.792 2.426-2.124 2.052-3.874c-.393-1.85-1.939-2.37-3.54-2.455q-.007-1.302.002-2.605c.491.217.962.467 1.39.734c.756.475 1.44-.756.689-1.231a10.3 10.3 0 0 0-2.072-.999q.015-1.508.015-3.014c.001-.92-1.366-.92-1.366 0q-.001 1.325-.014 2.646a7.1 7.1 0 0 0-2.202-.037a27 27 0 0 0-.432-1.97c-.226-.886-1.546-.511-1.317.378c.168.639.305 1.275.418 1.92c-.058.022-.121.033-.178.059c-1.852.733-2.982 2.602-1.627 4.345c.631.812 1.456 1.14 2.359 1.249c.049 1.203.08 2.407.115 3.609c-.605-.393-1.156-.897-1.655-1.43c-.618-.652-1.583.355-.966 1.006c.839.893 1.72 1.568 2.675 2c.043 1.027.104 2.057.204 3.079c.088.907 1.456.912 1.367 0a54 54 0 0 1-.187-2.657c.52.09 1.066.113 1.646.058c.065.946.141 1.892.249 2.838c.062.542.58.755.962.645l-.085 1.964c-.602.054-1.216.104-1.856.146l-.762.05l.406.656c.041.066.502.795 1.531 1.856h-1.412zm24.888-6.582c-1.257.591-2.847 1.133-4.467 1.606c-.996-1.029-2.27-2.402-3.221-3.62c2.119-.642 3.305-1.304 3.84-1.661c.423.373.983.567 1.646.566c.22 0 .415-.021.565-.045c.48.622 1.254 1.34 1.738 1.769q-.344.353-.331.776c.008.24.104.444.23.609m-7.155 3.286q.307.27.63.55c-4.054 1.075-7.071 1.192-7.728 1.203c-4.198-2.561-6.374-5.271-7.213-6.491c3.513-.088 6.417-.406 8.839-.844a24 24 0 0 0 .299.36a53 53 0 0 1-5.877.583l-.807.034l.444.679c-.001.001-.091.169-.687.285l-.969.189l4.764 3.857l.222-.06c.005-.001.425-.114.933-.114c.733 0 1.234.223 1.486.659l.16.276l.311-.055a87 87 0 0 0 5.193-1.111M35.4 47.479l-1.138-.062c-.053-.568-.106-1.136-.146-1.704c.2.332.61.956 1.284 1.766m-1.408-3.661a105 105 0 0 1-.119-4.041q.248.01.48.043c1.768.268 2.23 2.234.85 3.34c-.36.285-.775.494-1.211.658m10.439 6.752c-.448-.553-1.161-.843-2.083-.843c-.385 0-.724.052-.938.094l-2.995-2.427q.372-.214.509-.546a1 1 0 0 0 .052-.171c2.374-.13 4.374-.367 6.065-.657c.82.915 2.025 2.177 3.623 3.644c-1.963.467-3.6.787-4.233.906M32.505 39.813c.019 1.449.055 2.902.132 4.35c-.129.02-.256.045-.383.058c-.43.049-.838.013-1.226-.085c-.049-1.4-.081-2.803-.134-4.204c.538-.025 1.083-.078 1.611-.119m-1.68-1.265a44 44 0 0 0-.31-3.286a5.3 5.3 0 0 1 1.987.101a285 285 0 0 0-.005 3.067c-.439.024-.856.066-1.223.099a6 6 0 0 1-.449.019m-1.372-.175c-.085-.023-.169-.041-.256-.07a2.7 2.7 0 0 1-1.057-.667c-.854-.797.318-1.579 1.057-1.95c.116.89.196 1.788.256 2.687M40.49 57.839c-4.341-2.218-6.67-4.683-7.595-5.825c.665-.05 1.294-.11 1.917-.173l7.118 4.62l15.61-4.288c-8.05 4.852-16.003 5.591-17.05 5.666m12.892-7.89l-.462-.463c1.776-.538 3.494-1.162 4.775-1.848l.779-.419l-.79-.402c-.177-.091-.35-.258-.353-.321c.002-.024.072-.152.375-.326l.578-.332l-.514-.428c-.016-.013-1.619-1.344-2.182-2.201l-.186-.28l-.319.093c-.003 0-.277.079-.633.079c-.55.001-.962-.179-1.226-.533l-.292-.387l-.366.315c-.019.016-1.152.945-4.191 1.823a10 10 0 0 1-.289-.44c3.685-1.117 5.568-2.469 6.384-3.209c1.31 2.834 4.429 5.117 5.783 6.012a38 38 0 0 1-6.871 3.267"
                  />
                  <path
                    fill="currentColor"
                    d="M44.38 47.117c-.997-.271-2.122-.086-2.516.409c-.391.497.103 1.123 1.099 1.396c.998.271 2.122.085 2.516-.411c.391-.497-.101-1.121-1.099-1.394"
                  /></svg
              ></span>
            </div>
            <h3 class="text-xl font-semibold text-white mb-4">
              Best Price Guarantee
            </h3>
            <p class="text-gray-300">
              We offer competitive pricing and will match any legitimate
              competitor's offer.
            </p>
          </div>

          <!-- Feature 3 -->
          <div
            class="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 hover-lift animate-fade-in-up animate-delay-700"
          >
            <div
              class="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mb-6"
            >
              <span class="text-2xl"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M165.4 96h181.2c13.6 0 25.7 8.6 30.2 21.4l26.1 74.6H109.1l26.1-74.6c4.5-12.8 16.6-21.4 30.2-21.4m-90.6.3L39.6 196.8C16.4 206.4 0 229.3 0 256v96c0 23.7 12.9 44.4 32 55.4V448c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-32h256v32c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-40.6c19.1-11.1 32-31.7 32-55.4v-96c0-26.7-16.4-49.6-39.6-59.2L437.2 96.3C423.7 57.8 387.4 32 346.6 32H165.4c-40.8 0-77.1 25.8-90.6 64.3M208 288h96c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16m-160-8c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H72c-13.3 0-24-10.7-24-24m360-24h32c13.3 0 24 10.7 24 24s-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24s10.7-24 24-24"
                  /></svg
              ></span>
            </div>
            <h3 class="text-xl font-semibold text-white mb-4">
              Test Drive Any Car
            </h3>
            <p class="text-gray-300">
              Schedule a test drive for any vehicle in our inventory at your
              convenience.
            </p>
          </div>

          <!-- Feature 4 -->
          <div
            class="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 hover-lift animate-fade-in-up animate-delay-800"
          >
            <div
              class="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mb-6"
            >
              <span class="text-2xl"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M9 4v1.38c-.83-.33-1.72-.5-2.61-.5c-1.79 0-3.58.68-4.95 2.05l3.33 3.33h1.11v1.11c.86.86 1.98 1.31 3.11 1.36V15H6v3c0 1.1.9 2 2 2h10c1.66 0 3-1.34 3-3V4zm-1.11 6.41V8.26H5.61L4.57 7.22a5.1 5.1 0 0 1 1.82-.34c1.34 0 2.59.52 3.54 1.46l1.41 1.41l-.2.2a2.7 2.7 0 0 1-1.92.8c-.47 0-.93-.12-1.33-.34M19 17c0 .55-.45 1-1 1s-1-.45-1-1v-2h-6v-2.59c.57-.23 1.1-.57 1.56-1.03l.2-.2L15.59 14H17v-1.41l-6-5.97V6h8z"
                  /></svg
              ></span>
            </div>
            <h3 class="text-xl font-semibold text-white mb-4">
              Transparent History
            </h3>
            <p class="text-gray-300">
              Complete vehicle history reports and maintenance records available
              for all cars.
            </p>
          </div>

          <!-- Feature 5 -->
          <div
            class="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 hover-lift animate-fade-in-up animate-delay-900"
          >
            <div
              class="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mb-6"
            >
              <span class="text-2xl"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    d="M2 28h28v2H2zm25-17a1 1 0 0 0 1-1V7a1 1 0 0 0-.66-.94l-11-4a1 1 0 0 0-.68 0l-11 4A1 1 0 0 0 4 7v3a1 1 0 0 0 1 1h1v13H4v2h24v-2h-2V11zM6 7.7l10-3.64L26 7.7V9H6zM18 24h-4V11h4zM8 11h4v13H8zm16 13h-4V11h4z"
                  /></svg
              ></span>
            </div>
            <h3 class="text-xl font-semibold text-white mb-4">
              Financing Options
            </h3>
            <p class="text-gray-300">
              Flexible financing solutions with competitive rates and quick
              approval process.
            </p>
          </div>

          <!-- Feature 6 -->
          <div
            class="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 hover-lift animate-fade-in-up animate-delay-1000"
          >
            <div
              class="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mb-6"
            >
              <span class="text-2xl"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="currentColor"
                    d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3c2.5 1.89 5.62 3 9 3zm-9 1.08l2.92 2.04l-1.03-3.41l2.84-2.15l-3.56-.08L10 5.12L8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z"
                  /></svg
              ></span>
            </div>
            <h3 class="text-xl font-semibold text-white mb-4">
              Extended Warranty
            </h3>
            <p class="text-gray-300">
              Comprehensive warranty coverage on all vehicles with roadside
              assistance included.
            </p>
          </div>
        </div>

        <!-- Testimonials Carousel -->
        <div
          class="bg-gray-800 rounded-2xl p-8 animate-fade-in-up animate-delay-1100"
        >
          <h3
            class="text-2xl font-bold text-white mb-8 text-center animate-slide-in-top"
          >
            What Our Customers Say
          </h3>
          <div class="relative max-w-xl mx-auto">
            <div class="overflow-hidden">
              <transition name="fade" mode="out-in">
                <div
                  v-if="testimonials.length"
                  :key="currentTestimonial"
                  class="text-center"
                >
                  <div class="flex justify-center mb-4">
                    <div class="flex text-orange-500">
                      <span v-for="n in 5" :key="n">⭐</span>
                    </div>
                  </div>
                  <p class="text-gray-300 mb-4 italic">
                    "{{ testimonials[currentTestimonial].text }}"
                  </p>
                  <div class="text-white font-semibold">
                    {{ testimonials[currentTestimonial].name }}
                  </div>
                  <div class="text-orange-500 text-sm">
                    {{ testimonials[currentTestimonial].title }}
                  </div>
                </div>
              </transition>
            </div>
            <!-- Carousel Controls -->
            <div class="flex justify-center mt-6 gap-4">
              <button
                @click="prevTestimonial"
                class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-orange-500 text-white transition"
                aria-label="Previous testimonial"
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M15 19l-7-7 7-7"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button
                @click="nextTestimonial"
                class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-orange-500 text-white transition"
                aria-label="Next testimonial"
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M9 5l7 7-7 7"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <!-- Dots -->
            <div class="flex justify-center mt-4 gap-2">
              <button
                v-for="(t, idx) in testimonials"
                :key="idx"
                @click="goToTestimonial(idx)"
                :class="[
                  'w-3 h-3 rounded-full',
                  idx === currentTestimonial ? 'bg-orange-500' : 'bg-gray-500',
                ]"
                aria-label="Go to testimonial"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import logo from "@/assets/img/logo1.png";

// Background Ferrari image
import bgImage from "@/assets/img/car7.jpg";

// Import products data for search functionality
import { products } from "@/data/products.js";

// Search functionality
const searchTerm = ref("");
const showSuggestions = ref(false);
const filteredSuggestions = ref([]);

// Get unique brands from products
const popularBrands = [...new Set(products.map((p) => p.brand))];

const handleSearchInput = () => {
  if (searchTerm.value.trim() === "") {
    filteredSuggestions.value = [];
    return;
  }

  const searchLower = searchTerm.value.toLowerCase();
  filteredSuggestions.value = products
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchLower) ||
        product.brand.toLowerCase().includes(searchLower) ||
        product.type.toLowerCase().includes(searchLower)
    )
    .slice(0, 5); // Limit to 5 suggestions
};

const selectSuggestion = (suggestion) => {
  searchTerm.value = suggestion.name;
  showSuggestions.value = false;
  // Navigate to the product page
  window.location.href = `/product/${suggestion.id}`;
};

const searchByBrand = (brand) => {
  searchTerm.value = brand;
  showSuggestions.value = false;
  // Navigate to shop with brand filter
  window.location.href = `/shop?brand=${encodeURIComponent(brand)}`;
};

const handleSearch = () => {
  if (searchTerm.value.trim() === "") return;

  const searchLower = searchTerm.value.toLowerCase();
  const matchingProduct = products.find(
    (product) =>
      product.name.toLowerCase().includes(searchLower) ||
      product.brand.toLowerCase().includes(searchLower) ||
      product.type.toLowerCase().includes(searchLower)
  );

  if (matchingProduct) {
    // Navigate to the matching product
    window.location.href = `/product/${matchingProduct.id}`;
  } else {
    // Navigate to shop with search term
    window.location.href = `/shop?search=${encodeURIComponent(
      searchTerm.value
    )}`;
  }
};

// Close suggestions when clicking outside
const closeSuggestions = () => {
  setTimeout(() => {
    showSuggestions.value = false;
  }, 200);
};

import car2 from "@/assets/img/fc1.webp";
import car3 from "@/assets/img/fc2.webp";
import car4 from "@/assets/img/fc3.webp";
import car5 from "@/assets/img/fc4.webp";
import car6 from "@/assets/img/fc5.webp";
import car8 from "@/assets/img/fc6.webp";

const featuredCars = [
  {
    id: 1,
    name: "2022 Toyota Camry XSE",
    price: 32000,
    year: 2022,
    mileage: 12000,
    type: "Sedan",
    image: car2,
  },
  {
    id: 2,
    name: "2021 BMW X5 M Sport",
    price: 58000,
    year: 2021,
    mileage: 8000,
    type: "SUV",
    image: car3,
  },
  {
    id: 3,
    name: "2020 Mercedes-Benz C300",
    price: 41000,
    year: 2020,
    mileage: 15000,
    type: "Coupe",
    image: car4,
  },
  {
    id: 4,
    name: "2019 Audi A4 Premium",
    price: 27000,
    year: 2019,
    mileage: 22000,
    type: "Sedan",
    image: car5,
  },
  {
    id: 5,
    name: "2023 Tesla Model S",
    price: 90000,
    year: 2023,
    mileage: 3000,
    type: "Electric",
    image: car6,
  },
  {
    id: 6,
    name: "2018 Honda CR-V EX",
    price: 24000,
    year: 2018,
    mileage: 35000,
    type: "SUV",
    image: car8,
  },
];
const testimonials = ref([
  {
    text: "This product changed my life!",
    name: "John Doe",
    title: "CEO, Company A",
  },
  {
    text: "Excellent customer service and great value.",
    name: "Jane Smith",
    title: "CTO, Company B",
  },
  // Add more testimonials as needed
]);

const currentTestimonial = ref(0);

function nextTestimonial() {
  currentTestimonial.value =
    (currentTestimonial.value + 1) % testimonials.value.length;
}

function prevTestimonial() {
  currentTestimonial.value =
    (currentTestimonial.value - 1 + testimonials.value.length) %
    testimonials.value.length;
}

function goToTestimonial(index) {
  currentTestimonial.value = index;
}

function carRouteId(name) {
  const map = new Map([
    ["2022 Toyota Camry XSE", "camry-xse-2022"],
    ["2021 BMW X5 M Sport", "bmw-x5-m-2021"],
    ["2020 Mercedes-Benz C300", "mb-c300-2020"],
    ["2019 Audi A4 Premium", "audi-a4-2019"],
    ["2023 Tesla Model S", "tesla-model-s-2023"],
    ["2018 Honda CR-V EX", "honda-crv-2018"],
  ]);
  return map.get(name) || "";
}
</script>
