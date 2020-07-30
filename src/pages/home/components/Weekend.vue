<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <!-- boder-bottom 一像素的底部边框 -->
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <!-- src 不能用url -->
        <div class="item-img-swapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  },
  data () {
    return {
    }
  }

}
</script>
<style lang="stylus" scoped>
@import '~styles/mixin.styl';

.title {
  line-height: 0.8rem;
  background: #eee;
  text-indet: 0.2rem;
}

.item-img-swapper {
  height: 0;
  padding-bottom: 33.9%;

  .item-img {
    width: 100%;
  }
}

.item-info {
  margin-top: .2rem;
  padding: 0.1rem;

  .item-title {
    line-height: 0.54rem;
    font-size: 0.32rem;
    ellipsis();
  }

  .item-desc {
    line-height: 0.4rem;
    color: #ccc;
    ellipsis();
  }
}
</style>
