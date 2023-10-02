<template>
  <form class="login-form box radioborder">
    <h1 class="heading-level-1">Seja bem-vindo</h1>
    <div class="form-inputs">
      <EmailInput v-model="emailInput" @type-mail="receiveMail" />
      <PasswordInput v-model="passwordInput" @type-pass="receivePass" />
      <button @click="login" class="button u-width-full-line submit">
        Entrar
      </button>
    </div>
  </form>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import useUserStore from '@/store/user'
  import { mapState, mapActions } from 'pinia'

  export default defineComponent({
    name: 'LoginForm',
    data() {
      return {
        emailInput: '',
        passwordInput: '',
      }
    },
    computed: {
      ...mapState(useUserStore, {
        myOwnName: 'user',
        user: (store) => store.user,
        tenantID: (store) => store.user.tenantId,
      }),
    },
    methods: {
      ...mapActions(useUserStore, ['setUser', 'generateTenantId']),
      login() {
        event?.preventDefault();
        const typedUser = {
          name: this.emailInput,
          password: this.passwordInput,
        }
        console.log(typedUser)
        this.setUser(typedUser)
        this.generateTenantId()
      },
      receivePass(pass: string) {
        this.passwordInput = pass
      },
      receiveMail(mail: string) {
        this.emailInput = mail
      },
    },
  })
</script>

<style scoped>
  form.login-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
  }
  form.login-form > h1.heading-level-1 {
    color: #159947;
    font-family: 'Poppins';
  }
  button.submit {
    border: none;
    background-color: #159947;
  }
  form.login-form > div.form-inputs {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
</style>
