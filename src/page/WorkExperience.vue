<template>
  <div
    id="work"
    class="xl:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 xs:grid-cols-12 w-full mx-auto mt-4 xl:px-20 md:px-20 xs:px-4"
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
      WORK EXPERIENCE
    </h1>

    <!-- Experience 1 -->
    <div id="work" class="grid-cols-12 grid w-full">
      <div
        v-for="data in experience"
        :key="data.id"
        class="m-2 block xl:col-span-6 lg:col-span-6 xs:col-span-12 p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100"
      >
        <div class="flex gap-4 items-center">
          <div class="bg-neutral rounded-md h-22">
            <img
              :src="`/src/assets/images/${data.pathImage}-logo.png`"
              alt="logo maj"
              class="p-2 h-full w-auto object-contain"
              srcset=""
            />
          </div>
          <div class="flex flex-col justify-center">
            <h3 class="md:text-2xl xs:text-base font-semi-bold">
              {{ data.position }}
            </h3>
            <h4 class="xs:text-tiny md:text-base">
              {{ data.company }}
            </h4>
            <h4 class="text-neutral-500 md:text-base xs:text-tiny">
              {{ data.duration }}
            </h4>
          </div>
        </div>
        <!-- Technology -->
        <div class="flex xs:block xs:col-span-12 gap-1 items-center mt-3">
          <button v-for="tech in data.technology" :key="tech.name"
            type="button"
            class="text-primary bg-secondary hover:text-white border border-primary hover:bg-primary font-semi-bold rounded-full text-xs px-2 py-1 text-center me-2 mb-2"
          >
            {{ tech.name }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      experience: [
        {
          id: 1,
          position: "Software Developer",
          pathImage: "maj",
          duration: "April 2022 - Now",
          company: "PT Mekar Armada Jaya",
          technology:[
            {name:"Vue JS"},
            {name:"Codeigniter 3"},
            {name:"MySQL"},
            {name:"Vuetify"},
            {name:"Socket.IO"},
            {name:"bitbucket"},
          ]
        },
        {
          id: 2,
          position: "IT Staff",
          pathImage: "sai",
          duration: "January 2021 - April 2022",
          company: "PT Sriwijaya Agro Industri (PERSERODA)",
          technology:[
            {name:"Codeigniter 4"},
            {name:"MySQL"},
            {name:"Photoshop"},
            {name:"Corel Draw"},
          ]
        },
        {
          id: 3,
          position: "Head of Department Student Association",
          pathImage: "hmj",
          duration: "February 2019 - February 2020",
          company: "Himpunan Mahasiswa Jurusan Manajemen Informatika POLSRI",
          technology:[
            {name:"Leadership"},
            {name:"Time Management"},
            {name:"Problem Solving"},
            {name:"Team Collaboration"},
          ]
        },
        {
          id: 4,
          position: "Second Vice President",
          pathImage: "lks",
          duration: "May 2019 - May 2022",
          company: "Pengurus Bersama Ikatan Alumni Latihan Kepemimpinan Siswa Kota Palembang",
          technology:[
            {name:"Leadership"},
            {name:"Time Management"},
            {name:"Problem Solving"},
            {name:"Team Collaboration"},
          ]
        },
        {
          id: 5,
          position: "Head of Flag Ceremony Team",
          pathImage: "paskibra",
          duration: "March 2015 - March 2016",
          company: "Pasukan Pengibar Bendera SMK Negeri 3 Kota Palembang",
          technology:[
            {name:"Leadership"},
            {name:"Time Management"},
            {name:"Problem Solving"},
            {name:"Team Collaboration"},
          ]
        },
      ],
    };
  },
};
</script>