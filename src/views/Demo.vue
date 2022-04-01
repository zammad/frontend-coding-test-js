<template>
  <div class="basis-full lg:max-w-7xl px-8 py-20">
    <div class="flex justify-between mb-4">
      <input type="text" v-model="txtSearch" class="form-control" placeholder="Search pokemon">
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
      <AppCard v-for="(pokemon, index) in filteredPokemon" :key="index" :data="pokemon" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import AppCard from '../components/AppCard.vue'

export default {
  components: {
    AppCard
  },
  data () {
    return {
      allPokemon: [],
      txtSearch: '',
      pokemonLimit: 20
    }
  },
  created () {
    this.fetchAllPokemon()
    console.log(this.allPokemon)
  },
  computed: {
    filteredPokemon () {
      const search = this.txtSearch.trim().toLowerCase()
      return this.allPokemon.filter(pokemon => JSON.stringify(pokemon.name).toLowerCase().includes(search))
    }
  },
  methods: {
    async fetchAllPokemon () {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${this.pokemonLimit}`)
      this.$toast.success('All Pokemons retrieved!')
      response.data.results.forEach(pokemon => this.fetchPokemonData(pokemon))
    },
    async fetchPokemonData (pokemon) {
      const response = await axios.get(pokemon.url)
      this.allPokemon.push(response.data)
    }
  }
}
</script>