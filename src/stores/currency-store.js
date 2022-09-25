import { defineStore } from 'pinia';
import axios from "axios";

export const useCurrencyStore = defineStore('currency', {
  actions: {
    fetchCurrency(symbol, date) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://localhost:3000/get-latest-currency?symbol=${symbol}&date=${date}`)
          .then((response) => {
            console.log(response);
            this.currency = response.data
            resolve()
          })
          .catch((err) => {
            console.log(err);
            reject()
          })
      })
    }
  },
  state: () => ({
    currency: {},
  }),
  getters: {
    getCurrency: (state) => state.currency
  },
});
