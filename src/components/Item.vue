<template>
  <div class="item" :style="style">
    <div class="header">
      <span class="count">{{ count + 1 }}</span>
      <span @click="removeItem" class="remove el-icon-circle-close"></span>
    </div>
    <div class="property">
      <el-tooltip effect="light" content="order">
        <el-input size="small" type="number" v-model="style.order"></el-input>
      </el-tooltip>
    </div>
    <div class="property">
      <el-tooltip effect="light" content="flex-grow">
        <el-input size="small" type="number" v-model="style['flex-grow']" min="0"></el-input>
      </el-tooltip>
    </div>
    <div class="property">
      <el-tooltip effect="light" content="flex-shrink">
        <el-input size="small" type="number" v-model="style['flex-shrink']" min="0"></el-input>
      </el-tooltip>
    </div>
    <div class="property">
      <el-tooltip effect="light" content="flex-basis">
        <el-input size="small" v-model="style['flex-basis']"></el-input>
      </el-tooltip>
    </div>
    <div class="property">
      <el-tooltip effect="light" content="align-self">
        <el-select size="small" v-model="style['align-self']" placeholder="auto">
          <el-option
            v-for="item in ['auto' ,'flex-start', 'flex-end', 'center', 'baseline']"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
      </el-tooltip>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'item',
    props: ['count'],
    data () {
      return {
        style: {
          'flex-grow': 0,
          'flex-basis': 'auto',
          'flex-shrink': 1,
          'order': 0,
          'align-self': 'auto'
        }
      }
    },
    methods: {
      removeItem () {
        this.$emit('removeItem')
      }
    }
  }
</script>
<style scoped>
.item {
  background: #fff;
  margin: 0 5px 5px 0;
  display: flex;
  flex-direction: column;
  padding: 5px;
}
.header {
  display: flex;
  justify-content: space-between;
}
.header span {
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
}
.count {
  background: #20a0ff;
  color: #fff;
  border-radius: 50%;
}
.remove {
  color: #33c36f;
  cursor: pointer;
  font-size: 22px;
}
.property {
  margin: 10px;
}

</style>
