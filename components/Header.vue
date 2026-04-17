<template>
  <header
    class="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
    :class="[
      (isScrolled || !isHomePage) ? 'py-3' : 'py-6',
      isMobileMenuOpen ? 'h-screen bg-brand-dark xl:h-auto' : ''
    ]"
  >
    <!-- Navbar Container -->
    <div class="container mx-auto px-6">
      <nav 
        :class="[
          'relative w-full transition-all duration-700 rounded-[1.5rem] flex items-center justify-between px-6 py-3',
          (isScrolled || !isHomePage) ? 'glass-premium shadow-2xl' : 'bg-transparent border-transparent'
        ]"
      >
        <!-- Logo Section -->
        <NuxtLink to="/" class="flex items-center gap-3 relative z-[110]" @click="isMobileMenuOpen = false">
          <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center p-1.5 shadow-lg hover:rotate-[360deg] transition-transform duration-1000 border border-slate-100 overflow-hidden">
            <img src="@/assets/images/logo.jpeg" alt="SCPSN Logo" class="w-full h-full object-contain" />
          </div>
          <div class="hidden sm:flex flex-col">
             <span :class="['text-[16px] font-black tracking-tighter leading-none transition-colors duration-500', (isScrolled || !isHomePage || isMobileMenuOpen) ? 'text-white' : 'text-white']">SCPSN</span>
             <span :class="['text-[8px] font-bold tracking-[0.3em] transition-colors duration-500 uppercase', (isScrolled || !isHomePage || isMobileMenuOpen) ? 'text-brand-cyan' : 'text-brand-cyan']">Nigeria</span>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden xl:flex items-center gap-1">
          <NuxtLink 
            v-for="link in navLinks" 
            :key="link.to" 
            :to="link.to"
            :class="[
              'px-5 py-2.5 text-[10px] font-black uppercase tracking-widest transition-all duration-300 rounded-xl relative group text-white hover:bg-white/5 active:scale-95',
            ]"
            active-class="!bg-brand-cyan !text-brand-dark shadow-lg shadow-cyan-500/20"
          >
            {{ link.label }}
            <span class="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-cyan rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </NuxtLink>
        </div>

        <!-- Desktop CTA -->
        <div class="hidden xl:flex items-center gap-2">
          <NuxtLink to="/appointments" class="btn-cyan !px-6 !py-2.5 !text-[9px] group relative overflow-hidden">
             <div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
             <span class="relative z-10 flex items-center gap-2">
              <LucideCalendar :size="14" />
              Bookings
            </span>
          </NuxtLink>
          <NuxtLink to="/membership" class="btn-glass !px-6 !py-2.5 !text-[9px]">
            Portal
          </NuxtLink>
        </div>

        <!-- Mobile Menu Controls -->
        <div class="flex items-center gap-3 xl:hidden relative z-[110]">
          <button 
            @click="isMobileMenuOpen = !isMobileMenuOpen" 
            class="w-12 h-12 rounded-2xl flex flex-col items-center justify-center gap-1.5 transition-all duration-500 glass-menu border-white/20"
          >
            <div :class="['w-6 h-0.5 rounded-full bg-white transition-all duration-500', isMobileMenuOpen ? 'rotate-45 translate-y-[8px]' : '']"></div>
            <div :class="['w-4 h-0.5 rounded-full bg-white transition-all duration-300', isMobileMenuOpen ? 'opacity-0 -translate-x-2' : '']"></div>
            <div :class="['w-6 h-0.5 rounded-full bg-white transition-all duration-500', isMobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : '']"></div>
          </button>
        </div>
      </nav>
    </div>

    <!-- Mobile Fullscreen Menu -->
    <transition
      enter-active-class="transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
      enter-from-class="opacity-0 translate-y-[-100%]"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-500 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-[-100%]"
    >
      <div v-if="isMobileMenuOpen" class="xl:hidden fixed inset-0 bg-brand-dark z-[105] flex flex-col pt-32 pb-12 px-8 overflow-y-auto">
        <!-- Background Decor -->
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div class="space-y-2 relative z-10">
          <NuxtLink 
            v-for="(link, i) in navLinks" 
            :key="link.to"
            :to="link.to"
            @click="isMobileMenuOpen = false"
            class="block py-4 group"
          >
            <div class="flex items-center gap-6">
              <span class="text-xs font-black text-brand-cyan/40 tracking-[0.3em] font-mono group-hover:text-brand-cyan transition-colors">0{{ i + 1 }}</span>
              <span class="text-4xl font-black text-white tracking-tighter uppercase group-hover:translate-x-4 transition-transform duration-500">{{ link.label }}</span>
            </div>
          </NuxtLink>
        </div>

        <div class="mt-auto space-y-10 pt-20 relative z-10">
          <div class="grid grid-cols-1 gap-4">
            <NuxtLink to="/appointments" @click="isMobileMenuOpen = false" class="btn-cyan !w-full !py-5 !text-xs">
              Book Appointment
            </NuxtLink>
            <NuxtLink to="/membership" @click="isMobileMenuOpen = false" class="btn-glass !w-full !py-5 !text-xs">
              Membership Portal
            </NuxtLink>
          </div>
          
          <div class="flex flex-wrap gap-8 justify-between items-center text-white/40">
             <div class="space-y-1">
                <p class="text-[8px] font-black uppercase tracking-[0.4em]">Official Inquiries</p>
                <p class="text-[10px] font-bold text-white uppercase tracking-widest">info@scpsn.org.ng</p>
             </div>
             <div class="flex gap-4">
                <div v-for="i in 3" :key="i" class="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                   <LucideArrowUpRight :size="14" />
                </div>
             </div>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { 
  LucideCalendar, 
  LucideArrowUpRight, 
  LucidePhone, 
  LucideMail,
  LucideUser 
} from 'lucide-vue-next'
import { ref, computed, onMounted, onUnmounted } from 'vue'

const route = useRoute()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const isHomePage = computed(() => route.path === '/')

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
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
  { label: 'Scientific Abstracts', to: '/abstracts' },
  { label: 'Payments', to: '/payment' },
  { label: 'Membership', to: '/membership' },
  { label: 'Contact', to: '/contact' },
]
</script>

<style scoped>
.glass-premium {
  @apply bg-brand-dark/90 backdrop-blur-2xl border border-white/10;
}

.glass-menu {
  @apply bg-white/10 backdrop-blur-md border border-white/10;
}

.btn-cyan {
  @apply bg-brand-cyan text-brand-dark font-black uppercase tracking-widest px-8 py-3 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-cyan-500/20;
}

.btn-glass {
  @apply bg-white/5 backdrop-blur-md border border-white/10 text-white font-black uppercase tracking-widest px-8 py-3 rounded-xl transition-all hover:bg-white/10 active:scale-95;
}
</style>


