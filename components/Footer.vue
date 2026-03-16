<template>
  <footer class="bg-brand-blue text-white pt-16 pb-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <!-- Brand Section -->
        <div>
          <h3 class="text-xl font-bold mb-6 text-primary">SCPSN</h3>
          <p class="text-gray-300 text-sm leading-relaxed mb-6">
            Society for Cellular Pathology Scientists of Nigeria (SCPSN). Advancing the frontiers of cellular diagnosis and therapy.
          </p>
          <div class="flex gap-4">
            <a href="#" class="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary transition-colors">
              <LucideFacebook :size="18" />
            </a>
            <a href="#" class="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary transition-colors">
              <LucideTwitter :size="18" />
            </a>
            <a href="#" class="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary transition-colors">
              <LucideLinkedin :size="18" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-bold mb-6 border-b border-primary/30 pb-2">Useful Links</h3>
          <ul class="space-y-4 text-sm text-gray-300">
            <li><NuxtLink to="/" class="hover:text-primary transition-colors">Home</NuxtLink></li>
            <li><NuxtLink to="/about" class="hover:text-primary transition-colors">About Us</NuxtLink></li>
            <li><NuxtLink to="/membership" class="hover:text-primary transition-colors">Membership</NuxtLink></li>
            <li><NuxtLink to="/conferences" class="hover:text-primary transition-colors">Conferences</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-bold mb-6 border-b border-primary/30 pb-2">Contact Us</h3>
          <ul class="space-y-4 text-sm text-gray-300">
            <li class="flex gap-3">
              <LucideMapPin class="text-primary" :size="20" />
              <span>Chemical Laboratory, National Hospital Abuja, Nigeria</span>
            </li>
            <li class="flex gap-3">
              <LucidePhone class="text-primary" :size="20" />
              <span>+234 901 437 7191</span>
            </li>
            <li class="flex gap-3">
              <LucideMail class="text-primary" :size="20" />
              <span>info@scpsn.org.ng</span>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h3 class="text-lg font-bold mb-6 border-b border-primary/30 pb-2">Our Newsletter</h3>
          <p class="text-gray-300 text-sm mb-4">Subscribe to stay updated on association news.</p>
          <div class="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              class="bg-white/10 border-none px-4 py-2 rounded-l-lg focus:ring-1 focus:ring-primary w-full text-white"
            />
            <button class="bg-primary px-4 py-2 rounded-r-lg hover:bg-primary-dark transition-colors">
              <LucideSend :size="18" />
            </button>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
        <p>&copy; {{ new Date().getFullYear() }} Society for Cellular Pathology Scientists of Nigeria. All Rights Reserved.</p>
        <p>Designed with ❤️ by SCPSN Team</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer component
</script>
