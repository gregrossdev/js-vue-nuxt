<script setup>
import Navbar from '../components/layouts/navbar';
</script>

<template>
  <div class="wrapper">
    <img src="~/assets/nuxt.png" alt="Discover Nuxt 3" />
    <h1>00-basics</h1>
    <Navbar />
    <slot />
  </div>
</template>


<style>
  img {
    width: 4rem;
    height: 4rem;
  }
</style>