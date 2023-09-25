<template>
   <div>
      <p>Email</p>
      <input type="email" class="input email radioborder" v-model="inputValue">
   </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useUserStore from '~/store/user'
import { mapState } from 'pinia'

export default defineComponent({
   name: "EmailInput",
   data() {
      return {
         inputValue: String
      }
   },
   computed: {
      ...mapState(useUserStore,{
         myOwnName: 'user',
         user: (store) => store.user,
         setUser: (store) => store.setUser
      })
   },
   methods: {
      
   }
})
</script>

<style scoped>

</style>