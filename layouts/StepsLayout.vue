<template>
  <div class="step-form-body">
    <StepsHeader :step-count="stepCount" :step-title="stepTitle" /> 
    <slot />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    props: {
      stepTitle: String,
      stepCount: Number,
    },
  })
</script>

<style scoped>
  .step-form-body {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 50rem;
    background-color: #ffffff;
    padding: 2rem 4rem;
  }
</style>
