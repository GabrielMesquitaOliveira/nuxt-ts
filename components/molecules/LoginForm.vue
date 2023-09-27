<template>
   <form class="login-form box radioborder">
      <h1 class="heading-level-1">Seja bem-vindo</h1>
      <EmailInput v-model="emailInput" @type-mail="receiveMail"/>
      <PasswordInput v-model="passwordInput" @type-pass="receivePass"/>
      <button @click="login" class="button u-width-full-line radioborder">logar como savio</button>
      <p v-if="user.name && user.password">{{ user.name }} e {{ user.password }}</p>
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useUserStore from '@/store/user'
import { mapState, mapActions } from 'pinia'

export default defineComponent({
   name: "LoginForm",
   data() {
      return {
        emailInput: '',
        passwordInput: ''
      }
    },
    computed: {
      ...mapState(useUserStore, {
        myOwnName: 'user',
        user: (store) => store.user,
        tenantID: (store) => store.user.tenantId
      }),
    },
    methods: {
      ...mapActions(useUserStore, ['setUser','generateTenantId']),
      login() {
        const typedUser = {
          name: this.emailInput,
          password: this.passwordInput
        }
        console.log(typedUser)
        this.setUser(typedUser);
        this.generateTenantId();
      },
      receivePass(pass: string) {
        this.passwordInput = pass
      },
      receiveMail(mail: string) {
        this.emailInput = mail
      }
    },
})
</script>

<style lang="css">
  
</style>