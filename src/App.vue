<template>
  <div id="app">
    <Brief :info="brief" />
    <StockTable :colors="colors" :sizes="sizes" :stocks="stocks" @successChange="handleChange" :price='price' />
  </div>
</template>

<script>
import Brief from "./components/Brief.vue"
import StockTable from "./components/StockTable.vue"
import { parseStockInfo } from "./common"
// todo: 实际环境中 json 文件代表的数据应该是从后台取的，应该放在 mounted 生命周期中执行
import Stock from "./store.json"
const { title, brand, goodsno, price, availableColor, availableSize, stocks } = Stock
const initialStockInfo = parseStockInfo(stocks, availableColor, availableSize)
export default {
  name: "app",
  data: function() {
    return {
      price: price,
      brief: {
        title,
        price: `¥ ${price}元`,
        goodsno,
        brand
      },
      colors: availableColor,
      sizes: availableSize,
      stocks: initialStockInfo
    }
  },
  components: {
    StockTable,
    Brief
  },
  methods: {
    handleChange: function(v, colorIdx, sizeIdx) {
      this.stocks[colorIdx][sizeIdx].choosed = v
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
