<template>
  <div class="stockTable">
    <table border=1 cellspacing=0 cellpadding=0>
      <tbody>
        <tr>
          <td> 颜色/尺码：</td>
          <td v-for="size in sizes" :key="size">{{size}}</td>
          <td>小记</td>
        </tr>
        <tr v-for="(color, colorIdx) in colors" :key="color">
          <td >{{color}}</td>
          <td v-for="(item, sizeIdx) in stocks[colorIdx]" :key="colorIdx+'-'+sizeIdx">
            <CustomInput :max="item.remain" :key="colorIdx+'-'+sizeIdx" :colorIdx='colorIdx' :sizeIdx='sizeIdx' @overflow="hintOverflow" @successChange="handleChange" />
          </td>
          <td>{{totalBySize[colorIdx]}}</td>
        </tr>
        <tr>
          <td colspan="5">
            总件数:{{total}}，总金额:￥{{total*price}}元。
            <button @click="submit" :disabled="total<=0">提交订单</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import CustomInput from "./CustomInput.vue"
import { deparseStockInfo } from "../common"
export default {
  name: "StockTable",
  components: {
    CustomInput
  },
  props: {
    price: Number,
    colors: Array,
    sizes: Array,
    stocks: Array
  },
  computed: {
    totalBySize: function() {
      return this.stocks.reduce((prev, current) => {
        const sum = current.reduce((p, c) => p + c.choosed, 0)
        return prev.concat([sum])
      }, [])
    },
    total: function() {
      return this.totalBySize.reduce((p, c) => p + c, 0)
    }
  },
  methods: {
    hintOverflow: function(max, el, colorIdx, sizeIdx) {
      window.alert(`超出库存数量${max}！`)
      // '本案例是如果以前有输入值恢复到以前的值，无输入自动输入为库存数量' 这里的 '以前的值' 不是很理解，是从后台取回的值还是？
      el.value = max
      // notify about count change
      this.$emit("successChange", max, colorIdx, sizeIdx)
      el.focus()
    },
    handleChange: function(v, colorIdx, sizeIdx) {
      this.$emit("successChange", v, colorIdx, sizeIdx)
    },
    // todo: 这个操作也可以通知到父组件执行
    submit: function() {
      const choosedItems = deparseStockInfo(this.stocks, this.colors, this.sizes)
      // todo: post choosedItems to server
    }
  }
}
</script>
