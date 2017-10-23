<template>
  <div id="app">
    <top class="header"></top>
    <router-view/>
  </div>
</template>

<script>
// import top from '../components/top.vue'
import top from '@/components/top.vue'

export default {
  name: 'app',
  components:{
    top
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-left:auto;
  margin-right:auto;
}

@media screen and (min-width:600px){
    #app{
      width:600px;
    }
}


</style>
