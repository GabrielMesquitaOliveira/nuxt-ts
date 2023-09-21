<template>
  <div class="login-page">
    <p v-if="user.name">usuário {{ user.name }} logado!</p>
    <p v-if="user.tenantId"> {{ user.tenantId }} </p>
    <form class="login-form">
      <input type="email" class="input email" v-model="emailInput">
      <input type="password" class="input password" v-model="passwordInput">
    </form>
    <button @click="login" class="button">logar como savio</button>
    <p v-if="emailInput && passwordInput">
      usuário: {{ emailInput }}
      senha: {{ passwordInput }}
    </p>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import useUserStore from '@/store/user'
  import { mapState, mapActions } from 'pinia'
  //const route = useRouter();

  export default defineComponent({
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
        this.setUser(typedUser);
        this.generateTenantId();
      },
    },
  })
</script>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
}
body {
  background-color: rgb(44, 44, 44);
}
</style>