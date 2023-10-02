<template>
   <div class="step-form-body">
      <h2 class="step-title heading-level-2">{{ stepTitle }}</h2>
      <StepBar :step="stepCount"/>
      <slot/>
   </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
   props: {
      stepTitle: String,
      stepCount: Number
   }
})
</script>

<style scoped>
.step-form-body {
   width: 50rem;
   background-color: #ffffff;
   padding: 2rem 4rem;
}
div > h2.step-title {
   color: #159947;
}
</style>