<script setup lang="ts">
import { Game } from '@/data/GameData'
import { Endpoints } from '@/data/Endpoints'

const { data } = useFetch<Game[]>(() => Endpoints.adventure)
</script>

<template>
  <div>
    <ul>
      <li v-for="game in data">
        <b>{{ game.title }}</b>
        <br/>
        {{ game.description }}
      </li>
    </ul>
  </div>
</template>
