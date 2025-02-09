<template>
  <!-- Header -->
  <div class="col-span-12 w-full">
    <div class="grid grid-cols-12">
      <!-- Nama -->
      <h3
        class="content-center xl:inline-block md:inline-block xs:hidden"
        :class="route.path == '/contact' ? 'col-span-9' : 'col-span-10'"
      >
        <span class="font-black">Ricky Juliansyah</span> - Full Stack Web
        Developer
      </h3>

      <!-- Logo -->
      <div
        class="col-span-2 flex sm:justify-start xl:justify-end md:justify-end xl:static md:static xs:absolute xs:top-4 xs:left-4 xs:z-10"
        :class="route.path == '/' ? 'xl:justify-start' : ''"
      >
        <img :src="`/portfolio/images/logo.png`" class="w-10" alt="logo" />
      </div>
    </div>

    <!-- Mobile -->
    <div
      class="bg-white py-2 fixed w-full z-20 top-0 start-0 border-b border-gray-200 flex justify-between xs:px-4 xs:drop-shadow-lg md:hidden"
    >
      <div
        class="col-span-2 sm:justify-start xl:justify-end md:justify-end xl:static md:static"
      >
        <img :src="`/portfolio/images/logo.png`" class="w-10" alt="logo" />
      </div>
      <BurgerButton></BurgerButton>
    </div>
  </div>
</template>

<script>
import BurgerButton from "../components/BurgerButton.vue";

export default {
  components: {
    BurgerButton,
  },
};
</script>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>
