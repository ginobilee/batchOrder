<template>
  <div class="brief">
    <ul>
      <li v-for="(value, key) in info" :key="key">
        <label>{{key}}</label>: <span>{{value}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Brief",
  props: {
    info: Object
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
  text-align: left;
}
</style>
