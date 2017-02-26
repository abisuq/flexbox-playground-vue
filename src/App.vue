<template>
  <div id="app">
    <h1 class="title">CSS Flexbox Playground</h1>
    <div class="playground">
      <Editor @edited="edited" :editorValue="editorValue"></Editor>
      <Previewer :value="editorValue"></Previewer>
    </div>
  </div>
</template>

<script>
import Editor from './components/Editor'
import Previewer from './components/Previewer'

export default {
  name: 'app',
  components: {
    Editor,
    Previewer
  },
  data () {
    return {
      editorValue: {
        'itemWidth': 20,
        'flex-direction': 'row',
        'flex-wrap': 'nowrap',
        'justify-content': 'flex-start',
        'align-items': 'stretch',
        'align-content': 'stretch'
      }
    }
  },
  methods: {
    edited (val) {
      this.editorValue = val
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: "Consolas","Courier New","Monospace";
  font-size: 14px;
}

@media only screen and (min-width: 1000px) {
  .playground {
    padding: 20px;
    display: flex;
  }
}
.title {
  text-align: center;
  margin: 20px;
  font-size: 30px;
}
.editor {
  flex: 1;
  margin-right: 10px;
}
.previewer {
  flex: 1.2;
}
</style>
