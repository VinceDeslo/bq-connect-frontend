<script setup lang="ts">
import { Game } from '@/data/GameData'

interface GameTableProps {
  games: Game[]
}
const props = withDefaults(defineProps<GameTableProps>(), {})
</script>

<template>
  <table class="table">
    <tr>
      <th class="cell" v-for="attr in Object.keys(games[0])">{{ attr }}</th>
    </tr>
    <tr v-for="game in games">
      <td v-for="attr in game">{{ attr ?? "-" }}</td>
    </tr>
  </table>
</template>

<style>
.table {
  font-family: Arial, Arial, Helvetica, sans-serif;
}
.cell {
  border: 1px solid rgb(0, 0, 0);
  text-align: left;
  padding: 5px;
  max-width: 100%;
  white-space: nowrap;
  background-color: lightgrey;
}
</style>