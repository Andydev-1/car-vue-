<template>
  <div class="min-h-screen bg-gray-900">
    <div class="max-w-4xl mx-auto px-6 py-12">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-white mb-4 animate-slide-in-top">
          Terms & Conditions
        </h1>
        <p class="text-lg text-gray-300 animate-fade-in-up animate-delay-200">
          Last updated: {{ new Date().toLocaleDateString() }}
        </p>
      </div>

      <!-- Terms Content -->
      <div
        class="bg-gray-800 rounded-lg shadow-sm p-8 space-y-8 animate-fade-in-up animate-delay-300 hover-lift"
      >
        <!-- Introduction -->
        <section>
          <h2 class="text-2xl font-semibold text-white mb-4">
            1. Introduction
          </h2>
          <p class="text-gray-300 leading-relaxed">
            Welcome to Legacy Cars. These Terms and Conditions govern your use
            of our website and services. By accessing or using our website, you
            agree to be bound by these terms. If you disagree with any part of
            these terms, please do not use our services.
          </p>
        </section>

        <!-- Services -->
        <section>
          <h2 class="text-2xl font-semibold text-white mb-4">2. Services</h2>
          <p class="text-gray-300 leading-relaxed mb-4">
            Legacy Cars provides the following services:
          </p>
          <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Vehicle sales and purchases</li>
            <li>Financing and leasing options</li>
            <li>Vehicle inspection and appraisal services</li>
            <li>Trade-in evaluations</li>
            <li>Extended warranty and protection plans</li>
            <li>Vehicle maintenance and service</li>
          </ul>
        </section>

        <!-- Vehicle Information -->
        <section>
          <h2 class="text-2xl font-semibold text-white mb-4">
            3. Vehicle Information
          </h2>
          <p class="text-gray-300 leading-relaxed mb-4">
            While we strive to provide accurate and up-to-date information about
            our vehicles:
          </p>
          <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>All vehicle information is subject to change without notice</li>
            <li>Photos may not reflect exact vehicle condition</li>
            <li>
              Prices are subject to change and may not include taxes, fees, or
              additional charges
            </li>
            <li>Vehicle availability is not guaranteed</li>
            <li>Mileage and features should be verified in person</li>
          </ul>
        </section>

        <!-- Pricing and Payment -->
        <section>
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">
            4. Pricing and Payment
          </h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            Our pricing policies include:
          </p>
          <ul class="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>All prices are in local currency unless otherwise stated</li>
            <li>
              Prices do not include sales tax, registration fees, or other
              government charges
            </li>
            <li>Financing terms are subject to credit approval</li>
            <li>Down payment requirements may apply</li>
            <li>We reserve the right to modify prices at any time</li>
          </ul>
        </section>

        <!-- Test Drives and Appointments -->
        <section>
          <h2 class="text-2xl font-semibold text-white mb-4">
            5. Test Drives and Appointments
          </h2>
          <p class="text-gray-300 leading-relaxed mb-4">
            For test drives and appointments:
          </p>
          <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Valid driver's license and proof of insurance are required</li>
            <li>Test drives are subject to vehicle availability</li>
            <li>Appointments are recommended but not required</li>
            <li>We may require a credit check for extended test drives</li>
            <li>Test drive duration is typically limited to 30 minutes</li>
          </ul>
        </section>

        <!-- Privacy and Data -->
        <section>
          <h2 class="text-2xl font-semibold text-white mb-4">
            6. Privacy and Data Protection
          </h2>
          <p class="text-gray-300 leading-relaxed">
            We are committed to protecting your privacy. Any personal
            information collected will be used solely for the purpose of
            providing our services and will not be shared with third parties
            without your consent, except as required by law. Please refer to our
            Privacy Policy for detailed information about data collection and
            usage.
          </p>
        </section>

        <!-- Limitation of Liability -->
        <section>
          <h2 class="text-2xl font-semibold text-white mb-4">
            7. Limitation of Liability
          </h2>
          <p class="text-gray-300 leading-relaxed">
            Legacy Cars shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages arising from your use of
            our services. Our total liability shall not exceed the amount paid
            by you for the specific service in question.
          </p>
        </section>

        <!-- Changes to Terms -->
        <section>
          <h2 class="text-2xl font-semibold text-white mb-4">
            8. Changes to Terms
          </h2>
          <p class="text-gray-300 leading-relaxed">
            We reserve the right to modify these terms at any time. Changes will
            be effective immediately upon posting on our website. Your continued
            use of our services after any changes constitutes acceptance of the
            new terms.
          </p>
        </section>

        <!-- Contact Information -->
        <section>
          <h2 class="text-2xl font-semibold text-white mb-4">
            9. Contact Information
          </h2>
          <p class="text-gray-300 leading-relaxed">
            If you have any questions about these Terms and Conditions, please
            contact us:
          </p>
          <div class="mt-4 p-4 bg-gray-700 rounded-lg">
            <p class="text-gray-200"><strong>Legacy Cars</strong></p>
            <p class="text-gray-200">Email: info@legacycars.com</p>
            <p class="text-gray-200">Phone: (555) 123-4567</p>
            <p class="text-gray-200">
              Address: 123 Auto Drive, City, State 12345
            </p>
          </div>
        </section>

        <!-- Governing Law -->
        <section>
          <h2 class="text-2xl font-semibold text-white mb-4">
            10. Governing Law
          </h2>
          <p class="text-gray-300 leading-relaxed">
            These terms shall be governed by and construed in accordance with
            the laws of the state where Legacy Cars is located. Any disputes
            arising from these terms shall be resolved in the courts of that
            jurisdiction.
          </p>
        </section>
      </div>

      <!-- Back to Home -->
      <div class="text-center mt-8">
        <RouterLink
          to="/"
          class="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          <p class="px-3 py-2">← Back to Home</p>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
// No additional logic needed for this static page
</script>
