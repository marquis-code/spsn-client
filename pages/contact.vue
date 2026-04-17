<template>
  <div class="min-h-screen bg-slate-50 relative overflow-hidden">
    <!-- Background Decor -->
    <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-dark/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

    <!-- Premium Hero Section -->
    <section class="relative pt-40 pb-24 overflow-hidden bg-brand-dark">
      <div class="absolute inset-0 z-0">
         <img src="@/assets/images/hero1.jpg" class="w-full h-full object-cover opacity-20" alt="Laboratory Background" />
         <div class="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>
      </div>
      
      <div class="container mx-auto px-6 relative z-10 text-center space-y-8">
        <span class="inline-block px-5 py-2 glass text-brand-cyan font-black text-xs uppercase tracking-[0.3em] rounded-full">
           Strategic Connectivity
        </span>
        <h1 class="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-6">
           Connect With <span class="text-brand-cyan">SCPSN</span>.
        </h1>
        <p class="text-xl text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed opacity-90">
           Direct engagement for scientific inquiries, institutional partnerships, and specialized laboratory consultations.
        </p>
      </div>
    </section>

    <!-- Interactive Contact Blocks -->
    <section class="py-24 -mt-16">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-24">
          <div v-for="info in contactInfo" :key="info.title" class="interactive-card text-center group">
            <div class="w-20 h-20 bg-brand-cyan/10 rounded-[28px] flex items-center justify-center text-brand-cyan mx-auto mb-8 transition-all duration-500 group-hover:bg-brand-cyan group-hover:text-brand-dark group-hover:scale-110">
              <component :is="info.icon" :size="32" />
            </div>
            <h4 class="text-xl font-black text-brand-dark mb-4 tracking-tighter uppercase">{{ info.title }}</h4>
            <div class="space-y-1">
               <p v-for="line in info.lines" :key="line" class="text-slate-500 font-bold text-sm leading-relaxed">{{ line }}</p>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <!-- Left Info Content -->
            <div class="lg:col-span-5 space-y-12">
               <div class="space-y-6">
                  <h3 class="text-4xl font-black text-brand-dark tracking-tighter">Strategic <br/><span class="text-gradient">Appointments</span>.</h3>
                  <div class="w-20 h-1 bg-brand-cyan rounded-full"></div>
                  <p class="text-lg text-slate-500 font-medium leading-relaxed">
                    Formalize your engagement with our executive scientific board or administrative staff through our priority scheduling system.
                  </p>
               </div>
               
               <div class="glass p-10 rounded-[40px] border border-slate-200 relative overflow-hidden group">
                  <div class="absolute -top-10 -right-10 w-32 h-32 bg-brand-cyan/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                  <h5 class="text-xs font-black text-brand-dark uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
                     <LucideClock :size="16" class="text-brand-cyan" />
                     Operational Hours
                  </h5>
                  <div class="space-y-6 relative z-10">
                    <div v-for="schedule in operatingHours" :key="schedule.days" class="flex justify-between items-center border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                      <span class="text-sm font-bold text-slate-400 uppercase tracking-widest">{{ schedule.days }}</span>
                      <span :class="['text-xs font-black tracking-[0.2em] rounded-full px-4 py-1.5', schedule.status === 'Closed' ? 'bg-red-50 text-red-500' : 'bg-brand-cyan/10 text-brand-dark']">
                        {{ schedule.time }}
                      </span>
                    </div>
                  </div>
               </div>
            </div>

            <!-- Sleek Form Card -->
            <div class="lg:col-span-7 relative">
               <div class="interactive-card p-12 lg:p-16 relative z-10">
                  <div v-if="success" class="absolute inset-0 bg-white/98 flex flex-col items-center justify-center z-20 text-center p-12 animate-in fade-in zoom-in duration-500 rounded-[40px]">
                    <div class="w-24 h-24 bg-brand-cyan/10 text-brand-cyan rounded-3xl flex items-center justify-center mb-8 animate-bounce">
                      <LucideCheckCircle :size="48" />
                    </div>
                    <h3 class="text-3xl font-black text-brand-dark mb-4 tracking-tighter">Request Formalized</h3>
                    <p class="text-slate-500 font-medium max-w-xs mx-auto mb-10 leading-relaxed">Your engagement request has been integrated into our queue. A designated representative will initiate contact shortly.</p>
                    <button @click="success = false" class="btn-premium px-12">New Engagement</button>
                  </div>

                  <form @submit.prevent="submitAppointment" class="space-y-10">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div class="space-y-3">
                        <label class="text-[10px] font-black text-brand-dark uppercase tracking-[0.2em] ml-2">Designation & Name</label>
                        <input v-model="appointment.fullName" type="text" required class="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 text-sm font-bold text-brand-dark outline-none focus:border-brand-cyan transition-all" placeholder="Dr. John Doe, MLS" />
                      </div>
                      <div class="space-y-3">
                        <label class="text-[10px] font-black text-brand-dark uppercase tracking-[0.2em] ml-2">Official Email</label>
                        <input v-model="appointment.email" type="email" required class="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 text-sm font-bold text-brand-dark outline-none focus:border-brand-cyan transition-all" placeholder="john@example.com" />
                      </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div class="space-y-3">
                        <label class="text-[10px] font-black text-brand-dark uppercase tracking-[0.2em] ml-2">Priority Date</label>
                        <div class="relative">
                           <input v-model="appointment.date" type="date" required class="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 text-sm font-bold text-brand-dark outline-none focus:border-brand-cyan transition-all" />
                        </div>
                      </div>
                      <div class="space-y-3">
                        <label class="text-[10px] font-black text-brand-dark uppercase tracking-[0.2em] ml-2">Engagement Intent</label>
                        <div class="relative">
                           <select v-model="appointment.purpose" required class="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 text-sm font-bold text-brand-dark outline-none focus:border-brand-cyan appearance-none cursor-pointer">
                              <option value="" disabled>Select Engagement Type</option>
                              <option>Membership Protocols</option>
                              <option>Conference Sponsorship</option>
                              <option>Scientific Governance</option>
                              <option>Laboratory Validation</option>
                           </select>
                           <div class="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                              <LucideChevronDown :size="18" />
                           </div>
                        </div>
                      </div>
                    </div>

                    <div class="space-y-3">
                      <label class="text-[10px] font-black text-brand-dark uppercase tracking-[0.2em] ml-2">Brief Context</label>
                      <textarea v-model="appointment.message" rows="5" class="w-full bg-slate-50 border border-slate-200 rounded-[32px] py-8 px-8 text-sm font-medium text-slate-600 outline-none focus:border-brand-cyan focus:bg-white transition-all resize-none shadow-inner" placeholder="Provide strategic details..."></textarea>
                    </div>

                    <button type="submit" :disabled="loading" class="btn-premium w-full py-6 text-xs tracking-[0.4em] shadow-2xl shadow-brand-cyan/20">
                       <span v-if="loading" class="flex items-center gap-3">
                          <div class="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                          TRANSMITTING...
                       </span>
                       <span v-else>FORMALIZE APPOINTMENT</span>
                    </button>
                  </form>
               </div>
            </div>
        </div>
      </div>
    </section>

    <!-- Global Reach Section -->
    <section class="py-32 bg-brand-dark relative overflow-hidden">
       <div class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div class="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-brand-cyan rounded-full blur-[180px]"></div>
          <div class="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-brand-accent rounded-full blur-[180px]"></div>
       </div>
       
       <div class="container mx-auto px-6 relative z-10 text-center space-y-12">
          <h3 class="text-4xl md:text-5xl font-black text-white tracking-tighter">Unified Scientific <span class="text-brand-cyan">Communications</span>.</h3>
          <p class="text-slate-400 max-w-xl mx-auto font-medium leading-relaxed">Join our scientific newsletter to receive prioritized updates on conference abstracts and legislative pathology news.</p>
          <div class="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto pt-6">
             <input type="email" placeholder="Official Email Address" class="flex-grow bg-white/5 border border-white/10 rounded-2xl py-5 px-8 text-sm text-white outline-none focus:border-brand-cyan transition-all" />
             <button class="btn-premium px-12 py-5 text-xs">JOIN NETWORK</button>
          </div>
       </div>
    </section>
  </div>
