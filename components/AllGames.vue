<script setup lang="ts">
import { Game } from '@/data/GameData'
import { Endpoints } from '@/data/Endpoints'

const { data: games, pending, error, refresh } = useFetch<Game[]>(Endpoints.all)
</script>

<template>
  <div>
    <ProgressSpinner v-if="pending"/>
    <Error v-else-if="error" message="Fetching the data failed" :retry="refresh"/>
    <GameTable v-else :games="games"/>
  </div>
</template>
