<template>
  <div>
    <CityHeader />
    <CitySearch :citiesList="citiesList" />
    <CityList
      :citiesList="citiesList"
      :hotCitiesList="hotCitiesList"
      :letter="letter"
    />
    <ListAlphabet
      :citiesListAlphabet="citiesListAlphabet"
      @change="handleScroll"
    />
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import ListAlphabet from './components/Alphabet'
import axios from 'axios'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    ListAlphabet
  },
  data() {
    return {
      hotCitiesList: [],
      citiesList: {},
      alphabet: [],
      letter: '',
      citiesListAlphabet: []
    }
  },
  mounted() {
    this.getCityInfo()
  },
  methods: {
    getCityInfo() {
      axios.get('/api/city.json').then(res => {
        if (res.data.ret && res.data.data) {
          this.handleCityInfo(res.data.data)
        }
      })
    },
    handleCityInfo(data) {
      this.hotCitiesList = data.hotCities
      this.citiesList = data.cities
      this.citiesListAlphabet = Object.keys(data.cities)
    },
    handleScroll(letter) {
      this.letter = letter
    }
  }
}
</script>
