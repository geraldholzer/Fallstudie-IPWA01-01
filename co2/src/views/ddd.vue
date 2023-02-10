<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HeaderBar></HeaderBar>


  </div>
</template>

<script>
// @ is an alias to /src
import HeaderBar from '@/components/header.vue'

export default {
  name: 'ddd',
  components: {
    HeaderBar
  }
}
</script>
