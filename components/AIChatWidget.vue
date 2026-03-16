<template>
  <div class="fixed bottom-6 right-6 z-[100]">
    <!-- Toggle Button -->
    <button 
      @click="isOpen = !isOpen"
      class="w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300"
    >
      <LucideMessageSquare v-if="!isOpen" />
      <LucideX v-else />
    </button>

    <!-- Chat Window -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform translate-y-10 opacity-0 scale-95"
      enter-to-class="transform translate-y-0 opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100 scale-100"
      leave-to-class="transform translate-y-10 opacity-0 scale-95"
    >
      <div v-if="isOpen" class="absolute bottom-20 right-0 w-80 sm:w-96 h-[450px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border">
        <!-- Header -->
        <div class="bg-primary p-4 text-white flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <LucideBot :size="18" />
            </div>
            <div>
              <h4 class="font-bold text-sm">SCPSN Assistant</h4>
              <p class="text-[10px] text-white/80 flex items-center gap-1">
                <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Always Active
              </p>
            </div>
          </div>
        </div>

        <!-- Messages Area -->
        <div class="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50" ref="messageArea">
          <div 
            v-for="(msg, i) in messages" 
            :key="i"
            :class="['max-w-[80%] p-3 rounded-2xl text-sm', msg.sender === 'user' ? 'ml-auto bg-primary text-white rounded-tr-none' : 'mr-auto bg-white shadow-sm rounded-tl-none text-accent']"
          >
            {{ msg.text }}
          </div>
        </div>

        <!-- Input Area -->
        <div class="p-3 bg-white border-t flex gap-2">
          <input 
            v-model="input"
            @keyup.enter="send"
            type="text" 
            placeholder="Type your question..."
            class="flex-grow px-4 py-2 bg-slate-100 border-none rounded-full text-sm focus:ring-1 focus:ring-primary outline-none"
          />
          <button 
            @click="send"
            class="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors"
          >
            <LucideSend :size="16" />
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
const isOpen = ref(false)
const input = ref('')
const messageArea = ref(null)

const messages = ref([
  { sender: 'ai', text: 'Welcome to SCPSN! I am your AI assistant. How can I help you today?' }
])

const send = async () => {
  if (!input.value.trim()) return
  
  const text = input.value
  messages.value.push({ sender: 'user', text })
  input.value = ''
  
  // Logic to simulate AI and later connect to Socket.io
  setTimeout(() => {
    messages.value.push({ sender: 'ai', text: "I've received your inquiry about '" + text + "'. I'm still learning, but you can check our Conferences or Membership pages for more info!" })
    nextTick(() => {
        if (messageArea.value) {
            messageArea.value.scrollTop = messageArea.value.scrollHeight
        }
    })
  }, 1000)
}
</script>
