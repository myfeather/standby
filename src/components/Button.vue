<template>
  <button class="a-feather-btn" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  type?: string;
  onClick?: (event: MouseEvent) => void;
}>();

const handleClick = (event: MouseEvent) => {
  props.onClick?.(event);
};
</script>

<style scoped>
.a-feather-btn {
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  color: rgb(255, 255, 255);
  border: none;
  border-radius: 1em;
  padding: 0.25em 0.5em;
  font-size: 0.75em;
  cursor: pointer;
  transition: all 0.3s ease;
  user-select: none;
}

.a-feather-btn:hover {
  transform: scale(1.05);
}
</style>
