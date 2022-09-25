<template>
  <div class="col-xs-12 col-sm-6" v-for="symbol in symbols" :key="symbol.index">
    <q-card class="my-card">
      <q-card-section>
        <div class="value_currency">
          {{ value }} <span class="text-grey-5">{{ baseCurrency }} =</span>
        </div>
        <div class="q-pt-md result_currency">
          {{ (symbol.value * value).toFixed(2) }} <span>{{symbol.name.toUpperCase()}}</span>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "CurrencyCard",
  props: {
    symbols: {
      type: Object,
      require: true
    },
    value: {
      type: Number,
      require: true
    },
    baseCurrency: {
      type: String,
      require: true
    }
  }
};
</script>

<style scoped>
.value_currency {
  font-size: 24px;
}

.result_currency {
  font-size: 48px;
}

.result_currency > span {
  font-size: 24px;
}
</style>
