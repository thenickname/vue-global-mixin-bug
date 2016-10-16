<template>
  <div id="app">
    <hello my-prop="foo"></hello>
    <hello-with-local-mixin my-prop="foo"></hello-with-local-mixin>
  </div>
</template>

<script>
import Hello from './components/Hello'
import HelloWithLocalMixin from './components/HelloWithLocalMixin'

export default {
  name: 'app',
  components: {
    Hello,
    HelloWithLocalMixin
  }
}
</script>
