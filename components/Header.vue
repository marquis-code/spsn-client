<template>
  <nav 
    :class="[
      'fixed top-0 left-0 right-0 z-[100] transition-all duration-500 py-4',
      isScrolled ? 'glass py-2 shadow-xl shadow-slate-900/5' : 'bg-transparent'
    ]"
  >
    <div class="container mx-auto px-6 flex justify-between items-center">
      <NuxtLink to="/" class="flex items-center gap-4 group">
        <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2 shadow-lg group-hover:scale-110 transition-transform duration-500 border border-slate-100">
           <img src="@/assets/images/logo.jpeg" alt="SCPSN Logo" class="object-contain" />
        </div>
      </NuxtLink>

      <div class="hidden xl:flex items-center gap-8">
        <NuxtLink 
          v-for="link in navLinks" 
          :key="link.to" 
          :to="link.to"
          :class="[
            'text-[10px] font-black uppercase tracking-widest transition-all duration-300 relative group py-2',
            isScrolled ? 'text-brand-dark' : 'text-brand-dark xl:text-white drop-shadow-sm'
          ]"
          active-class="!text-brand-accent scale-110"
        >
          {{ link.label }}
          <span :class="['absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full', isScrolled ? 'opacity-100' : 'opacity-80']"></span>
        </NuxtLink>
      </div>

      <div class="flex items-center gap-4">
        <NuxtLink to="/appointments" :class="['btn-premium px-6 py-2.5 text-[10px] hidden sm:flex !bg-none border-2', isScrolled ? 'border-brand-dark !text-brand-dark hover:!bg-brand-dark hover:!text-white' : 'border-white !text-white hover:!bg-white hover:!text-brand-dark']">
          Book Appointment
        </NuxtLink>
        <NuxtLink to="/membership" class="btn-premium px-6 py-2.5 text-[10px] hidden sm:flex">
          Member Login
        </NuxtLink>
        <button class="xl:hidden p-2 rounded-xl glass border border-white/20" @click="mobileMenu = !mobileMenu">
           <LucideMenu :class="isScrolled ? 'text-brand-dark' : 'text-brand-dark md:text-white'" :size="20" />
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { LucideMenu } from 'lucide-vue-next'

const isScrolled = ref(false)
const mobileMenu = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Scientific Board', to: '/about' },
  { label: 'Conferences', to: '/conferences' },
  { label: 'Abstracts', to: '/abstracts' },
  { label: 'Payments', to: '/payment' },
  { label: 'Membership', to: '/membership' },
  { label: 'Contact', to: '/contact' },
]
</script>
