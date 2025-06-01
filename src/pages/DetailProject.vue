<template>
  <div v-if="Object.keys(this.project).length == 1"></div>
  <div
    v-else
    class="grid xl:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 w-full h-screen"
  >
    <!-- Left Side -->
    <div class="xl:col-span-6 md:col-span-4 sm:col-span-12 relative">
      <Transition name="fade" mode="out-in">
        <div v-if="loading" class="aspect-[16/9]">
          <div
            class="flex items-center justify-center w-full h-full absolute bg-gray-300 rounded-md animate-pulse"
          >
            <svg
              class="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path
                d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"
              />
            </svg>
          </div>
        </div>
        <div v-else>
          <div
            class="w-full h-screen absolute bg-linear-to-t from-neutral to-primary flex items-center justify-center overflow-hidden"
          >
            <div
              class="w-full h-full bg-center bg-no-repeat bg-contain"
              :style="{
                backgroundImage: `url('/portfolio/images/project/${project.pathImage}.webp')`,
              }"
            ></div>

            <!-- Overlay -->
            <div
              class="xl:hidden absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-80"
            ></div>

            <!-- Teks -->
            <h3
              class="xl:hidden md:hidden absolute bottom-0 left-0 text-3xl text-white p-4 font-extra-bold md:text-5xl leading-[1.5] xs:text-4xl xl:mt-12 md:mb-6"
            >
              {{ project.nameApplication }}
            </h3>
          </div>

          <!-- Spacer biar kontennya nggak ketumpuk -->
          <div
            class="h-64 sm:h-110 md:h-full xs:h-100 lg:h-full opacity-0"
          ></div>
        </div>
      </Transition>
    </div>

    <!-- Right Side -->
    <div
      class="xl:col-span-6 md:col-span-8 sm:col-span-12 m-4 md:pr-10 md:h-screen"
    >
      <AppHeader></AppHeader>

      <!-- Title -->
      <div class="h-[50dvh] md:h-auto"></div>
      <h1
        class="font-extra-bold md:text-5xl leading-[1.5] xs:text-4xl xl:mt-12 md:mb-6 xs:hidden md:block"
      >
        {{ project.nameApplication }}
      </h1>

      <!-- Sub Title -->
      <h2 class="section-heading">Technology</h2>

      <!-- Skills -->
      <div
        class="grid md:grid-cols-5 xs:grid-cols-3 xl:gap-4 md:gap-2 xs:gap-2 xs:mb-4"
      >
        <div
          class="text-center"
          v-for="data in project.technology"
          :key="data.id"
        >
          <Transition name="fade" mode="out-in">
            <div v-if="loading">
              <div
                class="flex items-center justify-center h-24 bg-gray-300 rounded-md animate-pulse"
              >
                <svg
                  class="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path
                    d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"
                  />
                </svg>
              </div>

              <!-- Skeleton untuk Text -->
              <div
                class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-full my-2"
              ></div>
            </div>
            <div v-else>
              <div
                class="bg-neutral rounded-md h-24 flex items-center justify-center ease-in-out hover:-translate-y-1 hover:scale-110 transition"
              >
                <img
                  :src="`/portfolio/images/technology/${data.pathImage}-logo.webp`"
                  :alt="`${data.pathImage} logo`"
                  class="p-2 h-full w-auto object-contain"
                  @load="loading = false"
                />
              </div>
              <h3 class="xl:text-lg md:text-sm">{{ data.name }}</h3>
            </div>
          </Transition>
        </div>
      </div>
    </div>

    <div class="md:col-span-12 xl:mt-10 xs:px-5 md:px-10">
      <!-- About The App -->
      <h2 class="section-heading text-center xs:mt-8">About The App</h2>

      <p class="text-justify">
        {{ project.about }}
      </p>
    </div>

    <div
      class="md:col-span-12 mt-10 bg-secondary h-full"
      v-if="project.department.length > 0"
    >
      <!-- Departments -->
      <div class="md:px-10">
        <h2 class="section-heading text-center xs:mt-8">User Departments</h2>

        <!-- Slider -->
        <div id="custom-carousel" class="relative w-full overflow-hidden">
          <!-- Carousel wrapper -->
          <div
            class="flex transition-transform duration-700 ease-in-out mt-8"
            data-carousel-inner
          >
            <!-- Item 1 -->
            <div
              v-for="data in project.department"
              :key="data.id"
              class="md:min-w-[33.333%] xs:min-w-[50%] px-2"
            >
              <img
                :src="`/portfolio/images/department/${data.pathImage}-logo.webp`"
                :alt="`${data.pathImage} logo`"
                class="w-full h-auto"
                @load="loading = false"
              />
            </div>
          </div>

          <!-- Controls -->
          <button
            id="prev-slide"
            class="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 p-2 text-white"
          >
            ❮
          </button>
          <button
            id="next-slide"
            class="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 p-2 text-white"
          >
            ❯
          </button>
        </div>
      </div>
    </div>

    <!-- App Menu -->
    <div class="md:col-span-12 md:px-10 grid grid-cols-12 pb-12 mt-10">
      <h2 class="section-heading text-center col-span-12">App Menu</h2>

      <div
        v-for="data in project.appMenu"
        :key="data"
        class="m-2 xl:col-span-4 md:col-span-6 xs:col-span-12 p-4 bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col hover:bg-gray-100"
      >
        <div class="flex flex-col flex-grow">
          <div
            class="rounded-md h-60 flex items-center justify-center"
            :class="data.pathImage !== '404' ? 'bg-neutral' : 'bg-gray-400'"
          >
            <img
              v-if="data.pathImage !== '404'"
              :src="`/portfolio/images/${data.pathImage}.webp`"
              :alt="`${data.pathImage} image`"
              class="h-full w-auto object-contain rounded-md outline-1 outline-primary"
              @load="loading = false"
            />

            <svg
              v-else
              class="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path
                d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"
              />
            </svg>
          </div>
          <h4 class="font-semi-bold my-2">{{ data.name }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import { eventBus } from "../eventBus";
import { initFlowbite } from "flowbite";

export default {
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (!vm.project) {
        vm.$router.replace("/portfolio"); // Redirect kalau data project kosong
      }
    });
  },
  components: {
    AppHeader,
  },
  data() {
    return {
      loading: true,
      skills: [
        { id: 1, nameSkills: "PHP", pathImage: "php", duration: "3" },
        { id: 2, nameSkills: "JAVASCRIPT", pathImage: "js", duration: "2" },
        { id: 3, nameSkills: "MySQL", pathImage: "mysql", duration: "3" },
        { id: 4, nameSkills: "Codeigniter", pathImage: "ci", duration: "3" },
        { id: 5, nameSkills: "Vue JS", pathImage: "vuejs", duration: "2" },
        {
          id: 6,
          nameSkills: "Bootstrap",
          pathImage: "bootstrap",
          duration: "2",
        },
        { id: 7, nameSkills: "Vuetify", pathImage: "vuetify", duration: "2" },
      ],
    };
  },
  computed: {
    project() {
      if (!eventBus.project) {
        let project = {
          department: [],
        };
        return project;
      }
      return eventBus.project;
    },
  },
  mounted() {
    if (Object.keys(this.project).length == 1) {
      this.$router.push("/portfolio");
    }
    initFlowbite();
    setTimeout(() => {
      this.loading = false;
    }, 1000);

    if (this.project.department.length > 0) {
      const carouselInner = document.querySelector("[data-carousel-inner]");
      const items = document.querySelectorAll("[data-carousel-inner] > div");
      const nextButton = document.getElementById("next-slide");
      const prevButton = document.getElementById("prev-slide");

      let index = 0;
      let itemsPerSlide = window.innerWidth < 768 ? 2 : 3;
      let interval;

      function updateCarousel() {
        const translateX = -index * (100 / itemsPerSlide); // Geser 1 item per slide
        carouselInner.style.transform = `translateX(${translateX}%)`;
      }

      function nextSlide() {
        if (index < items.length - 3) {
          index++;
        } else {
          index = 0; // Kembali ke awal saat sudah di akhir
        }
        updateCarousel();
      }

      function prevSlide() {
        if (index > 0) {
          index--;
        } else {
          index = items.length - 3; // Balik ke item terakhir
        }
        updateCarousel();
      }

      function startAutoSlide() {
        interval = setInterval(nextSlide, 3000); // Ganti slide setiap 3 detik
      }

      function stopAutoSlide() {
        clearInterval(interval);
      }
      window.addEventListener("resize", () => {
        itemsPerSlide = window.innerWidth < 768 ? 2 : 3;
        updateCarousel();
      });
      // Event listener untuk tombol next & prev
      nextButton.addEventListener("click", () => {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
      });

      prevButton.addEventListener("click", () => {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
      });

      updateCarousel();
      startAutoSlide();
    }
  },
};
</script>
