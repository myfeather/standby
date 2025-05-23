<template>
    <div>
        <p>{{ time.toLocaleTimeString() }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const time = ref(new Date());

onMounted(() => {
  const intervalId = setInterval(() => {
    time.value = new Date();
  }, 1000);

  onUnmounted(() => {
    clearInterval(intervalId);
  });
});
</script>

<style scoped>
p {
    font-weight: bold;
    font-size: 6em;
    color: #4e4e4e;
}
</style>