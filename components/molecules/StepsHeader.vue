<template>
  <div>
    <h2 class="step-title heading-level-2">{{ stepTitle }}</h2>
    <StepBar :step="stepCount" />
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
  div > h2.step-title {
    color: #159947;
  }
</style>
