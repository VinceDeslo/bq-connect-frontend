<script setup lang="ts">
const title = "Home page"
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <ul>
      <Button label="All Games" class="p-button-success">
        <NuxtLink to="/all">All Games</NuxtLink>
      </Button>
      <Button label="Adventure Games" class="p-button-success">
        <NuxtLink to="/adventure">Adventure Games</NuxtLink>
      </Button>

      <!-- <li>
        <NuxtLink to="/all">All Games</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/adventure">Adventure Games</NuxtLink>
      </li> -->
    </ul>
  </div>
</template>

<style>
</style>