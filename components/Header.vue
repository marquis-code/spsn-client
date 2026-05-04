<template>
  <header
    class="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
    :class="[
      (isScrolled || !isHomePage) ? 'py-4' : 'py-6',
      isMobileMenuOpen ? 'h-screen bg-brand-dark lg:h-auto' : ''
    ]"
  >
    <!-- Navbar Container -->
    <div class="container mx-auto px-4 sm:px-6">
      <nav 
        :class="[
          'relative w-full transition-all duration-700 rounded-2xl flex items-center justify-between px-4 sm:px-6 py-2.5',
          (isScrolled || !isHomePage) ? 'glass-premium shadow-2xl' : 'bg-transparent border-transparent'
        ]"
      >
        <!-- Logo Section -->
        <NuxtLink to="/" class="flex items-center gap-3 relative z-[110]" @click="isMobileMenuOpen = false">
          <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center p-1 shadow-lg hover:rotate-[360deg] transition-transform duration-1000 border border-slate-100 overflow-hidden">
            <img src="@/assets/images/logo.jpeg" alt="SCPSN Logo" class="w-full h-full object-contain" />
          </div>
          <div class="flex flex-col">
             <span class="text-[17px] font-black tracking-tight leading-none text-white">SCPSN</span>
             <span class="text-[9px] font-bold tracking-[0.2em] text-brand-cyan uppercase">Nigeria</span>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-1">
          <div v-for="link in navigation" :key="link.label" class="relative group">
            <!-- Simple Link -->
            <NuxtLink 
              v-if="!link.children"
              :to="link.to"
              :class="[
                'px-4 py-2 text-[12px] font-bold uppercase tracking-widest transition-all duration-300 rounded-xl relative text-white/90 hover:text-white hover:bg-white/5 active:scale-95 flex items-center gap-1',
              ]"
              active-class="!text-brand-cyan"
            >
              {{ link.label }}
            </NuxtLink>

            <!-- Dropdown Link -->
            <button 
              v-else
              class="px-4 py-2 text-[12px] font-bold uppercase tracking-widest transition-all duration-300 rounded-xl relative text-white/90 hover:text-white hover:bg-white/5 active:scale-95 flex items-center gap-1.5 group/btn"
            >
              {{ link.label }}
              <LucideChevronDown :size="14" class="group-hover/btn:rotate-180 transition-transform duration-300" />
              
              <!-- Dropdown Menu -->
              <div class="absolute top-full left-0 mt-2 w-56 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                <div class="glass-premium rounded-2xl p-2 shadow-2xl border border-white/10 overflow-hidden">
                  <NuxtLink 
                    v-for="child in link.children" 
                    :key="child.to" 
                    :to="child.to"
                    class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors group/item"
                  >
                    <div class="w-8 h-8 rounded-lg bg-brand-cyan/10 flex items-center justify-center text-brand-cyan group-hover/item:bg-brand-cyan group-hover/item:text-brand-dark transition-colors">
                      <component :is="child.icon" :size="16" v-if="child.icon" />
                      <span v-else class="text-[10px] font-black">{{ child.label.charAt(0) }}</span>
                    </div>
                    <div class="flex flex-col group/text">
                      <span class="text-[10px] font-black text-white uppercase tracking-widest group-hover/item:text-brand-dark transition-colors">{{ child.label }}</span>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </button>
          </div>
        </div>

        <!-- Desktop CTA -->
        <div class="hidden lg:flex items-center gap-3">
          <NuxtLink to="/appointments" class="btn-cyan-sm group relative overflow-hidden">
             <span class="relative z-10 flex items-center gap-2">
              <LucideCalendar :size="14" />
              Bookings
            </span>
          </NuxtLink>
          <NuxtLink to="http://localhost:3003" class="btn-premium">
            Become a Member
          </NuxtLink>
        </div>

        <!-- Mobile Menu Controls -->
        <div class="flex items-center gap-3 lg:hidden relative z-[110]">
          <button 
            @click="isMobileMenuOpen = !isMobileMenuOpen" 
            class="w-11 h-11 rounded-xl flex flex-col items-center justify-center gap-1.5 transition-all duration-500 glass-menu border-white/20"
          >
            <div :class="['w-5 h-0.5 rounded-full bg-white transition-all duration-500', isMobileMenuOpen ? 'rotate-45 translate-y-[8px]' : '']"></div>
            <div :class="['w-3 h-0.5 rounded-full bg-white transition-all duration-300', isMobileMenuOpen ? 'opacity-0 -translate-x-2' : '']"></div>
            <div :class="['w-5 h-0.5 rounded-full bg-white transition-all duration-500', isMobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : '']"></div>
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
      <div v-if="isMobileMenuOpen" class="lg:hidden fixed inset-0 bg-brand-dark z-[105] flex flex-col pt-28 pb-10 px-6 overflow-y-auto">
        <!-- Background Decor -->
        <div class="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-cyan/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div class="flex flex-col gap-1 relative z-10">
          <div v-for="(link, i) in navigation" :key="link.label">
            <!-- Mobile Parent Link -->
            <div v-if="link.children" class="py-2">
              <button 
                @click="toggleMobileSubmenu(link.label)"
                class="w-full flex items-center justify-between text-2xl font-black text-white tracking-tighter uppercase py-2"
              >
                <div class="flex items-center gap-4">
                  <span class="text-[10px] font-black text-brand-cyan/40 tracking-[0.3em] font-mono">0{{ i + 1 }}</span>
                  <span>{{ link.label }}</span>
                </div>
                <LucideChevronDown :size="24" :class="['transition-transform duration-300 text-brand-cyan', activeMobileSubmenu === link.label ? 'rotate-180' : '']" />
              </button>
              
              <!-- Mobile Submenu -->
              <div 
                v-show="activeMobileSubmenu === link.label" 
                class="pl-4 mt-2 mb-4 space-y-4 border-l-2 border-brand-cyan/20 ml-2 overflow-hidden"
              >
                <NuxtLink 
                  v-for="(child, j) in link.children" 
                  :key="child.to" 
                  :to="child.to"
                  @click="isMobileMenuOpen = false"
                  class="block py-1"
                >
                  <div class="flex gap-4">
                    <span class="text-[10px] font-bold text-brand-cyan/40 font-mono mt-1">{{ i + 1 }}.{{ j + 1 }}</span>
                    <div class="flex flex-col">
                      <span class="text-lg font-bold text-brand-cyan uppercase tracking-tight">{{ child.label }}</span>
                      <span class="text-[10px] text-white/50 uppercase tracking-widest">{{ child.description }}</span>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>

            <!-- Mobile Simple Link -->
            <NuxtLink 
              v-else 
              :to="link.to"
              @click="isMobileMenuOpen = false"
              class="block py-4 text-3xl font-black text-white tracking-tighter uppercase group"
            >
              <div class="flex items-center gap-4">
                <span class="text-[10px] font-black text-brand-cyan/40 tracking-[0.3em] font-mono">0{{ i + 1 }}</span>
                <span class="group-hover:translate-x-3 transition-transform duration-500">{{ link.label }}</span>
              </div>
            </NuxtLink>
          </div>
        </div>

        <div class="mt-auto pt-10 relative z-10">
          <div class="grid grid-cols-2 gap-3 mb-10">
            <NuxtLink to="/appointments" @click="isMobileMenuOpen = false" class="btn-cyan !w-full !py-4 !text-[10px] flex items-center justify-center gap-2">
              <LucideCalendar :size="14" />
              Bookings
            </NuxtLink>
            <NuxtLink to="http://localhost:3003" @click="isMobileMenuOpen = false" class="btn-cyan !w-full !py-4 !text-[10px] flex items-center justify-center gap-2">
              <LucideUser :size="14" />
              Become a Member
            </NuxtLink>
          </div>
          
          <div class="flex flex-wrap gap-6 justify-between items-center text-white/40">
             <div class="space-y-1">
                <p class="text-[8px] font-black uppercase tracking-[0.3em]">Official Inquiries</p>
                <p class="text-[11px] font-bold text-white uppercase tracking-widest">info@scpsn.org.ng</p>
             </div>
             <div class="flex gap-3">
                <a href="#" class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-cyan/20 hover:text-brand-cyan transition-all">
                   <LucideArrowUpRight :size="18" />
                </a>
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
  LucideUser,
  LucideChevronDown,
  LucideBookOpen,
  LucideUsers,
  LucideCreditCard,
  LucideInfo
} from 'lucide-vue-next'
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'

