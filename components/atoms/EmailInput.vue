<template>
  <div>
    <p>Email</p>
    <input
      type="email"
      class="input email radioborder"
      v-model="inputModel"
      @change="$emit('typeMail', inputModel)"
    />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'EmailInput',
    emits: ['typeMail'],
    data() {
      return {
        inputModel: '',
      }
    },
  })
</script>

<style scoped></style>