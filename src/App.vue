<script setup>
import { RouterView } from "vue-router";
</script>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<template>
  <NavBar></NavBar>

  <transition name="fade" mode="out-in">
    <RouterView />
  </transition>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
