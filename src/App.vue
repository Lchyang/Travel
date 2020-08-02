<template>
  <div id="app">
    <!-- 将发送的请求放在内存中优化性能 -->
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
  </div>
</template>
