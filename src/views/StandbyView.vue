<script setup lang="ts">
import Time from "@/components/Time.vue";
import Sentence from "@/components/Sentence.vue";
</script>

<template>
    <div class="home-view">
      <div class="time-container">
        <Time />
      </div>
      <div class="sentence-container">
        <Sentence provider="hitokoto" />
      </div>
    </div>
</template>

<style scoped>
.home-view {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 1em;
}

.sentence-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: fit-content;
  border: 0 2em;
}

</style>
