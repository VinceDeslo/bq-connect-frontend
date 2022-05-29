<script setup lang="ts">
import { Game } from '@/data/GameData'
import Column from 'primevue/column';

interface GameTableProps {
  games: Game[] | undefined
}
interface ColumnDef { 
  field: string,
  header: string
}

const props = withDefaults(defineProps<GameTableProps>(), {})
const { games } = toRefs(props);

let firstItem = games?.value?.slice(0, 1) ?? [];
let columns: ColumnDef[] = Object.keys(firstItem[0]).map(key => {
  return { field: key, header: key } as ColumnDef
})
</script>

<template>
  <p v-if="!games">The Games array is empty</p>
  <DataTable v-else :value="games">
    <Column v-for="col in columns" :field="col.field" :header="col.header"/>
  </DataTable>
</template>