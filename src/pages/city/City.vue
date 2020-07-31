<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hotcities="hotcities" :letter="letter"></city-list>
    <city-alphabets :cities="cities" @change="handleLetterClick"></city-alphabets>
  </div>
</template>
<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabets from './components/Alphabets'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabets

  },
  data () {
    return {
      cities: {},
      hotcities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.getCityInfoSuss)
    },
    getCityInfoSuss (res) {
      res = res.data
      if (res.ret && res.data) {
        this.cities = res.data.cities
        this.hotcities = res.data.hotCities
      }
    },
    handleLetterClick (letter) {
      this.letter = letter
    }
  },
  // 在这发起后端请求，拿回数据，配合路由钩子做一些事情,钩子函数
  mounted () {
    this.getCityInfo()
  }
}
</script>
<style lang="stylus" coped></style>
