<template>
  <div class="container" @click="handleGallaryClick">
    <div class="swapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item,index) in imgs" :key="index">
          <img class="gallary-img" :src="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observe: true

      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('change')
    }
  }
}
</script>
<style lang='stylus' scoped>
.container >>> .swiper-container {
  overflow: inherit;
}

.container {
  // 纵向布局
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;

  .swapper {
    background: #fff;
    height: 0;
    padding-bottom: 68.5%;
    width: 100%;

    .gallary-img {
      width: 100%;
    }

    .swiper-pagination {
      color: #fff;
      bottom: -3rem;
    }
  }
}
</style>
