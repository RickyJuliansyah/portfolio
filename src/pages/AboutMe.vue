<template>
  <div
    class="grid xl:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 w-full h-screen"
  >
    <!-- Left Side -->
    <div class="xl:col-span-3 md:col-span-4 sm:col-span-12 relative z-19">
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
            class="bg-cover bg-center xs:bg-top w-full h-full absolute"
            :style="`background-image: url('/portfolio/images/profile.webp')`"
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
          <div
            class="h-64 sm:h-110 md:h-full xs:h-100 lg:h-full opacity-0"
          ></div>
        </div>
      </Transition>
    </div>

    <!-- Right Side -->
    <div class="xl:col-span-9 md:col-span-8 sm:col-span-12 m-4">
      <AppHeader></AppHeader>

      <!-- Title -->
      <h1
        class="font-extra-bold xl:text-7xl md:text-5xl xs:text-4xl xl:mt-12 xs:mt-4 mb-6"
      >
        ABOUT ME
      </h1>

      <div class="grid xl:grid-cols-8 md:grid-cols-8 xs:grid-cols-1 xl:mb-4">
        <Transition name="fade" mode="out-in">
          <div
            v-if="loading"
            class="xl:col-span-7 md:col-span-8 xs:grid-cols-1 text-justify"
          >
            <div role="status" class="space-y-2.5 animate-pulse max-w-lg">
              <div class="flex items-center w-full">
                <div
                  class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-32"
                ></div>
                <div
                  class="h-3 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"
                ></div>
                <div
                  class="h-3 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"
                ></div>
              </div>
              <div class="flex items-center w-full max-w-[480px]">
                <div
                  class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-full"
                ></div>
                <div
                  class="h-3 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"
                ></div>
                <div
                  class="h-3 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"
                ></div>
              </div>
              <div class="flex items-center w-full max-w-[400px]">
                <div
                  class="h-3 bg-gray-300 rounded-full dark:bg-gray-600 w-full"
                ></div>
                <div
                  class="h-3 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"
                ></div>
                <div
                  class="h-3 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"
                ></div>
              </div>
              <div class="flex items-center w-full max-w-[480px]">
                <div
                  class="h-3 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"
                ></div>
                <div
                  class="h-3 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"
                ></div>
                <div
                  class="h-3 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"
                ></div>
              </div>
              <div class="flex items-center w-full max-w-[440px]">
                <div
                  class="h-3 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-32"
                ></div>
                <div
                  class="h-3 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"
                ></div>
                <div
                  class="h-3 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"
                ></div>
              </div>
              <div class="flex items-center w-full max-w-[360px]">
                <div
                  class="h-3 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"
                ></div>
                <div
                  class="h-3 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"
                ></div>
                <div
                  class="h-3 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"
                ></div>
              </div>
            </div>
          </div>
          <div
            v-else
            class="xl:col-span-7 md:col-span-8 xs:grid-cols-1 text-justify"
          >
            <p>
              Hello !!, I'm Ricky Juliansyah, I am a graduate with a Diploma in
              Information Management who is currently pursuing a Bachelor's
              degree in Information Technology. With over 3 years of experience
              as a Full Stack Web Developer, I have been involved in various web
              application development projects, one of which was developing a
              web-based daily work reporting system to improve efficiency in the
              Stamping and Welding department. I am always committed to making
              meaningful contributions to every project I work on.
            </p>
          </div>
        </Transition>
      </div>

      <!-- CTA -->
      <div class="flex gap-x-6 xs:mt-4">
        <a
          class="xs:py-4 xs:px-8 md:py-4 xl:px-16 rounded-md cursor-pointer bg-primary text-center text-md font-semibold text-white shadow-xs hover:text-neutral-900 hover:bg-secondary hover:outline-1 hover:outline-primary"
          href="https://drive.google.com/file/d/1cxziuyWZE-NLkruYE83IULpIWREyyqzZ/view?usp=sharing"
          target="_blank"
          variant="primary"
        >
          Get Resume
        </a>
      </div>

      <!-- Sub Title -->
      <h2 class="section-heading">PROGRAMMING SKILLS</h2>

      <!-- Skills -->
      <div
        class="grid xl:grid-cols-8 md:grid-cols-7 xs:grid-cols-3 xl:gap-4 md:gap-2 xs:gap-2 xs:mb-4"
      >
        <div class="text-center" v-for="data in skills" :key="data.id">
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
              <div
                class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-18 my-2 mx-auto"
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
              <h3 class="xl:text-lg md:text-sm">{{ data.nameSkills }}</h3>
              <h5 class="text-neutral-500 text-xs">
                {{ data.duration }} Years
              </h5>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "../components/BaseButton.vue";
import AppHeader from "../components/AppHeader.vue";

export default {
  components: {
    BaseButton,
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
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
};
</script>
