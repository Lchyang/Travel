<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
  </div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [
        {
          title: '成人票',
          children: [{
            title: '成人三馆联票',
            children: [{
              title: '第三级类目'
            }]
          },
          { title: '成人无关联票' }]
        },
        {
          title: '儿童票'
        },
        {
          title: '特惠票'
        },
        {
          title: '免票'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped></style>
