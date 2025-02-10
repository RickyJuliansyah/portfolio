<template>
  <div
    class="grid xl:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 w-full h-screen"
  >
    <!-- Left Side -->
    <div class="xl:col-span-3 md:col-span-4 sm:col-span-12 relative z-10">
      <Transition name="fade" mode="out-in">
        <div v-if="loading">
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
            class=" bg-cover bg-center xs:bg-top w-full h-full absolute"
          :style="`background-image: url('/portfolio/images/contact.png')`"
            ></div>
          <div
            class="xl:hidden absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-80"
          ></div>
          <div
            class="h-64 sm:h-110 md:h-full xs:h-100 lg:h-full opacity-0"
          ></div>
        </div>
      </Transition>
    </div>

    <!-- Right Side -->
    <div class="xl:col-span-9 md:col-span-8 sm:col-span-12 m-4">
      <!-- Header -->
      <AppHeader></AppHeader>

      <!-- Title -->
      <h1
        class="font-extra-bold xl:text-7xl md:text-5xl xs:text-4xl xl:mt-12 xs:mt-4 mb-6"
      >
        CONTACT
      </h1>

      <!-- List Contact -->
      <div class="grid grid-cols-12 gap-2 xs:mb-4">
        <div
          class="text-center xl:col-span-11 xs:col-span-12"
          v-for="data in contact"
          :key="data.id"
        >
          <a
            :href="data.link"
            class="button my-4 w-full bg-neutral hover:bg-blue-800 hover:text-neutral focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center relative"
            target="_blank"
          >
            <div class="relative w-full">
              <Transition name="fade" mode="out-in">
                <div v-if="loading">
                  <div class="flex gap-4 items-center">
                    <div
                      class="flex items-center justify-center w-28 flex-shrink-0 h-22 bg-gray-300 rounded-md animate-pulse"
                    ></div>
                    <div class="flex flex-col justify-center">
                      <div
                        class="h-10 bg-gray-300 rounded-full  w-62"
                      ></div>
                    </div>
                  </div>
                </div>
                <div v-else>
                  <div class="flex gap-4 items-center">
                    <div
                      class="rounded-md md:w-22 md:h-22 xs:w-12 flex justify-center items-center"
                    >
                      <div
                        v-html="data.icon"
                        class="w-16 h-16 object-contain"
                      ></div>
                    </div>
                    <h2
                      class="lg:text-3xl xs:text-xs text-left pl-4 font-semi-bold"
                    >
                      {{ data.name }}
                    </h2>
                  </div>
                </div>
              </Transition>

              <svg
                class="rtl:rotate-180 md:w-9 md:h-9 xs:w-6 absolute right-10 top-1/2 transform -translate-y-1/2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";

export default {
  components: {
    AppHeader,
  },
  data() {
    return {
      loading: true,
      contact: [
        {
          id: 1,
          name: "Ricky Juliansyah",
          link: "https://www.linkedin.com/in/rickyjuliansyah/",
          icon: `<svg class="w-full h-full text-gray-800 dark:text-white hover:text-white" 
                      aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
                      width="24" height="24" fill="#1798E2" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
                  <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                </svg>`,
        },
        {
          id: 2,
          name: "rickyjuliansyah7@gmail.com",
          link: "mailto:rickyjuliansyah7@gmail.com?subject=Inquiry&body=Hello, I have a question",
          icon: `<svg class="w-full h-full text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#1798E2" viewBox="0 0 24 24">
  <path d="M17 6h-2V5h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2h-.541A5.965 5.965 0 0 1 14 10v4a1 1 0 1 1-2 0v-4c0-2.206-1.794-4-4-4-.075 0-.148.012-.22.028C7.686 6.022 7.596 6 7.5 6A4.505 4.505 0 0 0 3 10.5V16a1 1 0 0 0 1 1h7v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h5a1 1 0 0 0 1-1v-6c0-2.206-1.794-4-4-4Zm-9 8.5H7a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Z"/>
</svg>
`,
        },
        {
          id: 3,
          name: "@rickyjuliansyah",
          link: "http://instagram.com/rickyjuliansyah",
          icon: `<svg class="w-full h-full text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#" viewBox="0 0 24 24">
  <path fill="#1798E2" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
</svg>
`,
        },
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
