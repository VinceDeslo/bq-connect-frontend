<script setup lang="ts">
const title = "Home page"
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <span class="buttons">
      <NuxtLink to="/all" style="text-decoration: none;">
        <Button icon="pi pi-angle-right" label="All Games" class="button p-button-rounded p-button-primary" />
      </NuxtLink>
      <NuxtLink to="/adventure" style="text-decoration: none;">
        <Button icon="pi pi-angle-right" label="Adventure Games" class="button p-button-rounded p-button-primary" />
      </NuxtLink>
    </span>
  </div>
</template>

<style>
  .buttons {
    display: flex;
    flex-direction: column;
  }
  .button {
    margin: 0.5rem
  }
</style>