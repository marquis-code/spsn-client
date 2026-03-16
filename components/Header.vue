<template>
  <nav class="bg-white border-b sticky top-0 z-50">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <NuxtLink to="/" class="flex items-center gap-3">
        <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden border border-gray-100 p-1">
           <img src="https://scpsn.org.ng/wp-content/uploads/2021/10/scpsn-logo.png" alt="SCPSN Logo" class="object-contain" />
        </div>
        <div class="hidden sm:block">
          <h1 class="text-xs font-bold text-accent leading-tight uppercase">Society for Cellular Pathology</h1>
          <h2 class="text-[10px] text-primary font-semibold tracking-wider uppercase">Scientists of Nigeria (SCPSN)</h2>
        </div>
      </NuxtLink>

      <div class="hidden lg:flex items-center gap-8">
        <NuxtLink 
          v-for="link in navLinks" 
          :key="link.to" 
          :to="link.to"
          class="text-sm font-semibold text-accent-light hover:text-primary transition-colors duration-300"
          active-class="text-primary border-b-2 border-primary"
        >
          {{ link.label }}
        </NuxtLink>
      </div>

      <div class="flex items-center gap-3">
        <NuxtLink to="/appointments" class="btn-primary py-1.5 px-4 text-sm font-bold">
          Make an Appointment
        </NuxtLink>
        <button class="lg:hidden text-accent p-2">
          <LucideMenu />
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
const navLinks = [
  { label: 'HOME', to: '/' },
  { label: 'ABOUT', to: '/about' },
  { label: 'CONFERENCES', to: '/conferences' },
  { label: 'ABSTRACT', to: '/abstract' },
  { label: 'PAYMENT PORTAL', to: '/payment' },
  { label: 'MEMBERSHIP', to: '/membership' },
  { label: 'CONTACT US', to: '/contact' },
]
</script>
