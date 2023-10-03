import { defineStore } from 'pinia';

export const usestepsStore = defineStore('steps', {
   state: () => ({
      steps: [
         {
            count: 1,
            title: 'Nova ficha'
         },
         {
            count: 2,
            title: 'Dados da simulação'
         }
      ],
      currentStep: 1
   }),
   getters: {
      getCurrentStep(): number {
         return this.currentStep
      },
      getSteps():Array<object> {
         return this.steps
      }
   },
   actions: {
      nextStep() {
         navigateTo('/')
         if(this.currentStep == this.steps.length) {
            this.currentStep = 1;
         } else if (this.currentStep < this.steps.length) {
            this.currentStep++
         } else {
            window.alert("erro no contador de passos, voltando para a tela inicial...");
            this.currentStep = 1;
         }
      }
   },
});