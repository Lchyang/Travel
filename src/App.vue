<template>
  <div id="app">
    <!-- 将发送的请求放在内存中优化性能 -->
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
