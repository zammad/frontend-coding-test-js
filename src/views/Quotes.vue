<template>
  <div v-if="loading">
    <p>...loading</p>
  </div>
  <div v-else class="pb-5">
    <h1 class="font-extrabold tracking-tigh text-3xl leading-10 mt-5">
      Quotes
    </h1>
    <div
      class="mt-10 w-full md:w-9/10 flex flex-wrap mx-auto justify-between px-3 md:px-0"
    >
      <quote-card
        v-for="result in results"
        v-bind:key="result._id"
        v-bind:quote="result"
      />
    </div>
    <div class="-m-2 w-full md:w-9/10">
      <div class="w-fit mx-auto md:mx-0 md:ml-auto">
        <styled-button
          v-bind:disabled="disablePrevious"
          v-bind:click="goBack"
          title="Prev"
        />
        <styled-button
          v-bind:disabled="disableNext"
          v-bind:click="goToNext"
          title="Next"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../components/Button.vue'
import QuoteCardVue from '../components/QuoteCard.vue'
import getQuotes from '../request'

export default {
  components: { 'styled-button': Button, 'quote-card': QuoteCardVue },
  data() {
    return {
      results: [],
      loading: false,
      pagination: { currentPage: 0, nextPage: 0, totalPages: 0 },
    }
  },
  computed: {
    disableNext() {
      return this.pagination.currentPage === this.pagination.totalPages
    },
    disablePrevious() {
      return this.pagination.currentPage === 1
    },
  },
  mounted() {
    this.loading = true
    getQuotes(this)
  },
  methods: {
    goToNext() {
      this.loading = true
      getQuotes(this, this.pagination.currentPage + 1)
    },
    goBack() {
      this.loading = true
      getQuotes(this, this.pagination.currentPage - 1)
    },
  },
}
</script>
