<template>
  <div class="min-h-screen bg-slate-50 py-20">
    <div class="container mx-auto px-6 max-w-lg">
      <div class="bg-white p-10 rounded-3xl shadow-premium border border-gray-100 flex flex-col items-center">
        <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 animate-bounce">
          <LucideLoader2 :size="32" class="animate-spin" />
        </div>
        <h2 class="text-2xl font-bold text-accent mb-4">Processing Payment...</h2>
        <p class="text-gray-500 text-center mb-8">Please wait while we verify your transaction reference: <span class="font-mono text-primary">{{ $route.query.reference }}</span></p>
        
        <div class="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
           <div class="bg-primary h-full transition-all duration-1000" :style="{ width: progress + '%' }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { LucideLoader2 } from 'lucide-vue-next'
import { useVerifyPayment } from '@/composables/modules/payments/usePayments'
import { onMounted } from 'vue'

const progress = ref(0)
const router = useRouter()
const route = useRoute()
const { loading, paymentStatus, verifyPayment } = useVerifyPayment()

onMounted(async () => {
  const reference = String(route.query.reference || '')
  
  // Animate progress bar
  const interval = setInterval(() => {
    if (progress.value < 80) progress.value += 5
  }, 100)

  // Actually verify the payment
  if (reference) {
    await verifyPayment(reference)
  }

  // Complete progress bar
  clearInterval(interval)
  progress.value = 100

  setTimeout(() => {
    router.push('/membership')
  }, 1500)
})
</script>
