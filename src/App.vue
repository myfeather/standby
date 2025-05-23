<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <main>
      <RouterView/>
    </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100dvh;
  width: 100dvw;
  background-color: rgb(245, 245, 245);
}
</style>
