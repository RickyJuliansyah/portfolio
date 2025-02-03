<script>
import AboutMe from "./page/AboutMe.vue";
import WorkExperience from "./page/WorkExperience.vue";
import NotFound from "./page/NotFound.vue";

const routes = {
  "/": AboutMe,
  "/work-experience": WorkExperience,
};

export default {
  data() {
    return {
      currentPath: window.location.hash,
    };
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || "/"] || NotFound;
    },
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.hash;
    });
  },
};
</script>

<template>
  <nav
    class="absolute inset-x-0 text-center bottom-0 xs:hidden xl:inline-block md:inline-block"
  >
    <div class="space-x-6" id="link">
      <a
        href="#"
        class="px-3 py-2 text-md text-neutral-800 relative inline-block group hover:font-extra-bold"
        >ABOUT ME
        <span
          id="line"
          class="absolute bottom-0 left-0 w-0 h-1 bg-[#1798E2] transition-all group-hover:w-full group-active:w-full"
        ></span
      ></a>
      <a
        href="#/work-experience"
        class="px-3 py-2 text-md text-neutral-800 relative inline-block group hover:font-extra-bold"
        >WORK EXPERIENCE<span
          class="absolute bottom-0 left-0 w-0 h-1 bg-[#1798E2] transition-all group-hover:w-full"
        ></span
      ></a>
      <a
        href="#"
        class="px-3 py-2 text-md text-neutral-800 relative inline-block group hover:font-extra-bold"
        >PORTFOLIO<span
          class="absolute bottom-0 left-0 w-0 h-1 bg-[#1798E2] transition-all group-hover:w-full"
        ></span
      ></a>
      <a
        href="#"
        class="px-3 py-2 text-md text-neutral-800 relative inline-block group hover:font-extra-bold"
        >CONTACT<span
          class="absolute bottom-0 left-0 w-0 h-1 bg-[#1798E2] transition-all group-hover:w-full"
        ></span
      ></a>
    </div>
  </nav>

   <!-- Mobile menu button-->
   <div class="xs:absolute xs:top-4 xs:right-4 xs:z-10">
                    <button type="button"
                        class="relative inline-flex items-center justify-center rounded-md p-2 text-neutral hover:bg-primary hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset sm:block md:hidden"
                        aria-controls="mobile-menu" aria-expanded="false" id="mobile-menu-button">
                        <span class="absolute -inset-0.5"></span>
                        <span class="sr-only">Open main menu</span>
                        <!-- Icon when menu is closed -->
                        <svg class="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" id="open-icon">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        <!-- Icon when menu is open -->
                        <svg class="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" id="close-icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <!-- Mobile Menu -->
                <div id="mobile-menu" class="rounded-xl hidden absolute top-16 z-10 right-4 bg-primary">
                    <div class="space-y-1 p-2" id="link">
                        <a href="#" class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                            aria-current="page">ABOUT ME</a>
                        <a href="#"
                            class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">WORK
                            EXPERIENCE</a>
                        <a href="#"
                            class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">PORTFOLIO</a>
                        <a href="#"
                            class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">CONTACT</a>
                    </div>
                </div>
  <component :is="currentView" />
</template>