<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const movie = ref({});
const isLoading = ref(true);
const route = useRoute();

onMounted(async () => {
  const response = await fetch(
    `http://localhost:3000/movies/${route.params.id}`
  );
  movie.value = await response.json();
  isLoading.value = false;
});
</script>

<template>
  <section class="bg-white dark:bg-gray-900 m-6 p-4">
    <div v-if="isLoading" class="flex justify-center">
      <div
        class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"
      ></div>
    </div>
    <div v-else class="flex justify-center">
      <div
        class="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row"
      >
        <div class="flex justify-center xl:w-1/2">
          <img
            class="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-md"
            :src="movie?.poster"
            :alt="movie?.title"
          />
        </div>
        <div
          class="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0"
        >
          <h2
            class="text-3xl font-bold tracking-tight text-gray-800 dark:text-white"
          >
            {{ movie?.title }}
          </h2>
          <span class="m-2 p-2 bg-slate-300 text-slate-800 rounded-md">{{
            movie?.year
          }}</span>
          <span class="m-2 p-2 bg-slate-300 text-slate-800 rounded-md">{{
            movie?.runtime
          }}</span>

          <div class="mt-6 sm:-mx-2">
            <div
              class="inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2"
            >
              <a
                href="#"
                class="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-gray-800 uppercase cursor-pointer"
              >
                <span class="mx-2">watch online</span>
              </a>
            </div>
            <div
              class="inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2"
            >
              <a
                href="#"
                class="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-violet-900 uppercase cursor-pointer"
              >
                <span class="mx-2">download</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
