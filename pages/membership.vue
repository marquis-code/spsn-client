<template>
  <div class="min-h-screen bg-slate-50 relative overflow-hidden">
    <!-- Background Decor -->
    <div class="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
    <div class="absolute bottom-1/4 right-0 w-[800px] h-[800px] bg-brand-dark/5 rounded-full blur-[140px] translate-x-1/3 pointer-events-none"></div>

    <div class="container mx-auto px-6 py-32 relative z-10">
      <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-20 space-y-4">
          <span class="inline-block px-5 py-2 glass text-brand-cyan font-black text-[10px] uppercase tracking-[0.4em] rounded-full">
             Professional Enrollment Protocol
          </span>
          <h1 class="text-5xl md:text-7xl font-black text-brand-dark tracking-tighter leading-none">
             Join the <span class="text-brand-cyan">Future</span>.
          </h1>
          <p class="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
            Digitalizing the Society for Cellular Pathology Scientists of Nigeria enrollment experience.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <!-- Info Column -->
          <div class="lg:col-span-5 space-y-8">
            <!-- About Card -->
            <div class="interactive-card p-10 space-y-6 border-l-4 border-l-brand-cyan">
              <h3 class="text-xl font-black text-brand-dark uppercase tracking-tight">About SCPSN</h3>
              <p class="text-slate-500 text-sm leading-relaxed font-medium">
                {{ cmsConfig?.membershipSettings?.about || 'Founded in 2007 in Ilorin, Kwara State, SCPSN is the official professional voice for Histoscientists and Cytologists in Nigeria.' }}
              </p>
            </div>

            <!-- Leadership Card -->
            <div class="interactive-card p-10 space-y-8">
              <h3 class="text-xl font-black text-brand-dark uppercase tracking-tight flex items-center gap-3">
                <LucideUsers class="text-brand-cyan" :size="24" />
                Leadership Legacy
              </h3>
              <div class="space-y-6">
                <div v-for="leader in (cmsConfig?.membershipSettings?.leadership || [])" :key="leader.name" class="flex justify-between items-center group">
                  <span class="text-sm font-bold text-slate-700 group-hover:text-brand-cyan transition-colors">{{ leader.name }}</span>
                  <span class="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-full border border-slate-100">{{ leader.tenure }}</span>
                </div>
              </div>
            </div>

            <!-- Benefits Card -->
            <div class="interactive-card p-10 bg-brand-dark text-white rounded-[40px] space-y-8 relative overflow-hidden group">
               <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-brand-cyan/10 rounded-full blur-[80px] group-hover:scale-110 transition-transform"></div>
               <h3 class="text-xl font-black uppercase tracking-tight relative z-10 flex items-center gap-3">
                 <LucideAward class="text-brand-cyan" :size="24" />
                 Elite Benefits
               </h3>
               <ul class="space-y-4 relative z-10">
                 <li v-for="benefit in (cmsConfig?.membershipSettings?.benefits || [])" :key="benefit" class="flex gap-4 group">
                    <LucideCheckCircle :size="18" class="text-brand-cyan shrink-0" />
                    <span class="text-xs text-slate-300 font-medium leading-relaxed">{{ benefit }}</span>
                 </li>
               </ul>
            </div>
          </div>

          <!-- Form Column -->
          <div class="lg:col-span-7">
            <div class="interactive-card overflow-hidden">
               <div class="flex border-b border-slate-100">
                  <button 
                    @click="activeStep = 1" 
                    :class="['flex-1 py-6 text-[10px] font-black uppercase tracking-[0.2em] transition-all relative', activeStep === 1 ? 'text-brand-dark' : 'text-slate-400']"
                  >
                    01. Bio-Intelligence
                    <div v-if="activeStep === 1" class="absolute bottom-0 left-0 right-0 h-1 bg-brand-cyan"></div>
                  </button>
                  <button 
                    @click="activeStep = 2" 
                    :class="['flex-1 py-6 text-[10px] font-black uppercase tracking-[0.2em] transition-all relative', activeStep === 2 ? 'text-brand-dark' : 'text-slate-400']"
                  >
                    02. Credentialing
                    <div v-if="activeStep === 2" class="absolute bottom-0 left-0 right-0 h-1 bg-brand-cyan"></div>
                  </button>
                  <button 
                    @click="activeStep = 3" 
                    :class="['flex-1 py-6 text-[10px] font-black uppercase tracking-[0.2em] transition-all relative', activeStep === 3 ? 'text-brand-dark' : 'text-slate-400']"
                  >
                    03. Finalization
                    <div v-if="activeStep === 3" class="absolute bottom-0 left-0 right-0 h-1 bg-brand-cyan"></div>
                  </button>
               </div>

               <div class="p-10 lg:p-14 space-y-8 min-h-[500px]">
                  <!-- Step 1 -->
                  <div v-if="activeStep === 1" class="animate-in fade-in slide-in-from-right-4 space-y-6">
                    <div class="space-y-2">
                       <label class="text-[10px] font-black text-brand-dark uppercase tracking-[0.2em] ml-2">Full Legal Name</label>
                       <input v-model="form.fullName" type="text" class="form-input" placeholder="e.g. MLS Julius Kayode" />
                    </div>
                    <div class="space-y-2">
                       <label class="text-[10px] font-black text-brand-dark uppercase tracking-[0.2em] ml-2">Digital Mailbox</label>
                       <input v-model="form.email" type="email" class="form-input" placeholder="e.g. julius@scpsn.org.ng" />
                    </div>
                    <div class="space-y-2">
                       <label class="text-[10px] font-black text-brand-dark uppercase tracking-[0.2em] ml-2">Communication Line</label>
                       <input v-model="form.phone" type="tel" class="form-input" placeholder="e.g. +234..." />
                    </div>
                    <div class="pt-6">
                       <button @click="activeStep = 2" class="btn-premium w-full !py-5">Next Vector</button>
                    </div>
                  </div>

                  <!-- Step 2 -->
                  <div v-if="activeStep === 2" class="animate-in fade-in slide-in-from-right-4 space-y-6">
                     <div class="space-y-2">
                        <label class="text-[10px] font-black text-brand-dark uppercase tracking-[0.2em] ml-2">Professional Institution</label>
                        <input v-model="form.institution" type="text" class="form-input" placeholder="e.g. University of Ilorin Teaching Hospital" />
                     </div>
                     <div class="space-y-2">
                        <label class="text-[10px] font-black text-brand-dark uppercase tracking-[0.2em] ml-2">Enrollment Type</label>
                        <div class="flex gap-4">
                           <button 
                             @click="form.membershipType = 'New'" 
                             :class="['flex-1 p-6 rounded-2xl border-2 transition-all text-center group', form.membershipType === 'New' ? 'border-brand-cyan bg-brand-cyan/5' : 'border-slate-100 hover:border-slate-200']"
                           >
                              <p class="text-[10px] font-black uppercase tracking-widest text-brand-dark mb-2">New Registrant</p>
                              <p class="text-2xl font-black text-brand-dark">₦{{ cmsConfig?.membershipSettings?.newRegistrationFee?.toLocaleString() }}</p>
                           </button>
                           <button 
                             @click="form.membershipType = 'Renewal'" 
                             :class="['flex-1 p-6 rounded-2xl border-2 transition-all text-center group', form.membershipType === 'Renewal' ? 'border-brand-cyan bg-brand-cyan/5' : 'border-slate-100 hover:border-slate-200']"
                           >
                              <p class="text-[10px] font-black uppercase tracking-widest text-brand-dark mb-2">Annual Renewal</p>
                              <p class="text-2xl font-black text-brand-dark">₦{{ cmsConfig?.membershipSettings?.renewalFee?.toLocaleString() }}</p>
                           </button>
                        </div>
                     </div>
                     <div class="pt-6 flex gap-4">
                        <button @click="activeStep = 1" class="btn-outline-premium !w-24 !py-5">Back</button>
                        <button @click="activeStep = 3" class="btn-premium flex-1 !py-5">Proceed to Finalization</button>
                     </div>
                  </div>

                  <!-- Step 3 -->
                  <div v-if="activeStep === 3" class="animate-in fade-in slide-in-from-right-4 space-y-10">
                     <div class="bg-[#033958] p-10 rounded-[32px] text-white space-y-6 relative overflow-hidden">
                        <div class="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
                        <div class="space-y-2 relative z-10">
                           <p class="text-[10px] font-black uppercase tracking-[0.3em] text-brand-cyan">Institutional Registry</p>
                           <h4 class="text-2xl font-black tracking-tight">{{ cmsConfig?.membershipSettings?.bankName }} Bank</h4>
                        </div>
                        <div class="grid grid-cols-2 gap-8 relative z-10">
                           <div class="space-y-1">
                              <p class="text-[8px] font-black uppercase tracking-widest text-slate-400">Account Number</p>
                              <p class="text-lg font-mono font-bold tracking-widest">{{ cmsConfig?.membershipSettings?.accountNumber }}</p>
                           </div>
                           <div class="space-y-1">
                              <p class="text-[8px] font-black uppercase tracking-widest text-slate-400">Account Name</p>
                              <p class="text-sm font-bold uppercase">{{ cmsConfig?.membershipSettings?.accountName }}</p>
                           </div>
                        </div>
                        <div class="pt-4 border-t border-white/10 flex justify-between items-center relative z-10">
                           <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                             <LucideClock :size="12" class="text-brand-cyan" />
                             Deadline: {{ formatDate(cmsConfig?.membershipSettings?.registrationDeadline) }}
                           </p>
                           <LucideShieldCheck :size="24" class="text-brand-cyan" />
                        </div>
                     </div>

                     <div class="space-y-4">
                        <h5 class="text-[10px] font-black text-brand-dark uppercase tracking-[0.2em] ml-2">Proof of Digital Payment</h5>
                        <div 
                          @click="$refs.proofFile.click()" 
                          class="p-10 border-2 border-dashed border-slate-200 rounded-[32px] text-center space-y-4 cursor-pointer hover:border-brand-cyan hover:bg-brand-cyan/5 transition-all group"
                        >
                           <div v-if="!selectedFile" class="space-y-4">
                              <div class="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto text-slate-300 group-hover:text-brand-cyan group-hover:bg-white group-hover:shadow-lg transition-all">
                                 <LucideUpload :size="24" />
                              </div>
                              <p class="text-xs font-bold text-slate-500 uppercase tracking-widest">Select Narrative Receipt</p>
                           </div>
                           <div v-else class="flex items-center justify-center gap-3 text-brand-cyan font-bold">
                              <LucideFileCheck :size="20" />
                              <span class="text-xs truncate max-w-[200px]">{{ selectedFile.name }}</span>
                           </div>
                        </div>
                        <input type="file" ref="proofFile" class="hidden" @change="handleFileSelected" />
                     </div>

                     <div class="pt-4 flex gap-4">
                        <button @click="activeStep = 2" :disabled="registering" class="btn-outline-premium !w-24 !py-5">Back</button>
                        <button @click="submitEnrollment" :disabled="registering || !selectedFile" class="btn-premium flex-1 !py-5">
                           <span v-if="registering">Transmitting Data...</span>
                           <span v-else>Register & Complete Protocol</span>
                        </button>
                     </div>
                  </div>
               </div>
            </div>

            <!-- Urgent Contact Footer -->
            <div class="mt-8 flex justify-between items-center px-4">
               <div class="flex gap-4">
                  <div v-for="person in (cmsConfig?.membershipSettings?.contactPersons || [])" :key="person.name" class="flex flex-col">
                     <span class="text-[8px] font-black text-slate-400 uppercase tracking-widest italic">{{ person.name }}</span>
                     <span class="text-[11px] font-bold text-brand-dark">{{ person.phone }}</span>
                  </div>
               </div>
               <a :href="cmsConfig?.membershipSettings?.telegramLink" target="_blank" class="flex items-center gap-2 text-brand-cyan font-black text-[10px] uppercase tracking-widest hover:translate-x-2 transition-transform">
                  <LucideSend :size="14" />
                  Telegram Group
               </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { 
  LucideCheckCircle, 
  LucideChevronDown, 
  LucideUsers, 
  LucideAward, 
  LucideClock, 
  LucideShieldCheck, 
  LucideUpload,
  LucideFileCheck,
  LucideSend,
  LucideUser
} from 'lucide-vue-next'
import { useCms } from '@/composables/modules/cms/useCms'
import { useRegister } from '@/composables/modules/auth/useRegister'
import { useInitiatePayment } from '@/composables/modules/payments/usePayments'
import { useCustomToast } from '@/composables/core/useCustomToast'

