<template>
  <input
      type="number"
      value=""
      @input="changeInput"
      @change="checkComplete"
      :placeholder="max"
    >
</template>

<script>
import { isNumber } from "../common"
export default {
  name: "CustomInput",
  model: {
    prop: "max",
    event: "change"
  },
  props: {
    max: Number,
    colorIdx: Number,
    sizeIdx: Number
  },
  methods: {
    changeInput: function(e) {
      // 1. 原文档中允许输入小数点，但是并没有将其进行舍入运算，只是取其整数部分；且可以重复输入小数点。这里统一不允许输入小数点
      // 2. 为了禁止输入小数点和e，尝试采用 react 中类似受控组件的方式(:value="value" 以及 @input="oninput")，但是发现在vue中有问题: 不能通过严格控制 this.value 来控制 input 组件的 value; 而是在手动更改 this.value 之前就已经更改了两者
      //    于是选择了不使用 vue 的指令，而用原始的js和dom去控制输入

      const v = e.target.value
      const data = e.data
      if (!isNumber(data)) {
        e.target.value = v.slice(0, -1)
      }
    },
    checkComplete: function(e) {
      const v = parseInt(e.target.value) || 0
      if (v > this.max) {
        this.$emit("overflow", this.max, e.target, this.colorIdx, this.sizeIdx)
      } else {
        // success, update sum
        this.$emit("successChange", v, this.colorIdx, this.sizeIdx)
      }
    }
  }
}
</script>
