<template>

<div>
  <p>
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <router-link to="/foo">Go to 1Foo</router-link>
    <router-link to="/bar">Go to1 Bar</router-link>
  </p>
   <router-view>13213211231</router-view>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
 
</div>

</template>

<script>
    export default {
    name: 'routertest',
    
    }
</script>