const { cmsConfig, getCmsConfig } = useCms()
const { loading: registering, form, register } = useRegister()
const { showToast } = useCustomToast()

const activeStep = ref(1)
const selectedFile = ref(null)

const handleFileSelected = (event) => {
  const file = event.target.files[0]
  if (file) {
    selectedFile.value = file
  }
}

const formatDate = (dateStr) => {
  if (!dateStr) return 'TBA'
  return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

const submitEnrollment = async () => {
    if (!form.value.fullName || !form.value.email || !form.value.membershipType) {
        showToast({ title: "Validation", message: "Please ensure all fields are verified.", toastType: "warning" })
        return
    }

    const payload = new FormData()
    payload.append('fullName', form.value.fullName)
    payload.append('email', form.value.email)
    payload.append('phone', form.value.phone)
    payload.append('institution', form.value.institution)
    payload.append('membershipType', form.value.membershipType)
    payload.append('proofOfPayment', selectedFile.value)
    payload.append('password', 'Member@123') // Default password for new registrations

    // Special automated registration call
    try {
        await register(payload)
        showToast({ title: "Enrollment Finalized", message: "Your registration is being verified by the Scientific Secretariat.", toastType: "success" })
        activeStep.value = 1
        selectedFile.value = null
    } catch (e) {
        showToast({ title: "Transmission Error", message: "Unable to complete enrollment protocol.", toastType: "error" })
    }
}

onMounted(() => {
  getCmsConfig()
})
</script>
