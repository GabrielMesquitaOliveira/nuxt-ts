<template>
  <div class="token-body">
    <NuxtLayout name="steps-layout" stepTitle="Nova ficha" :stepCount="1">
      <StepOneForm/>
    </NuxtLayout>
  </div>
</template>

<script lang="ts">

</script>

<style scoped>
  .token-body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