</template>

<script setup>
import { 
  LucideMapPin, 
  LucideMail, 
  LucidePhone, 
  LucideCheckCircle, 
  LucideClock,
  LucideChevronDown,
  LucideMessagesSquare,
  LucideGlobe
} from 'lucide-vue-next'
import { useCreateAppointment } from '@/composables/modules/appointments/useCreateAppointment'

const { loading, success, appointment, submitAppointment } = useCreateAppointment()

const contactInfo = [
  {
    title: 'Physical Site',
    icon: LucideMapPin,
    lines: ['Chemical Laboratory', 'National Hospital Abuja, Nigeria']
  },
  {
    title: 'Digital Portal',
    icon: LucideGlobe,
    lines: ['info@scpsn.org.ng', 'admin@scpsn.org.ng']
  },
  {
    title: 'Direct Line',
    icon: LucidePhone,
    lines: ['+234 901 437 7191', '+234 809 371 6175']
  }
]

const operatingHours = [
  { days: 'Mon — Fri', time: '08:00 — 17:00 (GMT+1)', status: 'Active' },
  { days: 'Saturday', time: '10:00 — 14:00 (GMT+1)', status: 'Limited' },
  { days: 'Sunday', time: 'Closed — Registry Offline', status: 'Closed' }
]
</script>
