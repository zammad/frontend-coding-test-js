<template>
  <div class="card relative text-left shadow-md cursor-pointer group transition duration-300 ease-in-out hover:-translate-y-px" @click="redirect">
    <div class="flex justify-between items-center">
      <h2 class="header">
        {{ data.name }}
      </h2>
      <h5 class="text-gray-400">
        #{{ data.id}}
      </h5>
    </div>
    <img :src="data.sprites?.front_default" class="mx-auto my-4" alt="">
    <div class="flex flex-col lg:flex-row lg:space-x-8">
      <div class="label">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
        <span>
          {{ getWeight }} kg
        </span>
      </div>
      <div class="label">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
        <span>
          {{ getHeight }} m
        </span>
      </div>
    </div>
    <div class="mt-3 mb-4 lg:mb-0">
      <div class="flex space-x-2">
        <div v-for="(type, index) in data.types" :key="index" class="px-2 py-0.5 rounded-sm text-sm capitalize text-white" :class="getTypeColor(type.type.name)">
          {{ type.type.name }}
        </div>
      </div>
    </div>
    <div v-if="this.showDetail" class="absolute right-0 bottom-0 p-2 rounded-tl-xl rounded-br-xl bg-gray-800 group-hover:bg-blue-600">
      <svg xmlns="http://www.w3.org/2000/svg" class="icon text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppCard',
  props: {
    data: {
      type: Object,
      required: true
    },
    showDetail: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data () {
    return {
      typesColorsMapping: {
        normal: 'bg-stone-800',
        fire: 'bg-orange-400',
        fighting: 'bg-red-400',
        water: 'bg-blue-400',
        flying: 'bg-indigo-300',
        grass: 'bg-green-400',
        poison: 'bg-purple-400',
        electric: 'bg-yellow-400',
        ground: 'bg-amber-600',
        psychic: 'bg-pink-400',
        rock: 'bg-yellow-800',
        ice: 'bg-cyan-400',
        bug: 'bg-green-700',
        dragon: 'bg-blue-900',
        ghost: 'bg-indigo-900',
        dark: 'bg-amber-900',
        steel: 'bg-zinc-700',
        fairy: 'bg-fuchsia-300'
      }
    }
  },
  computed: {
    getWeight () {
      return this.data.weight / 10
    },
    getHeight () {
      return this.data.height / 10
    }
  },
  methods: {
    getTypeColor (type) {
      return this.typesColorsMapping[type] ?? 'bg-teal-900'
    },
    redirect () {
      this.$router.push({ name: 'Details', params: { id: this.data.id } })
    }
  }
}
</script>

<style lang="scss" scoped>
.label {
  @apply flex items-center space-x-2
}
</style>