<template>
  <div class="grid grid-cols-12 w-full mx-auto mt-4 xl:px-20 md:px-20 xs:px-4">
    <!-- Header -->
    <AppHeader></AppHeader>

    <!-- Title -->
    <h1
      class="col-span-12 xs:text-center md:text-left font-extra-bold xl:text-5xl md:text-5xl xs:text-4xl xl:mt-4 xs:mt-14 mb-2"
    >
      WORK EXPERIENCE
    </h1>

    <!-- Experience 1 -->
    <div
      v-for="data in experience"
      :key="data.id"
      class="m-2 block xl:col-span-6 lg:col-span-6 xs:col-span-12 p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100"
    >
      <Transition name="fade" mode="out-in">
        <div v-if="loading">
          <div class="flex gap-4 items-center">
            <div
              class="flex items-center justify-center w-28 flex-shrink-0 h-22 bg-gray-300 rounded-md animate-pulse"
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
            <div class="flex flex-col justify-center">
              <div
                class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-60 mb-4"
              ></div>
              <div
                class="h-3.5 w-full bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"
              ></div>
              <div
                class="h-3.5 w-42 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"
              ></div>
            </div>
          </div>
          <div class="flex xs:block xs:col-span-12 gap-1 items-center mt-3">
            <div class="flex gap-1">
              <div
                v-for="i in 4"
                :key="i"
                class="h-6 w-20 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-3"
              ></div>
            </div>
          </div>
        </div>

        <div v-else>
          <div class="flex gap-4 items-center">
            <!-- Gambar Logo -->
            <div class="bg-neutral rounded-md h-22">
              <img
                :src="`/portfolio/images/experience/${data.pathImage}-logo.webp`"
                :alt="`${data.pathImage} logo`"
                class="p-2 h-full w-28 object-contain"
              />
            </div>

            <!-- Teks -->
            <div class="flex flex-col justify-center">
              <h3 class="md:text-2xl xs:text-base font-semi-bold">
                {{ data.position }}
              </h3>
              <h4 class="xs:text-tiny md:text-base">{{ data.company }}</h4>
              <h4 class="text-neutral-500 md:text-base xs:text-tiny">
                {{ data.duration }}
              </h4>
            </div>
          </div>

          <!-- Technology -->
          <div class="flex xs:block xs:col-span-12 gap-1 items-center mt-3">
            <PillsButton v-for="tech in data.technology" :key="tech.name">
              {{ tech.name }}
            </PillsButton>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script>
import PillsButton from "../components/PillsButton.vue";
import AppHeader from "../components/AppHeader.vue";

export default {
  components: {
    PillsButton,
    AppHeader,
  },
  data() {
    return {
      loading: true,
      experience: [
        {
          id: 1,
          position: "Software Developer",
          pathImage: "maj",
          duration: "April 2022 - Now",
          company: "PT Mekar Armada Jaya",
          technology: [
            { name: "Vue JS" },
            { name: "Codeigniter 3" },
            { name: "MySQL" },
            { name: "Vuetify" },
            { name: "Socket.IO" },
            { name: "bitbucket" },
          ],
        },
        {
          id: 2,
          position: "IT Staff",
          pathImage: "sai",
          duration: "January 2021 - April 2022",
          company: "PT Sriwijaya Agro Industri (PERSERODA)",
          technology: [
            { name: "Codeigniter 4" },
            { name: "MySQL" },
            { name: "Photoshop" },
            { name: "Corel Draw" },
          ],
        },
        {
          id: 3,
          position: "Head of Department Student Association",
          pathImage: "hmj",
          duration: "February 2019 - February 2020",
          company: "Himpunan Mahasiswa Jurusan Manajemen Informatika POLSRI",
          technology: [
            { name: "Leadership" },
            { name: "Time Management" },
            { name: "Problem Solving" },
            { name: "Team Collaboration" },
          ],
        },
        {
          id: 4,
          position: "Second Vice President",
          pathImage: "lks",
          duration: "May 2019 - May 2022",
          company:
            "Pengurus Bersama Ikatan Alumni Latihan Kepemimpinan Siswa Kota Palembang",
          technology: [
            { name: "Leadership" },
            { name: "Time Management" },
            { name: "Problem Solving" },
            { name: "Team Collaboration" },
          ],
        },
        {
          id: 5,
          position: "Head of Flag Ceremony Team",
          pathImage: "paskibra",
          duration: "March 2015 - March 2016",
          company: "Pasukan Pengibar Bendera SMK Negeri 3 Kota Palembang",
          technology: [
            { name: "Leadership" },
            { name: "Time Management" },
            { name: "Problem Solving" },
            { name: "Team Collaboration" },
          ],
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
