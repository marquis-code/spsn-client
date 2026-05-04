<template>
  <div class="min-h-screen bg-slate-50 relative overflow-hidden">
    <!-- Background Decor -->
    <div class="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-cyan/5 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

    <div class="container mx-auto px-6 py-32 relative z-10">
      <!-- Hub Header -->
      <div class="max-w-4xl mb-24 space-y-8 animate-on-scroll">
        <span class="inline-block px-5 py-2 glass text-brand-cyan font-black text-xs uppercase tracking-[0.3em] rounded-full border border-slate-200">
           Scientific Research Hub
        </span>
        <h1 class="text-6xl md:text-8xl font-black text-brand-blue tracking-tighter leading-none">
           Abstracts <span class="text-brand-cyan">&</span> Publications.
        </h1>
        <p class="text-xl text-slate-500 max-w-2xl font-medium leading-relaxed">
           The central portal for submitting investigative findings, accessing scientific archives, and tracking the evolution of cellular pathology in Nigeria.
        </p>
      </div>

      <!-- Quick Actions / Guidelines -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-32">
        <div v-for="(card, i) in researchCards" :key="i" class="p-10 bg-white rounded-[40px] border border-slate-100 shadow-xl shadow-brand-blue/5 hover:border-brand-cyan transition-all duration-500 group animate-on-scroll" :style="{ transitionDelay: `${i * 100}ms` }">
           <div class="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-blue mb-8 group-hover:bg-brand-blue group-hover:text-white transition-all">
              <component :is="card.icon" :size="28" />
           </div>
           <h3 class="text-2xl font-black text-brand-blue mb-4">{{ card.title }}</h3>
           <p class="text-slate-500 font-medium mb-8 text-sm leading-relaxed">{{ card.desc }}</p>
           <button class="flex items-center gap-3 text-xs font-black text-brand-red uppercase tracking-widest group-hover:gap-5 transition-all">
              {{ card.action }}
              <LucideArrowRight :size="16" />
           </button>
        </div>
      </div>

      <!-- Submission Portal -->
      <div id="submission-form" class="bg-brand-blue rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden animate-on-scroll">
         <div class="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
         
         <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start relative z-10">
            <div class="space-y-12">
               <div class="space-y-6">
                  <h2 class="text-5xl font-black tracking-tighter">Submit Your <br/> <span class="text-brand-cyan">Masterpiece.</span></h2>
                  <p class="text-slate-300 font-medium leading-relaxed text-lg">
                     Contribute to the 2026 Scientific Compendium. We are currently accepting original research in molecular diagnostics and cellular pathology.
                  </p>
               </div>
               
               <div class="space-y-8">
                  <div v-for="(g, i) in guidelines" :key="i" class="flex gap-6">
                     <div class="w-10 h-10 rounded-full bg-white/10 flex flex-shrink-0 items-center justify-center text-brand-cyan font-black text-sm">
                        0{{ i + 1 }}
                     </div>
                     <p class="text-sm text-slate-300 font-medium italic leading-relaxed">{{ g }}</p>
                  </div>
               </div>
            </div>

            <div class="glass-dark p-10 md:p-16 rounded-[3rem] border border-white/10 shadow-3xl">
               <form @submit.prevent="handleSubmit" class="space-y-8">
                   <div class="space-y-2">
                      <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Lead Investigator</label>
                      <input v-model="form.author" type="text" class="form-input !bg-white/5 !border-white/10 !text-white placeholder:text-white/30" placeholder="Dr. Full Name" required />
                   </div>
                   <div class="space-y-2">
                      <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Scientific Title</label>
                      <input v-model="form.title" type="text" class="form-input !bg-white/5 !border-white/10 !text-white placeholder:text-white/30" placeholder="Enter research title" required />
                   </div>
                   <div class="space-y-2">
                      <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Abstract Body</label>
                      <textarea v-model="form.content" rows="6" class="form-input !bg-white/5 !border-white/10 !text-white placeholder:text-white/30 !py-3 !px-8 !rounded-[24px] resize-none" placeholder="Draft your research summary (Max 250 words)..." required></textarea>
                     <div class="flex justify-between items-center px-2">
                        <p class="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">Max Word Count: 250</p>
                        <p :class="['text-[9px] font-black uppercase tracking-[0.2em]', wordCount > 250 ? 'text-brand-red' : 'text-brand-cyan']">{{ wordCount }} / 250</p>
                     </div>
                  </div>
                   <button type="submit" :disabled="loading || wordCount > 250" class="btn-premium w-full !py-4 shadow-2xl shadow-cyan-900/40">
                      <span v-if="loading">Transmitting Data...</span>
                      <span v-else>Formalize Submission</span>
                   </button>
               </form>
            </div>
         </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { 
  LucideBookOpen, 
  LucideArrowRight, 
  LucideArchive, 
  LucideFileSearch,
  LucideMicroscope 
} from 'lucide-vue-next'
import { useSubmitAbstract } from '@/composables/modules/abstracts/useSubmitAbstract'
import { onMounted } from 'vue'

const { loading, form, wordCount, submitAbstract } = useSubmitAbstract()

const researchCards = [
  { title: 'Archives', desc: 'Browse through previous scientific publications and conference abstracts.', icon: LucideArchive, action: 'Explore Vault' },
  { title: 'Guidelines', desc: 'Detailed mandatory protocols for scientific paper formatting.', icon: LucideBookOpen, action: 'View Protocol' },
  { title: 'Live Reviews', desc: 'Check the status of your peer-review process in real-time.', icon: LucideFileSearch, action: 'Track Status' },
]

const guidelines = [
  "Mandatory structure: Background, Methods, Results, and Conclusion.",
  "Strict word limit: 250 words for peer-reviewed abstracts.",
  "Submit in clear scientific English or French."
]

const handleSubmit = async () => {
  if (wordCount.value > 250) return
  await submitAbstract()
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible')
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el))
})
</script>

<style scoped>
.animate-on-scroll {
  opacity: 0;
  transform: translateY(40px);
  transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}

.glass-dark {
  background: rgba(3, 57, 88, 0.4);
  backdrop-filter: blur(20px);
}
</style>
