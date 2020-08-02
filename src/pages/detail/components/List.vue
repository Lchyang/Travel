<template>
  <div>
    <div class="item" v-for="(item, index) in list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
    <div class="blank"></div>
  </div>
</template>
<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }

}
</script>
<style lang="stylus" scoped>
.blank {
  height: 40rem;
}

.item-title {
  line-height: 0.8rem;
  padding: 0 0.2rem;
}

.item-children {
  padding: 0 0.2rem;
}
</style>
