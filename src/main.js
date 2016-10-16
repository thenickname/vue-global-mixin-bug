import Vue from 'vue'
import App from './App'

Vue.mixin( {
  props : [ "myProp" ]
} );

// in the following case the value of modifier will be "bar" instead of "foo" in Hello.vue component
// Vue.mixin( {
//   props : {
//     modifier : {
//       default : "bar"
//     }
//   }
// } );

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
