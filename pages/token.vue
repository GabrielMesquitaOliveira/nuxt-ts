<template>
   <div>
     <h1>create your token</h1>
     <input type="text" v-model="typedCpf" />
     <button @click="generateToken">generate token</button>
     <div>
     </div>
   </div>
 </template>
 
 <script lang="ts">
   import { defineComponent } from 'vue'
   import useDropdownStore from '~/store/dropdowns'
   import { mapActions, mapState } from 'pinia'
 
   export default defineComponent({
     setup() {
       const dropdownsStore = useDropdownStore()
       return {
         dropdownsStore,
       }
     },
     data() {
       return {
         typedCpf: ''
       }
     },
     computed: {},
     methods: {
       ...mapActions(useDropdownStore, [
         'getDropDown',
         'getOptions',
         'setOptions',
       ]),
       generateToken() {
         let cpf: number | void = this.convertCpf(this.typedCpf)
         if (typeof cpf != 'number') {
         } else if (this.checkCpf(cpf)) {
           
         }
       },
       convertCpf(cpf: string): number | void {
         try {
           if (isNaN(Number(cpf))) {
             throw 'O cpf precisa ser um número'
           } else if (typeof Number(cpf) == 'number') {
             return Number(cpf)
           }
         } catch (error) {
           window.alert(error)
         }
       },
       checkCpf(cpf: number): boolean | void {
         try {
           if (String(cpf).length < 11) {
             throw 'cpf incompleto'
           } else if (String(cpf).length > 11) {
             throw 'Um cpf possui no máximo 11 digitos'
           } else {
             return true
           }
         } catch (error) {
           window.alert(error)
         }
       },
       placeOptions() {
          return this.getOptions('marcas')
       }
     },
   })
 </script>
 
 <style scoped></style>