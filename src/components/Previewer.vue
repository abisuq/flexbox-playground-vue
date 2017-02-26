<template>
  <div class="previewer">
    <h3 class="header">Preview: <el-button type="primary" icon="plus" @click="itemCounts.push(0)">Add Item</el-button></h3>
    <div class="container" :style="value">
      <Item v-for="(count, index) in itemCounts"
      :style="{width: `${value.itemWidth}%`}"
      :count="index"
      @removeItem="itemCounts.splice(index, 1)">
      </Item>
    </div>
  </div>
</template>

<script>
import Item from './Item'
export default {
  name: 'preivewer',
  props: ['value'],
  data () {
    return {
      itemCounts: [0, 0, 0]
    }
  },
  components: {
    Item
  }
}
</script>

<style scoped>
.previewer {
  display: flex;
  flex-direction: column;
  min-height: 700px;
}
.header {
  display: flex;
  justify-content: space-between;
}
.container {
  flex: 1;
  display: flex;
  padding: 5px 0 0 5px;
  background: #20a0ff;
}
</style>
