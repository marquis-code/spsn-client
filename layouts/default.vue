<template>
  <div class="min-h-screen flex flex-col font-sans">
    <!-- Top Bar Info -->
    <div class="bg-primary py-2 text-white text-sm hidden md:block">
      <div class="container mx-auto px-4 flex justify-between items-center">
        <div class="flex items-center gap-4">
          <span class="flex items-center gap-1">
            <LucideClock :size="16" />
            Monday - Saturday, 8AM to 10PM
          </span>
        </div>
        <div class="flex items-center gap-4">
          <span class="flex items-center gap-1">
            <LucidePhone :size="16" />
            Call us now +2349014377191
          </span>
        </div>
      </div>
    </div>

    <Header />
    
    <main class="flex-grow">
      <slot />
    </main>

    <Footer />

    <!-- AI Chat Widget -->
    <AIChatWidget />
  </div>
</template>

<script setup>
// Layout for the public association website
</script>
