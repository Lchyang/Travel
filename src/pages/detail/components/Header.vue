<template>
  <div>
    <router-link tag="div" class="detail-header-back" to="/" v-show="!showHeader">
      <div class="iconfont detail-icon">&#xe611;</div>
    </router-link>
    <div class="detail-header" v-show="showHeader" :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header-back">&#xe611;</div>
      </router-link>景点详情
    </div>
    <div class="blank"></div>
  </div>
</template>
<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showHeader: false,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    scrollWindow () {
      const top = document.documentElement.scrollTop
      if (top > 50) {
        let opacity_ = top / 140
        opacity_ = opacity_ > 1 ? 1 : opacity_
        this.opacityStyle = { opacity: opacity_ }
        this.showHeader = true
      } else {
        this.showHeader = false
      }
      console.log()
    }
  },
  activated () {
    window.addEventListener('scroll', this.scrollWindow)
  },
  deactivated () {
    window.removeEventListener('scroll', this.scrollWindow)
  }

}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.blank {
  height: 50rem;
}

.detail-header-back {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  // 元素得圆角状态
  border-radius: 0.5rem;
  background: rgba(0, 0, 0, 0.6);

  .detail-icon {
    font-size: 0.4rem;
    color: #fff;
  }
}

.detail-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
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
    color: #fff;
  }
}
</style>
