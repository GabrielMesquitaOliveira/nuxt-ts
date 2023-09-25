<template>
  <div>
    <p>Senha</p>
    <input
      type="password"
      class="input password radioborder"
      @change="$emit('typePass',inputModel)"
      v-model="inputModel"
    />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
   name: 'PasswordInput',
   emits: ['typePass'],
    data() {
      return {
        inputModel: this.passwordValue,
      }
    },
  })
</script>

<style scoped></style>
