<script setup>
defineProps({
  movie: {
    type: Object,
  },
});
</script>

<template>
  <RouterLink :to="`/movies/${movie?.id}`">
    <div
      class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="flex justify-center">
        <img class="rounded-t-lg" :src="movie?.poster" :alt="movie?.title" />
      </div>
      <div class="p-5">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ movie?.title }}
        </h5>
        <span class="mr-4">{{ movie?.year }}</span>
        <span>{{ movie?.runtime }}</span>
      </div>
    </div>
  </RouterLink>
</template>
