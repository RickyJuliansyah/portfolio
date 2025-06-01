<template>
  <!-- Mobile menu button-->
  <div>
    <button
      type="button"
      class="relative inline-flex z-40 items-center justify-center rounded-md p-2 text-primary border-2 border-primary hover:bg-primary hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset sm:block md:hidden"
      aria-controls="mobile-menu"
      aria-expanded="false"
      id="mobile-menu-button"
    >
      <span class="absolute -inset-0.5"></span>
      <span class="sr-only">Open main menu</span>
      <!-- Icon when menu is closed -->
      <svg
        class="block size-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        aria-hidden="true"
        id="open-icon"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      <!-- Icon when menu is open -->
      <svg
        class="hidden size-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        aria-hidden="true"
        id="close-icon"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>
  <!-- Mobile Menu -->
  <div
    id="mobile-menu"
    class="rounded-xl hidden w-xs absolute top-16 z-10 right-4 bg-primary/80"
  >
    <div class="space-y-1 p-2">
      <RouterLink
        v-for="link in links"
        :key="link.id"
        :to="link.path"
        class="block rounded-md px-3 py-2 text-base font-medium"
        :class="
          route.path == link.path
            ? 'font-extra-bold bg-gray-900 text-white'
            : ''
        "
        aria-current="page"
        >{{ link.name }}
      </RouterLink>
    </div>
  </div>
</template>
<script setup>
import { useRoute, RouterLink, RouterView } from "vue-router";
import { ref } from "vue";

const route = useRoute();
const links = [
  { id: 1, name: "ABOUT ME", path: "/" },
  { id: 2, name: "WORK EXPERIENCE", path: "/work-experience" },
  { id: 3, name: "PORTFOLIO", path: "/portfolio" },
  { id: 4, name: "CONTACT", path: "/contact" },
];
</script>
<script>
// Burger Button
export default {
  mounted() {
    // Burger Button
    document
      .getElementById("mobile-menu-button")
      .addEventListener("click", function () {
        var mobileMenu = document.getElementById("mobile-menu");
        var openIcon = document.getElementById("open-icon");
        var closeIcon = document.getElementById("close-icon");

        // Toggle the mobile menu visibility
        mobileMenu.classList.toggle("hidden");

        // Toggle icons
        openIcon.classList.toggle("hidden");
        closeIcon.classList.toggle("hidden");

        // Toggle aria-expanded attribute for accessibility
        var isExpanded = mobileMenu.classList.contains("hidden")
          ? "false"
          : "true";
        this.setAttribute("aria-expanded", isExpanded);
      });
  },
};
</script>
