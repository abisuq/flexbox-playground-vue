import Vue from 'vue'
import App from './App'
import {Button, Select, Input, Slider, Tooltip, Radio, RadioGroup, Option} from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
[Button, Select, Input, Slider, Tooltip, Radio, RadioGroup, Option].forEach(c => Vue.use(c))
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
