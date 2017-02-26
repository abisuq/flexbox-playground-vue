<template>
  <div class="editor">
    <div class="item">
      <div class="title">Item Width</div>
      <div class="item-width">
        <label> width: {{ editorValue.itemWidth }}% </label>
        <el-slider class="slider" v-model="editorValue.itemWidth"></el-slider>
      </div>
    </div>
    <div class="item">
      <div class="title">Flex Container <span class="sub">(the <b class="highlight">highlight</b> one is default value)</span></div>
      <div class="properties">
        <div class="property" v-for="(values, name) in flexProperties">
          <div class="name">{{ name }} </div>
          <el-radio-group class="value" v-model="editorValue[name]" v-for="(value, index) in values">
            <el-radio :label="value"><span :class="index === 0 ? 'default-value' : 'other-value'">{{ value }}</span></el-radio>
          </el-radio-group>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="title">FLex Item</div>
      <div class="sub">The children flex properties can be applied at child level, separate for each child. See the results below and change some of their properties. Hover with the mouse pointer or touch the fields to see the property name.</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'editor',
    data () {
      return {
        flexProperties: {
          'flex-direction': ['row', 'row-reverse', 'column', 'column-reverse'],
          'flex-wrap': ['nowrap', 'wrap', 'wrap-reverse'],
          'justify-content': ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
          'align-items': ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'],
          'align-content': ['stretch', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around']
        }
      }
    },
    props: ['editorValue'],
    watch: {
      editorValue: {
        handler: function (val) {
          this.$emit('edited', val)
        },
        deep: true
      }
    }
  }
</script>

<style scoped>
  .item {
    line-height: 2;
    border-bottom: 1px solid #ddd;
    padding: 20px 10px;
  }
  .item .title {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 10px;
  }
  .sub {
    font-size: 12px;
  }
  .highlight {
    color: #20a0ff;
  }
  .item-width {
    display: flex;
    align-items: center;
  }
  .item-width label {
    flex-basis: 15%;
  }
  .item-width .slider {
    flex: 1;
  }
  .properties {
    display: flex;
    justify-content: space-between;
  }
  .properties .name {
    color: #000;
    margin-bottom: 5px;
  }
  .property .value{
    display: block;
    text-indent: .2em;
    cursor: pointer;
    font-size: 12px;
    line-height: 2;
    color: #ccc;
  }
  .property .other-value {
    color: #888;
    font-size: 13px;
  }
  .property .default-value {
    color: #20a0ff;
  }
</style>
