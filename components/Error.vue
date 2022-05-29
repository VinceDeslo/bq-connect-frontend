<script setup lang="ts">
interface ErrorProps {
  message: string
  retry: Function
}
const props = withDefaults(defineProps<ErrorProps>(), {})
</script>

<template>
  <InlineMessage severity="error">
    {{ message }}
    <Button label="Retry" class="p-button-danger" @click="retry()" />
  </InlineMessage>
</template>