<template>
  <div>
    <CityHeader />
    <CitySearch />
    <CityList />
    <ListAlphabet />
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import ListAlphabet from './components/Alphabet'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    ListAlphabet
  }
}
</script>
