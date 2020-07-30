<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe611;</div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles';

.header {
  position: relative;
  overflow: hidden;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: #fff;
  background: $bgColor;
  font-size: 0.32rem;

  .header-back {
    top: 0;
    left: 0;
    position: absolute;
    font-size: 0.4rem;
    width: 0.64rem;
    text-align: center;
    color: #fff
  }
}
</style>
