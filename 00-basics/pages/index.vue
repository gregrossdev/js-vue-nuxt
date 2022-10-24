<script setup>
const { data } = await useFetch('/api/hello')
</script>

<template>
  <h2>home page</h2>
  <section>
    Page visits: {{ data.api }}
  </section>
</template>
