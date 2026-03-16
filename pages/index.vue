<template>
  <div>
    <!-- Hero Slider -->
    <section class="relative h-[500px] overflow-hidden bg-accent-dark">
      <div class="absolute inset-0 z-0">
        <img src="https://scpsn.org.ng/wp-content/uploads/2021/10/banner.jpg" class="w-full h-full object-cover opacity-60" alt="SCPSN Banner" />
      </div>
      
      <div class="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 max-w-4xl leading-tight">
          Who Are <span class="text-primary">Pathologists?</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-200 max-w-3xl mb-10 leading-relaxed font-light">
          Pathologists are medically or scientifically qualified and work in hospitals and laboratories with other doctors and healthcare professionals. Every blood test, biopsy sample, cancer screening test or search for infection will involve a pathology team.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <button class="btn-primary px-8 py-3 text-lg">Start Now</button>
          <button class="btn-outline px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-accent">Learn More</button>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        <div class="w-2 h-2 rounded-full bg-white/40"></div>
        <div class="w-2 h-2 rounded-full bg-primary"></div>
        <div class="w-2 h-2 rounded-full bg-white/40"></div>
      </div>
    </section>

    <!-- Core Pillars / Cards -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="card in pillars" :key="card.title" class="glass-card p-8 hover:-translate-y-2 transition-transform duration-500">
            <div class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
              <component :is="card.icon" :size="32" />
            </div>
            <h3 class="text-lg font-bold mb-4 uppercase tracking-wider text-accent">{{ card.title }}</h3>
            <p class="text-sm text-gray-500 leading-relaxed">
              {{ card.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-12 bg-primary text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-2xl md:text-3xl font-bold mb-4">In an emergency? Need help now?</h2>
        <p class="mb-8 text-white/90">You can contact us at any time, we are also available 24/7</p>
        <NuxtLink to="/appointments" class="inline-block border-2 border-white px-8 py-2 rounded-lg font-bold hover:bg-white hover:text-primary transition-all">
          Make an Appointment Now
        </NuxtLink>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-20 bg-slate-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center mb-16">
          <h2 class="text-3xl font-bold mb-4 uppercase tracking-widest text-primary">About Us</h2>
          <div class="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p class="text-gray-600 leading-relaxed">
            Society for Cellular Pathology Scientists of Nigeria (SCPSN) is a Nigeria based scientific interest group for Cellular Pathology Scientists open primarily to Medical Laboratory Scientists (MLS) who specializes in Histopathology / Cytopathology and others with proven interest in the mission of the Society.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="relative">
            <div class="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
            <img src="https://scpsn.org.ng/wp-content/uploads/2021/10/logo-lg.png" class="w-full max-w-md mx-auto relative z-10 drop-shadow-2xl" alt="SCPSN Logo Large" />
          </div>
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-accent">Our Elected Leaders</h3>
            <ul class="space-y-3">
              <li v-for="leader in leaders" :key="leader.role" class="flex items-center gap-3">
                <LucideCheckCircle :size="18" class="text-primary flex-shrink-0" />
                <span class="text-sm">
                  <span class="font-bold text-accent">{{ leader.role }}:</span> 
                   {{ leader.name }}
                </span>
              </li>
            </ul>
            <p class="text-sm text-gray-500 italic">
              The Society conducts annual workshops, conferences and seminars for her members...
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="stat in stats" :key="stat.label" class="text-center p-8 bg-slate-50 rounded-2xl border border-gray-100">
            <div class="text-primary flex justify-center mb-4">
                <component :is="stat.icon" :size="32" />
            </div>
            <div class="text-4xl font-bold text-accent-dark mb-2">{{ stat.value }}</div>
            <div class="text-sm text-gray-500 font-semibold uppercase tracking-widest">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { 
    LucideMicroscope, 
    LucideStethoscope, 
    LucideSchool, 
    LucideHeartPulse,
    LucideUsers,
    LucideFlaskConical,
    LucideAward,
    LucideCalendar
} from 'lucide-vue-next'

const pillars = [
  { title: 'Explore Careers', desc: 'Both doctors and scientists working in pathology specialise in a particular area of medicine.', icon: LucideHeartPulse },
  { title: 'Other Careers', desc: 'Pathologists and consultant clinical scientists couldn’t prevent disease or diagnose patients without the expertise.', icon: LucideStethoscope },
  { title: 'The Medical Route', desc: 'The route you take will shape the roles you’re able to work in, but there are crossover opportunities.', icon: LucideSchool },
  { title: 'Oral & Maxillofacial', desc: 'To train as a consultant oral and maxillofacial pathologist requires a background in dentistry.', icon: LucideMicroscope },
]

const leaders = [
  { role: 'Vice President', name: 'MLS Bankole Julius Kayode' },
  { role: 'Secretary', name: 'MLS Raphael E. Tome' },
  { role: 'Asst. Secretary', name: 'MLS Scavsr Innocent Itachukwu Okoye' },
  { role: 'Treasurer', name: 'MLS Habiba Audu' },
  { role: 'Publicity Secretary', name: 'MLS Benard Solomon' },
]

const stats = [
  { label: 'Doctors', value: '85', icon: LucideUsers },
  { label: 'Conferences', value: '26', icon: LucideCalendar },
  { label: 'Research Lab', value: '14', icon: LucideFlaskConical },
  { label: 'Awards', value: '150', icon: LucideAward },
]
</script>
