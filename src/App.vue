<script setup>
import { useRoute, RouterLink, RouterView } from "vue-router";
const route = useRoute();
</script>

<template>
  <template v-if="route.path === '/'">
    <div
      id="about"
      class="grid xl:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 w-full h-screen"
    >
      <!-- Left Side -->
      <div class="xl:col-span-4 md:col-span-4 sm:col-span-12 relative">
        <div
          class="bg-[url('https://rickyjuliansyah.github.io/portfolio/src/assets//images/profile.jpg')] bg-cover bg-center xs:bg-top w-full h-full absolute"
        >
          <div
            class="xl:hidden absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-80"
          ></div>
          <h3
            class="xl:hidden md:hidden absolute bottom-0 left-0 text-3xl text-white p-4"
          >
            Hi ! <br />
            I’m Ricky Juliansyah. <br />
            A Full Stack Web Developer
          </h3>
        </div>
        <div class="h-64 sm:h-110 md:h-full xs:h-100 lg:h-full opacity-0"></div>
      </div>

      <!-- Right Side -->
      <div class="xl:col-span-8 md:col-span-8 sm:col-span-12 m-4">
        <nav
          class="absolute bottom-0 xs:hidden xl:inline-block md:inline-block"
        >
          <div class="space-x-6 flex" id="link">
            <RouterLink
              to="/"
              class="px-3 py-2 text-md text-neutral-800 relative inline-block group hover:font-extra-bold"
              >ABOUT ME
              <span
                id="line"
                class="absolute bottom-0 left-0 w-0 h-1 bg-[#1798E2] transition-all group-hover:w-full group-active:w-full"
              ></span
            ></RouterLink>
            <RouterLink
              to="/work-experience"
              class="px-3 py-2 text-md text-neutral-800 relative inline-block group hover:font-extra-bold"
              >WORK EXPERIENCE<span
                class="absolute bottom-0 left-0 w-0 h-1 bg-[#1798E2] transition-all group-hover:w-full"
              ></span
            ></RouterLink>
            <RouterLink
              to="/"
              class="px-3 py-2 text-md text-neutral-800 relative inline-block group hover:font-extra-bold"
              >PORTFOLIO<span
                class="absolute bottom-0 left-0 w-0 h-1 bg-[#1798E2] transition-all group-hover:w-full"
              ></span
            ></RouterLink>
            <RouterLink
              to="/"
              class="px-3 py-2 text-md text-neutral-800 relative inline-block group hover:font-extra-bold"
              >CONTACT<span
                class="absolute bottom-0 left-0 w-0 h-1 bg-[#1798E2] transition-all group-hover:w-full"
              ></span
            ></RouterLink>
          </div>
        </nav>
        <RouterView />
      </div>
    </div>
  </template>

  <div v-else class="w-full">
    <nav
      class="absolute inset-x-0 bottom-0 xs:hidden xl:inline-block md:inline-block"
    >
      <div class="space-x-6 text-center" id="link">
        <RouterLink
          to="/"
          class="px-3 py-2 text-md text-neutral-800 relative inline-block group hover:font-extra-bold"
          >ABOUT ME
          <span
            id="line"
            class="absolute bottom-0 left-0 w-0 h-1 bg-[#1798E2] transition-all group-hover:w-full group-active:w-full"
          ></span
        ></RouterLink>
        <RouterLink
          to="/work-experience"
          class="px-3 py-2 text-md text-neutral-800 relative inline-block group hover:font-extra-bold"
          >WORK EXPERIENCE<span
            class="absolute bottom-0 left-0 w-0 h-1 bg-[#1798E2] transition-all group-hover:w-full"
          ></span
        ></RouterLink>
        <RouterLink
          to="/"
          class="px-3 py-2 text-md text-neutral-800 relative inline-block group hover:font-extra-bold"
          >PORTFOLIO<span
            class="absolute bottom-0 left-0 w-0 h-1 bg-[#1798E2] transition-all group-hover:w-full"
          ></span
        ></RouterLink>
        <RouterLink
          to="/"
          class="px-3 py-2 text-md text-neutral-800 relative inline-block group hover:font-extra-bold"
          >CONTACT<span
            class="absolute bottom-0 left-0 w-0 h-1 bg-[#1798E2] transition-all group-hover:w-full"
          ></span
        ></RouterLink>
      </div>
    </nav>
    <RouterView />
  </div>
</template>
