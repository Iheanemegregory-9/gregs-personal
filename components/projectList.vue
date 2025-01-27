<template>
  <!-- Card Blog -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <h2 class="text-3xl font-bold text-green-600 xl:text-4xl mb-8">
        Recent Projects
      </h2>
  <!-- Grid -->
  <div class="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
    <!-- Card -->
    <NuxtLink class="group block rounded-xl overflow-hidden focus:outline-none" to="https://pocketfend.ng" target="_blank">
      <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
        <div class="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
          <img class="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl" src="/projects/pocket-fend.png" alt="Pocket Fend  Image">
        </div>

        <div class="grow">
          <span class="text-sm text-yellow-600">
            INPROGRESS
          </span>
          <h3 class="text-xl font-semibold text-green-500 ">
            Pocket Fend 
          </h3>
          <p class="mt-3 text-gray-950 ">
            A full stack VTU web application built using Nuxt 3, PostgresQL and PrismaORM
          </p>
          <p class="mt-4 inline-flex items-center gap-x-1 text-sm text-green-600 decoration-2 group-hover:underline group-focus:underline font-medium">
            Read more
            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </p>
        </div>
      </div>
    </NuxtLink>
    <!-- End Card -->


    <!-- Card -->
    <NuxtLink class="group block rounded-xl overflow-hidden focus:outline-none" to="https://mhandp.com/" target="_blank">
      <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
        <div class="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
          <img class="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl" src="/projects/mhandp.png" alt="MH&P  Image">
        </div>

        <div class="grow">
          
          <h3 class="text-xl font-semibold text-green-500 ">
            MH&P 
          </h3>
          <p class="mt-3 text-gray-950 ">
            A website for mobile clinic and concierge healthcare built using WordPress
          </p>
          <p class="mt-4 inline-flex items-center gap-x-1 text-sm text-green-600 decoration-2 group-hover:underline group-focus:underline font-medium">
            Read more
            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </p>
        </div>
      </div>
    </NuxtLink>
    <!-- End Card -->


     <!-- Card -->
     <NuxtLink class="group block rounded-xl overflow-hidden focus:outline-none" to="https://whisksync.com/" target="_blank">
      <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
        <div class="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
          <img class="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl" src="/projects/whisksync.png" alt="WhiskSync  Image">
        </div>

        <div class="grow">
          <span class="text-sm text-yellow-600">
            INPROGRESS
          </span>
          <h3 class="text-xl font-semibold text-green-500 ">
            WhiskSync
          </h3>
          <p class="mt-3 text-gray-950 ">
            An Invoice manager web app Nuxt 3, PostgresQL and PrismaORM
          </p>
          <p class="mt-4 inline-flex items-center gap-x-1 text-sm text-green-600 decoration-2 group-hover:underline group-focus:underline font-medium">
            Read more
            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </p>
        </div>
      </div>
    </NuxtLink>
    <!-- End Card -->
  </div>
  <!-- End Grid -->
</div>
<!-- End Card Blog -->
</template>

<script lang="ts" setup>

</script>

<style>

</style>