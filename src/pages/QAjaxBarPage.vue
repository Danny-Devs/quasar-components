<template>
  <q-page padding>

    <q-ajax-bar
      color="purple"
      size="14px"
      position="bottom"
      ref="bar"
    />


      <q-btn @click="fakeAjaxRequest">
        Click me
      </q-btn>

      <pre>{{result}}</pre>
  </q-page>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue';

const result = ref(null)
const bar = ref(null)


const fakeAjaxRequest = () => {
  // axios.get('https://jsonplaceholder.typicode.com/posts')
  //   .then(response => {
  //     result.value = response.data
  //   })
  bar.value.start()
  setTimeout(() => {
    bar.value.stop()
  }, 3000)
}
</script>
