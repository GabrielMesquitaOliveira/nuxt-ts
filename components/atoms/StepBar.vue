<template>
  <div class="step-bar-body">
    <p class="steps-count">passo {{ step }} de 4</p>
    <div class="step-bar">
      <div class="step-bar-path">
        <div class="step-bar-filler"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    props: {
      step: Number
    }
  })
</script>

<style scoped>
  div.step-bar-body {
    display: flex;
    flex-direction: column;
  }
  div.step-bar-body > p.steps-count {
    align-self: flex-end;
    margin-bottom: 0.5rem;
  }
  div.step-bar-body > div.step-bar {
    width: 100%;
    height: 1rem;
    display: flex;
    align-items: center;
  }
  div.step-bar-path {
    background-color: rgb(209, 209, 209);
    width: 100%;
    display: flex;
    align-items: center;
    height: 0.4rem;
    border-radius: 1rem;
  }
  div.step-bar-filler {
    width: 25%;
    height: 0.6rem;
    background-color: #159947;
    border-radius: 1rem;
  }
</style>
