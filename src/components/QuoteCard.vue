<template>
  <div
    class="basis-full md:basis-8/25 rounded-lg px-6 py-8 bg-white shadow-xl mb-3"
  >
    <p class="text-sm md:text-base text-slate-700">{{ quote.quoteText }}</p>

    <h1 class="basis-auto italic text-slate-500 mt-5">
      {{ quote.quoteAuthor }}
    </h1>
  </div>
</template>

<script>
export default {
  props: { quote: Object },
}
</script>
