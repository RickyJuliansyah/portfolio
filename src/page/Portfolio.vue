<template>
  <div
    id="work"
    class="grid grid-cols-12 w-full mx-auto mt-4 xl:px-20 md:px-20 xs:px-4"
  >
    <!-- Header -->
    <h3
      class="col-span-10 content-center xl:inline-block md:inline-block xs:hidden"
    >
      <span class="font-black">Ricky Juliansyah</span> - Full Stack Web
      Developer
    </h3>

    <div class="col-span-2 flex justify-end">
      <img :src="`/src/assets/images/logo.png`" class="w-10" alt="logo" />
    </div>

    <!-- Mobile -->
    <div
      class="bg-white py-2 fixed w-full z-20 top-0 start-0 border-b border-gray-200 flex justify-between xs:px-4 md:hidden"
    >
      <div
        class="col-span-2 sm:justify-start xl:justify-end md:justify-end xl:static md:static"
      >
        <img src="./assets/images/logo.png" class="w-10" alt="logo" />
      </div>
    </div>

    <!-- Title -->
    <h1
      class="col-span-12 font-extra-bold xl:text-5xl md:text-5xl xs:text-4xl xl:mt-4 xs:mt-4 mb-2"
    >
      PORTFOLIO
    </h1>

    <!-- Experience 1 -->
    <div
      v-for="data in portfolio"
      :key="data.id"
      class="m-2 block xl:col-span-4 lg:col-span-6 xs:col-span-12 p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100"
    >
        <div class="bg-neutral rounded-md h-60">
          <img
            :src="`/src/assets/images/${data.pathImage}-logo.png`"
            alt="logo maj"
            class="p-2 h-full w-auto object-contain"
            srcset=""
          />
        </div>
        <h4 class="font-semi-bold my-2">{{ data.nameApplication }}</h4>
      <!-- Technology -->
      <div class="flex xs:block xs:col-span-12 gap-1 items-center">
        <button
          v-for="tech in data.technology"
          :key="tech.name"
          type="button"
          class="text-primary bg-secondary hover:text-white border border-primary hover:bg-primary font-semi-bold rounded-full text-xs px-2 py-1 text-center me-2 mb-2"
        >
          {{ tech.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      portfolio: [
        {
          id: 1,
          nameApplication: "MAJ Integrated System Dashboard (MISD)",
          pathImage: "maj",
          technology: [
            { name: "Vue JS" },
            { name: "Codeigniter 3" },
            { name: "MySQL" },
            { name: "Vuetify" },
            { name: "Socket.IO" },
            { name: "Pinia" },
          ],
        },
        
      ],
    };
  },
};
</script>
