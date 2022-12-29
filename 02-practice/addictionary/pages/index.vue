<script setup>
  const terms = ref(); 

  onMounted(async () => {
    const { result } = await $fetch("/api/query?col=terms"); 
    terms.value = result; 
  })
</script>


<template>
  <div>
    {{ terms }}
  </div>

</template>


<style scoped>


</style>