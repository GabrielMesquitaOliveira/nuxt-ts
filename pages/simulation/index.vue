<template>
  <div class="token-body">
    <NuxtLayout name="steps-layout" stepTitle="Nova ficha" :stepCount="1">
      <component :is="FirstStep"></component>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const FirstStep = resolveComponent('StepOneForm');
</script>
<script lang="ts">
  defineComponent({
    data() {
      return {
        show: true
      }
    },
  })
</script>

<style scoped>
  .token-body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
