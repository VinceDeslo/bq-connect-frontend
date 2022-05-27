<script setup lang="ts">
import { Game } from '@/data/GameData'
import { Endpoints } from '@/data/Endpoints'

const { data: games, pending, error, refresh } = useFetch<Game[]>(Endpoints.all)
</script>

<template>
  <div>
    <p v-if="pending">Loading ...</p>
    <div v-else-if="error">
      <h4>Error occured while fetching</h4>
      <button @click="refresh()">Retry</button>
    </div>
    <GameTable :games="games"/>
  </div>
</template>
