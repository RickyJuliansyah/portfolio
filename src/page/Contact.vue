<template>
  <!-- Header -->
  <div class="grid md:grid-cols-8 xl:grid-cols-8">
    <h3
      class="col-span-6 content-center xl:inline-block md:inline-block xs:hidden"
    >
      <span class="font-black">Ricky Juliansyah</span> - Full Stack Web
      Developer
    </h3>
    <div
      class="col-span-2 flex sm:justify-start xl:justify-center md:justify-end xl:static md:static xs:absolute xs:top-4 xs:left-4 xs:z-10"
    >
      <img src="../assets/images/logo.png" class="w-10" alt="logo" />
    </div>

    <!-- Mobile menu button-->
    <div class="xs:absolute xs:top-4 xs:right-4 xs:z-10">
      <button
        type="button"
        class="relative inline-flex items-center justify-center rounded-md p-2 text-neutral hover:bg-primary hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset sm:block md:hidden"
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
      class="rounded-xl hidden absolute top-16 z-10 right-4 bg-primary"
    >
      <div class="space-y-1 p-2" id="link">
        <a
          href="#"
          class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
          aria-current="page"
          >ABOUT ME</a
        >
        <a
          href="#"
          class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >WORK EXPERIENCE</a
        >
        <a
          href="#"
          class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >PORTFOLIO</a
        >
        <a
          href="#"
          class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >CONTACT</a
        >
      </div>
    </div>
  </div>

  <!-- Title -->
  <h1
    class="font-extra-bold xl:text-7xl md:text-5xl xs:text-4xl xl:mt-12 xs:mt-4 mb-6"
  >
    CONTACT
  </h1>

  <!-- List Contact -->
  <div class="grid grid-cols-12 gap-2 xs:mb-4">
    <div class="text-center col-span-12" v-for="data in contact" :key="data.id">
      <button
        type="button"
        class="bg-neutral w-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center relative"
      >
        <div class="bg-neutral rounded-md h-22">
          <div v-html="data.icon" class="h-full"></div>
        </div>
        {{ data.name }}
        <svg
          class="rtl:rotate-180 w-3.5 h-3.5 ms-2 right-0"
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
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contact: [
        {
          id: 1,
          name: "Ricky Juliansyah",
          icon: `<svg class="w-full h-full text-gray-800 dark:text-white" 
                      aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
                      width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
                  <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                </svg>`,
        },
        {
          id: 2,
          name: "rickyjuliansyah7@gmail.com",
          icon: `<svg class="w-full h-full text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M17 6h-2V5h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2h-.541A5.965 5.965 0 0 1 14 10v4a1 1 0 1 1-2 0v-4c0-2.206-1.794-4-4-4-.075 0-.148.012-.22.028C7.686 6.022 7.596 6 7.5 6A4.505 4.505 0 0 0 3 10.5V16a1 1 0 0 0 1 1h7v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h5a1 1 0 0 0 1-1v-6c0-2.206-1.794-4-4-4Zm-9 8.5H7a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Z"/>
</svg>
`,
        },
        { id: 3, name: "@rickyjuliansyah",  icon: `<svg class="w-full h-full text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
</svg>
`},
      ],
    };
  },
};
</script>
