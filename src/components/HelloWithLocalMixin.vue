<template>
  <p>
    The value of prop "myProp" is: {{ myProp }}
  </p>
</template>

<script>
export default {
  name: 'hello-with-local-mixin',
  mixins : [ {
    props : [ 'myProp' ]
  } ],
  data () {
    return {}
  }
}
</script>
