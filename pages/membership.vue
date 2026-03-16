<template>
  <div class="py-20 bg-slate-50 min-h-[calc(100vh-400px)]">
    <div class="container mx-auto px-4 max-w-4xl">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-accent uppercase tracking-wider mb-4">Membership Portal</h2>
        <p class="text-gray-500">Join the Society for Cellular Pathology Scientists of Nigeria</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <!-- Benefits Card -->
        <div class="admin-card bg-primary text-white p-10 h-full flex flex-col justify-center">
          <h3 class="text-2xl font-bold mb-6">Why Join SCPSN?</h3>
          <ul class="space-y-4">
            <li v-for="benefit in benefits" :key="benefit" class="flex gap-3">
              <LucideCheckCircle :size="20" class="text-white flex-shrink-0" />
              <span>{{ benefit }}</span>
            </li>
          </ul>
           <div class="mt-10 p-4 bg-white/10 rounded-lg border border-white/20">
            <p class="text-sm italic">"Join a network of over 500 professionals across Nigeria and beyond."</p>
          </div>
        </div>

        <!-- Registration/Login Tabs -->
        <div class="bg-white rounded-2xl shadow-premium p-8 border border-gray-100">
          <div class="flex gap-4 mb-8 border-b pb-4">
            <button 
              @click="tab = 'login'" 
              :class="['flex-grow py-2 text-sm font-bold transition-all', tab === 'login' ? 'text-primary border-b-2 border-primary' : 'text-gray-400']"
            >
              LOGIN
            </button>
            <button 
              @click="tab = 'register'" 
              :class="['flex-grow py-2 text-sm font-bold transition-all', tab === 'register' ? 'text-primary border-b-2 border-primary' : 'text-gray-400']"
            >
              REGISTER
            </button>
          </div>

          <!-- Login Form -->
          <div v-if="tab === 'login'" class="space-y-6">
            <div>
              <label class="block text-xs font-bold text-accent uppercase mb-2">Email Address</label>
              <input v-model="loginForm.email" type="email" class="w-full px-4 py-3 bg-slate-50 border rounded-xl focus:ring-1 focus:ring-primary outline-none" placeholder="Enter your email" />
            </div>
            <div>
              <label class="block text-xs font-bold text-accent uppercase mb-2">Password</label>
              <input v-model="loginForm.password" type="password" class="w-full px-4 py-3 bg-slate-50 border rounded-xl focus:ring-1 focus:ring-primary outline-none" placeholder="••••••••" />
            </div>
            <button @click="handleLogin" :disabled="loading" class="btn-primary w-full py-3 font-bold flex justify-center items-center gap-2">
              <span v-if="loading">Signing In...</span>
              <span v-else>Sign In</span>
            </button>
            <div class="text-center">
              <a href="#" class="text-xs text-primary font-bold hover:underline">Forgot Password?</a>
            </div>
          </div>

          <!-- Register Form -->
          <div v-else class="space-y-4">
             <div>
              <label class="block text-xs font-bold text-accent uppercase mb-1">Full Name</label>
              <input v-model="registerForm.fullName" type="text" class="w-full px-4 py-2 bg-slate-50 border rounded-lg outline-none focus:ring-1 focus:ring-primary" placeholder="John Doe" />
            </div>
            <div>
              <label class="block text-xs font-bold text-accent uppercase mb-1">Email</label>
              <input v-model="registerForm.email" type="email" class="w-full px-4 py-2 bg-slate-50 border rounded-lg outline-none focus:ring-1 focus:ring-primary" placeholder="john@example.com" />
            </div>
             <div>
              <label class="block text-xs font-bold text-accent uppercase mb-1">Role</label>
              <select v-model="registerForm.role" class="w-full px-4 py-2 bg-slate-50 border rounded-lg outline-none focus:ring-1 focus:ring-primary">
                <option>Regular Member</option>
                <option>Fellow</option>
                <option>Student</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-bold text-accent uppercase mb-1">Organization</label>
              <input v-model="registerForm.organization" type="text" class="w-full px-4 py-2 bg-slate-50 border rounded-lg outline-none focus:ring-1 focus:ring-primary" placeholder="University of Abuja" />
            </div>
            <button class="btn-primary w-full py-3 font-bold mt-4">Create Account</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
  'Access to exclusive pathology research',
  'Discounted conference registrations',
  'Networking with industry experts',
  'Professional development certifications',
  'Quarterly association newsletters',
]
</script>
