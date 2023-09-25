<template>
   <div>
      <p>Senha</p>
      <input type="password" class="input password radioborder" v-model="inputModel" @update="updateValue">
   </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
   props: {
      inputValue: String
   },
   data() {
      return {
         inputModel: this.passwordValue
      }
   },
   methods: {
      updateValue() {
         this.$emit('update',this.inputModel)
      }
   }
})
</script>

<style scoped>

</style>