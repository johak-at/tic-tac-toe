<script setup>
const props = defineProps(["number"]);
</script>

<template>
  <div class="field">{{ number }}</div>
</template>

<style scoped>
.field {
  aspect-ratio: 1;
}
</style>
