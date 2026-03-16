<template>
  <div class="min-h-screen bg-slate-50">
    <!-- Hero Banner -->
    <section class="bg-brand-blue py-20 text-white text-center relative overflow-hidden">
        <div class="container mx-auto px-6 relative z-10">
            <h1 class="text-5xl font-bold mb-6 italic underline decoration-primary decoration-8 uppercase tracking-widest">Connect With Us</h1>
            <p class="text-xl opacity-90 max-w-2xl mx-auto font-semibold">Get in touch for consultations, institutional partnerships, or general inquiries.</p>
        </div>
        <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
    </section>

    <!-- Content -->
    <section class="py-20 -mt-10">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <!-- Address -->
          <div class="bg-white p-10 rounded-2xl shadow-premium border text-center group hover:border-primary transition-all">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6 group-hover:scale-110 transition-transform">
              <LucideMapPin :size="28" />
            </div>
            <h4 class="font-bold text-accent mb-4">Our Address</h4>
            <p class="text-sm text-gray-500 leading-relaxed">
              Chemical Laboratory, National Hospital Abuja, Nigeria
            </p>
          </div>

          <!-- Email -->
          <div class="bg-white p-10 rounded-2xl shadow-premium border text-center group hover:border-primary transition-all">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6 group-hover:scale-110 transition-transform">
              <LucideMail :size="28" />
            </div>
            <h4 class="font-bold text-accent mb-4">Email Us</h4>
            <p class="text-sm text-gray-500">info@scpsn.org.ng</p>
            <p class="text-sm text-gray-500">admin@scpsn.org.ng</p>
          </div>

          <!-- Call -->
          <div class="bg-white p-10 rounded-2xl shadow-premium border text-center group hover:border-primary transition-all">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6 group-hover:scale-110 transition-transform">
              <LucidePhone :size="28" />
            </div>
            <h4 class="font-bold text-accent mb-4">Call Us</h4>
            <p class="text-sm text-gray-500">+234 901 437 7191</p>
            <p class="text-sm text-gray-500">+234 809 371 6175</p>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
               <h3 class="text-2xl font-bold text-accent uppercase tracking-widest mb-4">Make an Appointment</h3>
               <div class="w-16 h-1 bg-primary mb-8"></div>
               <p class="text-gray-500 mb-10 leading-relaxed">
                 Schedule a meeting or consultation with our executive team. Please fill out the form and we will get back to you within 24 hours.
               </p>
               
               <div class="bg-slate-50 p-8 rounded-2xl border border-dashed border-gray-300">
                 <h5 class="font-bold text-sm mb-4 text-accent">Office Hours</h5>
                 <ul class="space-y-4">
                   <li class="flex justify-between text-sm">
                     <span class="text-gray-500">Monday - Friday</span>
                     <span class="font-bold text-accent">08:00 - 17:00</span>
                   </li>
                   <li class="flex justify-between text-sm">
                     <span class="text-gray-500">Saturday</span>
                     <span class="font-bold text-accent">10:00 - 14:00</span>
                   </li>
                   <li class="flex justify-between text-sm">
                     <span class="text-gray-500">Sunday</span>
                     <span class="text-red-500 font-bold">Closed</span>
                   </li>
                 </ul>
               </div>
            </div>

            <div class="bg-white p-10 rounded-3xl shadow-premium border border-gray-100 relative">
              <div v-if="success" class="absolute inset-0 bg-white/95 rounded-3xl flex flex-col items-center justify-center z-20 text-center p-6 animate-in fade-in zoom-in duration-300">
                <div class="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <LucideCheckCircle :size="32" />
                </div>
                <h3 class="text-2xl font-bold text-accent mb-2">Success!</h3>
                <p class="text-gray-500 font-semibold mb-6">Your request has been received. We will contact you shortly.</p>
                <button @click="success = false" class="btn-primary px-8">New Request</button>
              </div>

              <form @submit.prevent="submitAppointment" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="space-y-2">
                    <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                    <input v-model="appointment.fullName" type="text" required class="w-full px-4 py-3 bg-slate-50 border rounded-xl outline-none focus:ring-1 focus:ring-primary font-semibold" placeholder="Dr. John Doe" />
                  </div>
                  <div class="space-y-2">
                    <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email</label>
                    <input v-model="appointment.email" type="email" required class="w-full px-4 py-3 bg-slate-50 border rounded-xl outline-none focus:ring-1 focus:ring-primary font-semibold" placeholder="john@example.com" />
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="space-y-2">
                    <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">Preferred Date</label>
                    <input v-model="appointment.date" type="date" required class="w-full px-4 py-3 bg-slate-50 border rounded-xl outline-none focus:ring-1 focus:ring-primary font-semibold" />
                  </div>
                  <div class="space-y-2">
                    <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">Purpose</label>
                    <select v-model="appointment.purpose" required class="w-full px-4 py-3 bg-slate-50 border rounded-xl outline-none focus:ring-1 focus:ring-primary font-semibold">
                      <option value="" disabled>Select a purpose</option>
                      <option>Membership Inquiry</option>
                      <option>Conference Support</option>
                      <option>Research Collaboration</option>
                      <option>General Support</option>
                    </select>
                  </div>
                </div>

                <div class="space-y-2">
                  <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">Message/Notes</label>
                  <textarea v-model="appointment.message" rows="4" class="w-full px-4 py-3 bg-slate-50 border rounded-xl outline-none focus:ring-1 focus:ring-primary font-semibold" placeholder="Type your message..."></textarea>
                </div>

                <button type="submit" :disabled="loading" class="btn-primary w-full py-4 font-bold shadow-lg shadow-primary/30 flex items-center justify-center gap-2">
                   <span v-if="loading" class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                   {{ loading ? 'PROCESSING...' : 'BOOK APPOINTMENT' }}
                </button>
              </form>
            </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Card -->
    <section class="py-20 bg-slate-50">
      <div class="container mx-auto px-6">
        <div class="bg-brand-blue rounded-3xl p-12 text-white relative overflow-hidden">
           <div class="absolute -right-20 -top-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
           <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <div>
               <h3 class="text-3xl font-bold mb-4">Stay updated with our newsletter</h3>
               <p class="text-gray-300">Get the latest news, research and conference updates directly in your inbox.</p>
             </div>
             <div class="flex flex-col sm:flex-row gap-4">
               <input type="email" placeholder="Your email address" class="flex-grow px-6 py-4 bg-white/10 border-none rounded-xl outline-none focus:ring-1 focus:ring-primary" />
               <button class="btn-primary py-4 px-10 font-bold whitespace-nowrap">SIGN UP</button>
             </div>
           </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { LucideMapPin, LucideMail, LucidePhone, LucideCheckCircle } from 'lucide-vue-next'
import { useCreateAppointment } from '@/composables/modules/appointments/useCreateAppointment'

const { loading, success, appointment, submitAppointment } = useCreateAppointment()
</script>
