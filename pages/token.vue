<template>
  <div class="token-body">
    <NuxtLayout name="steps-layout" stepTitle="Nova ficha" :stepCount="1">
      <form class="token-form">
        <p class="page-inform">para comerçarmos informe o CPF do cliente</p>
        <input type="text" v-model="typedCpf" placeholder="000.000.000-00" />
        <div class="radio-options">
          <input type="radio" id="cars-option" value="CARROS" name="vehicle"/>
          <label for="cars-option">
              <img src="@/assets/svg/cheveron-left.svg" alt="chevrolet" class="label-icon">
              Carros
          </label>
          <input type="radio" id="motocycle-option" value="MOTOS" name="vehicle"/> 
          <label for="motocycle-option">
            <img src="@/assets/svg/motocycle.svg" alt="moto" class="label-icon">
            Motos</label>
        </div>
        <button @click="generateToken" class="button u-width-full-line">
          <span class="text">Continuar</span>
        </button>
      </form>
    </NuxtLayout>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import useDropdownStore from '~/store/dropdowns'
  import useUserStore from '~/store/user'
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
        typedCpf: '',
      }
    },
    computed: {
      ...mapState(useUserStore, {
        myOwnName: 'user',
        tenantID: (store) => store.getUser.tenantId,
      }),
    },
    methods: {
      ...mapActions(useDropdownStore, [
        'getDropDown',
        'getOptions',
        'setOptions',
      ]),
      generateToken() {
        event?.preventDefault();
        let cpf: number | void = this.convertCpf(this.typedCpf)
        if (typeof cpf != 'number') {
        } else if (this.checkCpf(cpf)) {
          this.placeOptions()
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
        return this.setOptions('marcas', {
          tenantID: this.tenantID,
          tipoProduto: 'CARRO',
        })
      },
    },
  })
</script>

<style scoped>
  .token-body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .token-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .button {
    background-color: #159947;
    border: none;
    display: flex;
    justify-content: center;
  }
  div.radio-options {
    display: flex;
    justify-content: space-between;
  }
  input[type="radio"] {
    display: none;
  }
  div.radio-options > label {
    width: 49%;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
    cursor: pointer;
    border: 1.8px solid #159947;
    font-weight: 900;
    border-radius: 5px;
  }
  input[type="radio"]:checked + label {
    background-color: #1599480b;
  }
</style>
