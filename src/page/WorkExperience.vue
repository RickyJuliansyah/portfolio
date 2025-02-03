<template>
<div id="work"
        class=" xl:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 xs:grid-cols-12 w-full mx-auto mt-4 xl:px-20 md:px-20 xs:px-4">
        <!-- Header -->
        <h3 class="col-span-10 content-center xl:inline-block md:inline-block xs:hidden "><span class="font-black">Ricky
                Juliansyah</span> -
            Full
            Stack Web
            Developer</h3>

        <div class="col-span-2 flex justify-end">
            <img src="./assets/images/logo.png" class="w-10" alt="logo">
        </div>

        <!-- Mobile -->
        <div
            class="bg-white py-2 fixed w-full z-20 top-0 start-0 border-b border-gray-200 flex justify-between xs:px-4 md:hidden">
            <div class="col-span-2 sm:justify-start xl:justify-end md:justify-end xl:static md:static">
                <img src="./assets/images/logo.png" class="w-10" alt="logo">
            </div>

            <!-- Mobile menu button-->
            <div>
                <button type="button"
                    class="relative inline-flex items-center justify-center rounded-md p-2 text-primary  border-2 border-primary hover:bg-primary hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset sm:block md:hidden"
                    aria-controls="mobile-menu" aria-expanded="false" id="mobile-menu-button">
                    <span class="absolute -inset-0.5"></span>
                    <span class="sr-only">Open main menu</span>
                    <!-- Icon when menu is closed -->
                    <svg class="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                        aria-hidden="true" id="open-icon">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <!-- Icon when menu is open -->
                    <svg class="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                        aria-hidden="true" id="close-icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="rounded-xl hidden absolute top-16 z-10 right-4 bg-primary">
            <div class="space-y-1 p-2">
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

        <!-- Title -->
        <h1 class="col-span-12 font-extra-bold xl:text-5xl md:text-5xl xs:text-4xl xl:mt-4 xs:mt-4 mb-2">WORK
            EXPERIENCE
        </h1>

        <!-- Experience 1 -->
        <div
            class="m-2 block lg:col-span-6 xs:col-span-12 p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div class="flex gap-4 items-center">
                <div class="bg-neutral rounded-md h-22">
                    <img src="./assets/images/maj-logo.png" alt="logo maj" class="p-2 h-full w-auto object-contain"
                        srcset="">
                </div>
                <div class="flex flex-col justify-center">
                    <h3 class="md:text-2xl xs:text-base font-semi-bold">Software Developer</h3>
                    <h4 class="xs:text-tiny md:text-base">PT Mekar Armada Jaya Tambun Plant</h4>
                    <h4 class="text-neutral-500 md:text-base xs:text-tiny">April 2022 - Now</h4>
                </div>
            </div>
            <!-- Technology -->
            <div class="flex xs:block xs:col-span-12 gap-1 items-center mt-3">
                <button type="button"
                    class="text-primary bg-secondary hover:text-white border border-primary hover:bg-primary font-semi-bold rounded-full text-xs px-2 py-1 text-center me-2 mb-2 w-22">Vue
                    Js</button>
                <button type="button"
                    class="text-primary bg-secondary hover:text-white border border-primary hover:bg-primary font-semi-bold rounded-full text-xs px-2 py-1 text-center me-2 mb-2">CodeIgniter
                    3</button>
                <button type="button"
                    class="text-primary bg-secondary hover:text-white border border-primary hover:bg-primary font-semi-bold rounded-full text-xs px-2 py-1 text-center me-2 mb-2 w-22">MySQL</button>
                <button type="button"
                    class="text-primary bg-secondary hover:text-white border border-primary hover:bg-primary font-semi-bold rounded-full text-xs px-2 py-1 text-center me-2 mb-2 w-22">Vuetify</button>
                <button type="button"
                    class="text-primary bg-secondary hover:text-white border border-primary hover:bg-primary font-semi-bold rounded-full text-xs px-2 py-1 text-center me-2 mb-2 w-22">Socket.IO</button>
                <button type="button"
                    class="text-primary bg-secondary hover:text-white border border-primary hover:bg-primary font-semi-bold rounded-full text-xs px-2 py-1 text-center me-2 mb-2 w-22">Bitbucket</button>
            </div>
        </div>

    </div>
</template>