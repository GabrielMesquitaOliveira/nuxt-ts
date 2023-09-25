<template>
  <div class="login-page">
    <LoginForm/>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import LoginForm from '~/components/molecules/LoginForm.vue'
  //const route = useRouter();

  export default defineComponent({
    components: {
      LoginForm
    }
  })
</script>
<style lang="css">
  div.login-page {
    height: 100vh;
    overflow: hidden;
  }
</style>