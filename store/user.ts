import { defineStore } from "pinia";

interface Iuser {
   name: string,
   password: string,
   tenantId?: string
};

const useUserStore = defineStore('user', {
   state: () => ({
      user: {} as Iuser
   }),

   getters: {
      getUser: (state) => state.user,
      $tenantId: (state) => state.user.tenantId
   },
   actions: {
      setUser(user: Iuser) {
         this.user = user
      },
      async generateTenantId() {
         this.user.tenantId = await $fetch('http://140.238.184.49:3000/signin',{
            method: 'POST',
            body: this.user
         }).then((response: any)=>response.tenantID);
         if (this.user.tenantId) {
            navigateTo('/simulation')
            //TODO: procurar um método melhor para o navigateTo();
         }
      }
   }
});

export default useUserStore;