<script setup lang="ts">
const title = "Adventure Page"
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <NuxtLink to="/">Back to home</NuxtLink>
    <Games/>
  </div>
</template>

