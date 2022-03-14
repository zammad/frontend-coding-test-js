<template>
  <button
    v-bind:disabled="disabled"
    class="p-4 bg-indigo-500 rounded shadow-2xl hover:shadow-none hover:bg-indigo-600 text-white text-base md:text-lg font-bold antialiased m-2 disabled:bg-indigo-100"
    v-on:click="click"
  >
    {{ title }}
  </button>
</template>
<script>
export default {
  props: { title: String, click: Function, disabled: Boolean },
}
</script>
