<template>
  <div v-if="pokemon" class="flex flex-col space-y-4 lg:max-w-7xl px-8 py-20 lg:grid lg:grid-cols-4 lg:grid-rows-4 lg:gap-6">
    <AppCard :data="pokemon" :showDetail="false" class="lg:row-span-2" />
    <div class="card">
      <h2 class="header">Abilities</h2>
      <div class="grid lg:grid-cols-2 mt-4">
        <div v-for="(ability, index) in pokemon.abilities" :key="index">
          {{ ability.ability.name }}
        </div>
      </div>
    </div>
    <div class="card col-span-2">
      <h2 class="header">Stats</h2>
      <div class="flex space-x-4 mt-4">
        <div v-for="(stat, index) in pokemon.stats" :key="index" class="">
          <span class="capitalize">{{ stat.stat.name }}: </span>
          <span class="font-semibold">{{ stat.base_stat }}</span>
        </div>
      </div>
    </div>
    <div class="card">
      <h2 class="header">Catch Rate</h2>
      <div class="mt-4">
        {{ pokemonSpecies.capture_rate }}%
      </div>
    </div>
    <div class="card">
      <h2 class="header">Base Happiness</h2>
      <div class="mt-4">
        {{ pokemonSpecies.base_happiness }}
      </div>
    </div>
    <div class="card">
      <h2 class="header">Growth Rate</h2>
      <div class="mt-4">
        {{ pokemonSpecies.growth_rate.name }}
      </div>
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
      pokemon: {},
      pokemonSpecies: {}
    }
  },
  created () {
    this.fetchPokemonData()
    this.fetchSpecies()
  },
  methods: {
    async fetchPokemonData () {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.$route.params.id}`)
      this.$toast.success('Pokemon data retrieved!')
      this.pokemon = response.data
    },
    async fetchSpecies () {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${this.$route.params.id}`)
      this.$toast.success('Pokemon species retrieved!')
      this.pokemonSpecies = response.data
    }
  }
}
</script>