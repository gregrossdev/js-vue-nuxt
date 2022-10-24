<script setup>
const route = useRoute()
// When accessing /posts/1, route.params.id will be 1
const showId = route.params.id;
</script>

<template>
  <h2>{{ showId }}</h2>
</template>