<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink to="/posts/1">Post 1</NuxtLink>
    <NuxtLink to="/posts/2">Post 2</NuxtLink>
  </nav>
</template>

<style>
  nav {
    display: flex;
  }

  nav a {
    padding: 0.25rem;
  }
</style>