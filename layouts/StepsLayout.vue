<template>
  <div class="step-form-body">
    <StepsHeader :step-count="getCurrentStep.count" :step-title="getCurrentStep.id" />
    <slot />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { mapState } from 'pinia';
  import { useStepsStore } from '~/store/steps';

  export default defineComponent({
    props: {
      stepTitle: String,
      stepCount: Number,
    },
    computed: {
      ...mapState(useStepsStore,[
        "getCurrentStep",
      ])
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