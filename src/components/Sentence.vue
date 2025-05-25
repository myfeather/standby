<template>
  <div class="container">
    <p>{{ sentence }}</p>
    <ins>{{ detail }}</ins>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import ClipboardJS from 'clipboard'
import Button from './Button.vue'

const props = withDefaults(defineProps<{
  provider?: string
}>(), {
  provider: 'afeather'
})

let sentence = ref('正在加载...')
let detail = ref('(๑•.•๑)')
let isLoading = ref(false)
let clipboard: ClipboardJS | null = null
let responseData = ref<any>(null)

const fetchSentence = async () => {
  if (isLoading.value) return
  isLoading.value = true
  sentence.value = '加载中...'
  detail.value = '(๑•.•๑)'

  try {
    if (props.provider === 'afeather') {
      const response = await fetch('https://api.afeather.org/v0/sentence/get')
      responseData.value = await response.json()
      sentence.value = responseData.value.sentence
      const source = responseData.value.source ? `「${responseData.value.source}」` : ''
      const author = responseData.value.author || ''
      detail.value = `${source} ${author}`.trim()
    } else if (props.provider === 'hitokoto') {
      const response = await fetch('https://v1.hitokoto.cn')
      responseData.value = await response.json()
      sentence.value = responseData.value.hitokoto
      const from = responseData.value.from ? `「${responseData.value.from}」` : ''
      const fromWho = responseData.value.from_who || ''
      detail.value = `${from} ${fromWho}`.trim()
    } else {
      sentence.value = '未知的文案源'
      detail.value = '(╥﹏╥)'
    }
  } catch (error) {
    console.error('获取句子失败:', error)
    sentence.value = '获取句子失败'
    detail.value = '(╥﹏╥)'
  } finally {
    isLoading.value = false
  }
}

const refresh = fetchSentence

const copy = () => {
  if (!sentence.value || !responseData.value) return
  if (!clipboard) {
    clipboard = new ClipboardJS('.copy', {
      text: () => sentence.value,
    })

    clipboard.on('success', () => {
    })

    clipboard.on('error', () => {
    })
  }
}

onMounted(() => {
  fetchSentence()
})

onUnmounted(() => {
  clipboard?.destroy()
})
</script>

<style scoped>
p,
ins {
  text-decoration: none;
  color: #4e4e4e;
  font-family: '130-SS Zhui Guang Shou Xie Ti';
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

p {
  font-size: 2em;
}

ins {
  font-size: 1em;
}

.container {
  height: fit-content;
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  justify-content: center;
  align-items: flex-end;
  transition: all 0.3s ease-in-out;
  border: 1px solid rgba(255, 255, 255, 0);
  border-radius: 0.25em;
  background-color: rgba(255, 255, 255, 0);
  cursor: default;
}
</style>
