<template>
  <div id="app">
    
  
  
  <router-view></router-view>
  </div>
</template>

<script>

export default {
  
  name: 'app'
   
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
.el-menu {
      border-right: 0;
    }

.el-menu-item {
      text-align: left;
    }

.v-center{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

.h-center{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

.clearfix{
    *zoom: 1;
}

.clearfix::after{
    clear: both;
    content: ".";
    display: block;
    height: 0;
    visibility: hidden;
}
body{
  margin: 0;
  
}
</style>
