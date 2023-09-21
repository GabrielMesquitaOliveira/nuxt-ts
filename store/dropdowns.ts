import { defineStore } from 'pinia'

interface IdropDown {
  id: string
  options: Array<any>
}
const useDropdownStore = defineStore('dropdowns', {
  state: () => ({
    dropDowns: [
      {
        id: 'marcas',
        options: [],
      },
      {
        id: 'ano/modelo',
        options: [],
      },
      {
        id: 'ano',
        options: [],
      },
      {
        id: '',
      },
    ] as Array<IdropDown>,
  }),

  getters: {
    getAllDropDowns: (state) => state.dropDowns,
  },
  actions: {
    async setOptions(id: string, config: any) {
      if (
        this.dropDowns.find((dropdown) => dropdown.id === id)?.options.length ==
        0
      ) {
        const options = await fetch(`http://140.238.184.49:3000/${id}`, {
          method: 'POST',
          body: JSON.stringify(config),
        })
          .then((response: any) => response.json())
          .then((data) => data.results)
        this.dropDowns
          .find((dropdown) => dropdown.id === id)
          ?.options.push(options)
      }
    },
    getDropDown(id: string) {
      return this.getAllDropDowns.find((dropdown) => dropdown.id === id)
    },
    getOptions(id: string) {
      return this.getAllDropDowns.find((dropdown) => dropdown.id === id)
        ?.options
    },
  },
})

export default useDropdownStore