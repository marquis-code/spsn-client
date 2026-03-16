<template>
  <div class="py-20 bg-slate-50 min-h-screen">
    <div class="container mx-auto px-4 max-w-5xl">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-accent uppercase tracking-widest mb-4">Abstract Submission</h2>
        <p class="text-gray-500">Submit your research for the upcoming SCPSN Conference</p>
        <div class="w-20 h-1 bg-primary mx-auto mt-6"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <!-- Guidelines -->
        <div class="lg:col-span-1 space-y-8">
          <div class="bg-white p-8 rounded-2xl shadow-premium border border-gray-100">
            <h3 class="text-lg font-bold mb-6 text-primary flex items-center gap-2">
              <LucideBookOpen :size="20" />
              Guidelines
            </h3>
            <ul class="space-y-4 text-sm text-gray-600">
              <li class="flex gap-3">
                <span class="w-5 h-5 bg-primary/10 text-primary rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0">1</span>
                Abstracts must be arranged in the following order: Title, Background, Method, Results, and Conclusion.
              </li>
              <li class="flex gap-3">
                <span class="w-5 h-5 bg-primary/10 text-primary rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0">2</span>
                Maximum length should not exceed 250 words.
              </li>
              <li class="flex gap-3">
                <span class="w-5 h-5 bg-primary/10 text-primary rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0">3</span>
                The language must be English or French.
              </li>
              <li class="flex gap-3">
                <span class="w-5 h-5 bg-primary/10 text-primary rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0">4</span>
                Deadline for submission: Wednesday 31st August, 2026.
              </li>
            </ul>
          </div>

          <div class="bg-brand-blue text-white p-8 rounded-2xl shadow-premium">
             <h4 class="font-bold mb-4 flex items-center gap-2">
               <LucideAlertCircle :size="20" class="text-primary" />
               Need Help?
             </h4>
             <p class="text-xs text-gray-300 leading-relaxed">
               For inquiries regarding submission, please email us at admin@scpsn.org.ng or call +234 809 371 6175.
             </p>
          </div>
        </div>

        <!-- Submission Form -->
        <div class="lg:col-span-2 bg-white p-10 rounded-2xl shadow-premium border border-gray-100">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-xs font-bold text-accent uppercase mb-2">Primary Author</label>
                <input v-model="form.author" type="text" class="w-full px-4 py-3 bg-slate-50 border rounded-xl outline-none focus:ring-1 focus:ring-primary" placeholder="Enter full name" required />
              </div>
              <div>
                <label class="block text-xs font-bold text-accent uppercase mb-2">Email Address</label>
                <input v-model="form.email" type="email" class="w-full px-4 py-3 bg-slate-50 border rounded-xl outline-none focus:ring-1 focus:ring-primary" placeholder="author@example.com" required />
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-accent uppercase mb-2">Conference</label>
              <select v-model="form.conferenceId" class="w-full px-4 py-3 bg-slate-50 border rounded-xl outline-none focus:ring-1 focus:ring-primary" required>
                <option value="" disabled>Select a conference</option>
                <option v-for="conference in conferences" :key="conference._id" :value="conference._id">
                  {{ conference.title }}
                </option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-bold text-accent uppercase mb-2">Abstract Title</label>
              <input v-model="form.title" type="text" class="w-full px-4 py-3 bg-slate-50 border rounded-xl outline-none focus:ring-1 focus:ring-primary" placeholder="Enter your research title" required />
            </div>

            <div>
              <label class="block text-xs font-bold text-accent uppercase mb-2">Abstract Content</label>
              <textarea v-model="form.content" rows="8" class="w-full px-4 py-3 bg-slate-50 border rounded-xl outline-none focus:ring-1 focus:ring-primary" placeholder="Paste your abstract content here..." required></textarea>
              <div class="flex justify-between mt-2">
                <p class="text-[10px] text-gray-400">Min 150 - Max 250 words</p>
                <p :class="['text-[10px]', wordCount > 250 ? 'text-red-500 font-bold' : 'text-gray-400']">{{ wordCount }} / 250 words</p>
              </div>
            </div>

            <div class="pt-4">
              <button type="submit" :disabled="loading" class="btn-primary w-full py-4 text-lg font-bold flex justify-center items-center gap-2">
                <span v-if="loading">SUBMITTING...</span>
                <span v-else>SUBMIT ABSTRACT</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSubmitAbstract } from '@/composables/modules/abstracts/useSubmitAbstract'

const { loading, form, wordCount, submitAbstract } = useSubmitAbstract()
</script>
