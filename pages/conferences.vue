<template>
  <div class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-accent uppercase tracking-widest mb-4">Conferences & Events</h2>
        <p class="text-gray-500 max-w-2xl mx-auto">Stay updated with our annual scientific workshops, international congresses, and research seminars.</p>
        <div class="w-20 h-1 bg-primary mx-auto mt-6"></div>
      </div>

      <!-- Featured Conference -->
      <div class="mb-20">
        <div class="bg-accent-dark rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[450px]">
          <div class="lg:w-1/2 relative">
            <img src="https://scpsn.org.ng/wp-content/uploads/2021/10/banner.jpg" class="w-full h-full object-cover opacity-80" alt="Featured Conference" />
            <div class="absolute inset-0 bg-gradient-to-t from-accent-dark via-transparent to-transparent"></div>
          </div>
          <div class="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center text-white">
            <div class="inline-block bg-primary px-4 py-1 rounded-full text-xs font-bold mb-6 tracking-widest uppercase">Upcoming Event</div>
            <h3 class="text-3xl font-bold mb-6 leading-tight">THE 2ND INTERNATIONAL CONGRESS 2026</h3>
            <p class="text-gray-300 mb-8 leading-relaxed">
              Theme: Strengthening Laboratory Capacity in Africa towards the Prevention and Diagnosis of Lung Cancer. Join us for 4 days of intensive research sharing and networking.
            </p>
            <div class="grid grid-cols-2 gap-6 mb-10">
               <div>
                 <p class="text-xs text-primary font-bold uppercase mb-1">Date</p>
                 <p class="text-lg font-semibold italic">27th - 30th Sept, 2026</p>
               </div>
               <div>
                 <p class="text-xs text-primary font-bold uppercase mb-1">Location</p>
                 <p class="text-lg font-semibold italic">Abuja, Nigeria</p>
               </div>
            </div>
            <div class="flex gap-4">
              <button class="btn-primary px-8">Register Now</button>
              <NuxtLink to="/abstract" class="btn-outline border-white text-white hover:bg-white hover:text-accent px-8">Submit Abstract</NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Past Conferences -->
      <h3 class="text-xl font-bold text-accent mb-8 uppercase tracking-widest border-l-4 border-primary pl-4">Recent Events</h3>
      <div v-if="loading" class="flex justify-center py-10">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-primary"></div>
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
        <div v-for="conference in conferences" :key="conference._id" class="group relative rounded-2xl overflow-hidden aspect-[4/3]">
           <img :src="conference.image || 'https://scpsn.org.ng/wp-content/uploads/2021/10/banner.jpg'" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" :alt="conference.title" />
           <div class="absolute inset-0 bg-accent/60 flex flex-col justify-end p-6">
              <p class="text-[10px] font-bold text-primary-light uppercase mb-2">{{ conference.date }}</p>
              <h4 class="font-bold">{{ conference.title }}</h4>
           </div>
        </div>
        <!-- Fallback if no conferences -->
        <div v-if="conferences.length === 0" class="col-span-full text-center py-10 text-gray-400">
          No conferences found at the moment.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useGetConferences } from '@/composables/modules/conferences/useGetConferences'
import { onMounted } from 'vue'

const { loading, conferences, getConferences } = useGetConferences()

onMounted(() => {
  getConferences()
})
</script>
