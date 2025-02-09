<script setup>
import { useRoute, RouterLink } from "vue-router";

const route = useRoute();
const links = [
  { id: 1, name: "ABOUT ME", path: "/" },
  { id: 2, name: "WORK EXPERIENCE", path: "/work-experience" },
  { id: 3, name: "PORTFOLIO", path: "/portfolio" },
  { id: 4, name: "CONTACT", path: "/contact" },
];
</script>

<template>
  <nav
    class="fixed bg-primary/40 z-10 inset-x-0 bottom-0 xs:hidden md:inline-block"
  >
    <div class="space-x-6 text-center" id="link">
      <RouterLink
        v-for="link in links"
        :key="link.id"
        :to="link.path"
        class="px-3 py-2 text-md mx-3 text-neutral-800 relative inline-block group hover:font-extra-bold"
        :class="route.path == link.path ? 'font-extra-bold' : ''"
        >{{ link.name }}
        <span
          id="line"
          class="absolute bottom-0 left-0 w-0 h-1 bg-[#1798E2] transition-all group-hover:w-full group-active:w-full"
          :class="route.path == link.path ? 'w-full' : ''"
        ></span
      ></RouterLink>
    </div>
  </nav>
</template>