const route = useRoute()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeMobileSubmenu = ref(null)

const isHomePage = computed(() => route.path === '/')

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleMobileSubmenu = (label) => {
  if (activeMobileSubmenu.value === label) {
    activeMobileSubmenu.value = null
  } else {
    activeMobileSubmenu.value = label
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const navigation = [
  { label: 'Home', to: '/' },
  { 
    label: 'Science', 
    children: [
      { 
        label: 'Board', 
        to: '/about', 
        icon: LucideUsers,
        description: 'Our scientific excellence'
      },
      { 
        label: 'Abstracts', 
        to: '/abstracts', 
        icon: LucideBookOpen,
        description: 'Research and publications'
      },
    ]
  },
  { label: 'Events', to: '/conferences' },
  { label: 'Contact', to: '/contact' },
]

// Watch route changes to close mobile menu
watch(() => route.path, () => {
  isMobileMenuOpen.value = false
  activeMobileSubmenu.value = null
})
</script>

<style scoped>
.glass-premium {
  @apply bg-brand-dark/90 backdrop-blur-2xl border border-white/10;
}

.glass-menu {
  @apply bg-white/10 backdrop-blur-md border border-white/10;
}

.btn-cyan {
  @apply btn-premium;
}

.btn-cyan-sm {
  @apply btn-premium !px-4 !py-2 !text-[9px];
}

.btn-glass {
  @apply btn-outline-premium !text-white !border-white/20;
}

.btn-glass-sm {
  @apply btn-outline-premium !text-white !border-white/20 !px-4 !py-2 !text-[9px];
}

/* Hide scrollbar for mobile menu */
.overflow-y-auto::-webkit-scrollbar {
  display: none;
}
.overflow-y-auto {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
