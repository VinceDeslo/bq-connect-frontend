<script setup lang="ts">
const title = "Home page"
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <ul>
       <li><NuxtLink to="/all">All Games</NuxtLink></li>
       <li><NuxtLink to="/adventure">Adventure Games</NuxtLink></li>
    </ul>
  </div>
</template>

<style>
</style>