<template>
<div>
  <city-header></city-header>
  <city-search></city-search>
  <city-list></city-list>
  <city-alphabets></city-alphabets>
</div>
</template>
<script>
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

  }
}
</script>
<style lang="stylus" coped>
</style>
