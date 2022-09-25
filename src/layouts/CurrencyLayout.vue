<template>
  <div class="q-pa-md container">
    <div class="q-gutter-y-md" style="max-width: 720px">
      <q-card>
        <div class="header_container">
          <div class="header_top">
            Курс EUR на 2020.01.19
          </div>
          <div class="header_bar">
            <q-tabs
              v-model="tab"
              inline-label
              outside-arrows
              mobile-arrows
              indicator-color="transparent"
              active-bg-color="white"
              active-color="black"
            >
              <q-tab
                :name="symbol.name"
                :label="symbol.name"
                class="rounded-borders"
                v-for="symbol in symbols"
                :key="symbol.index"
              />
            </q-tabs>
          </div>
        </div>
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel
            :name="symbol.name"
            class="row q-col-gutter-md tab_panels"
            v-for="symbol in symbols"
            :key="symbol.index"
          >

              <div class="col-6">
                <q-input v-model="date" mask="date" :rules="['date']" style="width: 150px" dense>
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                        <q-date v-model="date">
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Close" color="primary" flat />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </div>
              <div class="col-6 q-pb-lg">
                <div class="row justify-end">
                  <div class="col-xs-7 q-pr-sm col-sm-2">
                    <q-input
                      v-model="value"
                      input-class="text-right"
                      dense
                      class="value_input"
                      mask="###############"
                    />
                  </div>
                  <div class="col-2 text-right q-pt-sm q-pr-sm text-grey-6">
                    {{symbol.name.toUpperCase()}}
                  </div>
                </div>
              </div>

            <currency-card
              :symbols="page"
              :value="Number(value)"
              :base-currency="baseCurrency"
            />
            <div class="col-12 flex justify-center q-pt-xl">
              <q-btn
                :color="pageNext.start ? 'white' : 'grey-4'"
                :text-color="pageNext.start ? 'black' : 'grey-7'"
                label="Назад"
                class="q-mr-md"
                icon="navigate_before"
                @click="prevPage"
                :disable="!pageNext.start"
              />
              <q-btn
                color="white"
                text-color="black"
                label="Далее"
                icon-right="navigate_next"
                @click="nextPage"
              />
            </div>
          </q-tab-panel>

        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script>
import CurrencyCard from "components/CurrencyCard.vue";

export default {
  name: "CurrencyLayout",
  components: { CurrencyCard },
  computed: {
    page() {
      return this.symbols.slice(this.pageNext.start, this.pageNext.end)
    }
  },
  data() {
    return {
      tab: "usd",
      symbols: [
        { name: "usd", value: 400 },
        { name: "uzs", value: 100 },
        { name: "rub", value: 150 },
        { name: "aud", value: 129 },
        { name: "cad", value: 500 },
        { name: "gbp", value: 420 },
        { name: "jpy", value: 230 },
        { name: "hrk", value: 700 },
        { name: "eur", value: 120 }
      ],
      pageNext: {
        start: 0,
        end: 4,
      },
      value: 1,
      baseCurrency: 'EUR',
      date: new Date().toISOString()
    };
  },
  methods: {
    nextPage() {
      this.pageNext.start +=  4
      this.pageNext.end +=  4
    },
    prevPage() {
      if (this.pageNext.start) {
        this.pageNext.start -=  4
        this.pageNext.end -=  4
      }
    }
  }
};
</script>

<style scoped>
.container {
  color: #2B2D33;
}

.header_container {
  background: #FFE782;
  height: 100px;
}

.header_top {
  font-size: 21px;
  font-family: Roboto, sans-serif;
  padding: 15px;
}

.header_bar {
  color: #CCAE68;
}
.tab_panels {
  margin-left: -8px;
}
</style>
