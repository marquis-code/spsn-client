<template>
  <div class="min-h-screen bg-slate-50 relative overflow-hidden">
    <!-- Background Decor -->
    <div class="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
    <div class="absolute bottom-1/4 right-0 w-[800px] h-[800px] bg-brand-dark/5 rounded-full blur-[140px] translate-x-1/3 pointer-events-none"></div>

    <div class="container mx-auto px-6 py-32 relative z-10 max-w-5xl">
      <div class="text-center mb-24 space-y-6">
        <span class="inline-block px-5 py-2 glass text-brand-cyan font-black text-xs uppercase tracking-[0.3em] rounded-full">
           Network of Excellence
        </span>
        <h1 class="text-6xl md:text-7xl font-black text-brand-dark tracking-tighter leading-none">
           Membership <span class="text-gradient">Portal</span>.
        </h1>
        <p class="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
           Join the prestigious collective of medical laboratory scientists shaping the future of cellular pathology in Nigeria.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Benefits Section -->
        <div class="glass-dark p-12 lg:p-16 rounded-[40px] shadow-2xl space-y-12 relative overflow-hidden group">
          <div class="absolute -top-24 -left-24 w-64 h-64 bg-brand-cyan/10 rounded-full blur-[100px] group-hover:scale-150 transition-transform duration-1000"></div>
          
          <div class="space-y-4 relative z-10">
             <h3 class="text-4xl font-black text-white tracking-tighter leading-none">Why SCPSN?</h3>
             <p class="text-slate-400 font-medium leading-relaxed">Exclusive advantages for accredited practitioners.</p>
          </div>

          <ul class="space-y-6 relative z-10">
            <li v-for="benefit in benefits" :key="benefit" class="flex gap-5 group items-start">
               <div class="w-8 h-8 rounded-xl bg-brand-cyan/20 flex items-center justify-center text-brand-cyan group-hover:bg-brand-cyan group-hover:text-brand-dark transition-all duration-300 flex-shrink-0">
                  <LucideCheckCircle :size="18" />
               </div>
               <span class="text-slate-300 font-medium leading-relaxed pt-1">{{ benefit }}</span>
            </li>
          </ul>

          <div class="pt-8 relative z-10">
            <div class="p-8 bg-white/5 rounded-[32px] border border-white/10 glass-dark">
               <p class="text-slate-400 text-sm italic leading-relaxed">
                  "Advancing scientific frontiers through collaboration. Join over 500+ elite professionals nationwide."
               </p>
            </div>
          </div>
        </div>

        <!-- Auth Module -->
        <div class="interactive-card p-12 lg:p-16 space-y-10">
          <div class="flex gap-2 p-1.5 bg-slate-100 rounded-2xl">
            <button 
              @click="tab = 'login'" 
              :class="['flex-grow py-4 text-xs font-black uppercase tracking-[0.2em] transition-all rounded-xl', tab === 'login' ? 'bg-white text-brand-dark shadow-sm' : 'text-slate-400 hover:text-brand-dark']"
            >
              Access
            </button>
            <button 
              @click="tab = 'register'" 
              :class="['flex-grow py-4 text-xs font-black uppercase tracking-[0.2em] transition-all rounded-xl', tab === 'register' ? 'bg-white text-brand-dark shadow-sm' : 'text-slate-400 hover:text-brand-dark']"
            >
              Enrollment
            </button>
          </div>

          <!-- Login Form -->
          <div v-if="tab === 'login'" class="space-y-8">
            <div class="space-y-3">
              <label class="text-[10px] font-black text-brand-dark uppercase tracking-[0.2em] ml-2">Email Address</label>
              <input v-model="loginForm.email" type="email" class="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 text-sm font-bold text-brand-dark outline-none focus:border-brand-cyan transition-all" placeholder="Enter your email" />
            </div>
            <div class="space-y-3">
              <label class="text-[10px] font-black text-brand-dark uppercase tracking-[0.2em] ml-2">Secure Password</label>
              <input v-model="loginForm.password" type="password" class="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 text-sm font-bold text-brand-dark outline-none focus:border-brand-cyan transition-all" placeholder="••••••••" />
            </div>
            <button @click="handleLogin" :disabled="loading" class="btn-premium w-full py-5 text-xs tracking-[0.3em]">
              <span v-if="loading">Authenticating...</span>
              <span v-else>Initiate Access</span>
            </button>
            <div class="text-center">
               <button class="text-[10px] font-black text-brand-dark uppercase tracking-[0.2em] hover:text-brand-cyan transition-colors">
                  Recovery Protocols
               </button>
            </div>
          </div>

          <!-- Register Form -->
          <div v-else class="space-y-6">
             <div class="space-y-3">
               <label class="text-[10px] font-black text-brand-dark uppercase tracking-[0.2em] ml-2">Professional Name</label>
               <input v-model="registerForm.fullName" type="text" class="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 text-sm font-bold text-brand-dark outline-none focus:border-brand-cyan transition-all" placeholder="John Doe, MLS" />
             </div>
             <div class="space-y-3">
               <label class="text-[10px] font-black text-brand-dark uppercase tracking-[0.2em] ml-2">Official Email</label>
               <input v-model="registerForm.email" type="email" class="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 text-sm font-bold text-brand-dark outline-none focus:border-brand-cyan transition-all" placeholder="john@example.com" />
             </div>
             <div class="space-y-3">
               <label class="text-[10px] font-black text-brand-dark uppercase tracking-[0.2em] ml-2">Membership Category</label>
               <div class="relative">
                 <select v-model="registerForm.role" class="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 text-sm font-bold text-brand-dark outline-none focus:border-brand-cyan appearance-none cursor-pointer overflow-hidden">
                   <option>Regular Member</option>
                   <option>Fellow Scientist</option>
                   <option>Emeritus Member</option>
                   <option>Student Associate</option>
                 </select>
                 <div class="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <LucideChevronDown :size="18" />
                 </div>
               </div>
             </div>
             <div class="space-y-3">
               <label class="text-[10px] font-black text-brand-dark uppercase tracking-[0.2em] ml-2">Laboratory/Organization</label>
               <input v-model="registerForm.organization" type="text" class="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 text-sm font-bold text-brand-dark outline-none focus:border-brand-cyan transition-all" placeholder="Organization name" />
             </div>
             <button class="btn-premium w-full py-5 text-xs tracking-[0.3em] mt-6">Create Professional Profile</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { 
  LucideCheckCircle, 
  LucideChevronDown 
} from 'lucide-vue-next'
import { useLogin } from '@/composables/modules/auth/useLogin'
import { useRegister } from '@/composables/modules/auth/useRegister'
import { useUser } from '@/composables/modules/auth/user'

const tab = ref('login')
const { loading: loginLoading, login } = useLogin()
const { loading: registerLoading, form: registerForm, register } = useRegister()
const { isLoggedIn, user, logOut } = useUser()

const loginForm = ref({ email: '', password: '' })

const handleLogin = async () => {
  await login(loginForm.value)
}

const handleRegister = async () => {
  await register()
}

const benefits = [
  'Unlimited Scientific Journal Access',
  'Priority Conference Boarding',
  'Exclusive Specialist Networking',
  'Digital Accredited Certifications',
  'Premium Legislative Updates',
]
</script>
