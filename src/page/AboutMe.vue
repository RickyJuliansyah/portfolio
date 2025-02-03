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
    ABOUT ME
  </h1>

  <div class="grid xl:grid-cols-8 md:grid-cols-8 xs:grid-cols-1">
    <p class="xl:col-span-7 md:col-span-8 xs:grid-cols-1 text-justify">
      Hello !!, I'm Ricky Juliansyah, a Full Stack Web Developer with over 3
      years of experience. I'm skilled in developing website-based applications
      using Vue JS as the frontend and CodeIgniter as the Backend to meet
      company requirements.
    </p>
  </div>

  <!-- CTA -->
  <div class="mt-10 xs:mt-4 flex gap-x-6">
    <a
      href="https://drive.google.com/file/d/1cDMNQEJWnZ4qxpysOaVgRR4c78Kgdrml/view?usp=drive_link"
      target="_blank"
      class="rounded-md bg-primary px-16 xl:py-6 xs:py-4 md:py-4 text-md font-semibold text-white shadow-xs hover:text-neutral-900 hover:bg-secondary hover:border-1 hover:border-primary"
      >Get Resume</a
    >
  </div>

  <!-- Sub Title -->
  <h2 class="font-extra-bold xl:text-4xl md:text-2xl mt-12 mb-6 xs:text-2xl">
    PROGRAMMING SKILLS
  </h2>

  <!-- Skills -->
  <div
    class="grid xl:grid-cols-8 md:grid-cols-7 xs:grid-cols-3 xl:gap-4 md:gap-2 xs:gap-2 xs:mb-4"
  >
    <div class="text-center">
      <div
        class="bg-neutral rounded-md h-24 flex items-center justify-center ease-in-out hover:-translate-y-1 hover:scale-110 transition"
      >
        <img
          src="../assets/images/php-logo.png"
          alt="php logo"
          class="p-2 h-full w-auto object-contain"
        />
      </div>
      <h3 class="xl:text-lg md:text-sm">PHP</h3>
      <h5 class="text-neutral-500 text-xs">3 Years</h5>
    </div>
    <div class="text-center">
      <div
        class="bg-neutral rounded-md h-24 flex items-center justify-center ease-in-out hover:-translate-y-1 hover:scale-110 transition overflow-hidden"
      >
        <img
          src="../assets/images/js-logo.png"
          alt="js logo"
          class="h-22 w-22 object-cover"
        />
      </div>
      <h3 class="xl:text-lg md:text-sm">JAVASCRIPT</h3>
      <h5 class="text-neutral-500 text-xs">2 Years</h5>
    </div>
    <div class="text-center">
      <div
        class="bg-neutral rounded-md h-24 flex items-center justify-center ease-in-out hover:-translate-y-1 hover:scale-110 transition"
      >
        <img
          src="../assets/images/mysql-logo.png"
          alt="php logo"
          class="h-full w-auto object-contain"
        />
      </div>
      <h3 class="xl:text-lg md:text-sm">MySql</h3>
      <h5 class="text-neutral-500 text-xs">3 Years</h5>
    </div>
    <div class="text-center">
      <div
        class="bg-neutral rounded-md h-24 flex items-center justify-center ease-in-out hover:-translate-y-1 hover:scale-110 transition"
      >
        <img
          src="../assets/images/ci-logo.png"
          alt="php logo"
          class="p-2 h-full w-auto object-contain"
        />
      </div>
      <h3 class="xl:text-lg md:text-sm">CodeIgniter</h3>
      <h5 class="text-neutral-500 text-xs">3 Years</h5>
    </div>
    <div class="text-center">
      <div
        class="bg-neutral rounded-md h-24 flex items-center justify-center ease-in-out hover:-translate-y-1 hover:scale-110 transition"
      >
        <img
          src="../assets/images/vuejs-logo.png"
          alt="php logo"
          class="p-2 h-full w-auto object-contain"
        />
      </div>
      <h3 class="xl:text-lg md:text-sm">Vue JS</h3>
      <h5 class="text-neutral-500 text-xs">2 Years</h5>
    </div>
    <div class="text-center">
      <div
        class="bg-neutral rounded-md h-24 flex items-center justify-center ease-in-out hover:-translate-y-1 hover:scale-110 transition"
      >
        <img
          src="../assets/images/bootstrap-logo.png"
          alt="php logo"
          class="p-2 h-full w-auto object-contain"
        />
      </div>
      <h3 class="xl:text-lg md:text-sm">Bootstrap</h3>
      <h5 class="text-neutral-500 text-xs">3 Years</h5>
    </div>
    <div
      class="text-center xs:col-start-2 sm:col-start-2 md:col-auto xl:col-auto"
    >
      <div
        class="bg-neutral rounded-md flex items-center justify-center ease-in-out hover:-translate-y-1 hover:scale-110 transition h-24"
      >
        <img
          src="../assets/images/vuetify-logo.png"
          alt="php logo"
          class="p-2 h-full w-auto"
        />
      </div>
      <h3 class="xl:text-lg md:text-sm">Vuetify</h3>
      <h5 class="text-neutral-500 text-xs">2 Years</h5>
    </div>
  </div>
</template>
