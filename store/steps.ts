import { defineStore } from 'pinia';
interface Istep {
   count: number,
   id: string,
   filled: boolean
}

export const useStepsStore = defineStore('steps', {
   state: () => ({
      steps: [
         {
            count: 1,
            id: 'Nova ficha',
            filled: false
         },
         {
            count: 2,
            id: 'Dados da simulação',
            filled: false
         }
      ] as Array<Istep>,
      currentStepCount: 1
   }),
   getters: {
      getCurrentStep(): Istep {
         return this.steps[this.currentStepCount - 1]
      },
      getCurrentStepCount(): number {
         return this.getCurrentStep.count
      },
      getCurrentStepId(): string {
         return this.getCurrentStep.id
      },
      getSteps():Array<Istep> {
         return this.steps
      }
   },
   actions: {
      fillStep(index:number) {
         this.steps[index].filled = true;
      },
      unFillStep(index:number) {
         this.steps[index].filled = false;
      },
      nextStep() {
         if(this.currentStepCount == this.steps.length && !this.getCurrentStep.filled) {
            this.currentStepCount = 1;
         } else if (this.currentStepCount < this.steps.length) {
            this.currentStepCount++
         } else {
            window.alert("erro no contador de passos, voltando para a tela inicial...");
            this.steps.forEach((step,index)=>this.unFillStep(index));
            this.currentStepCount = 1;
         }
      }
   },
});