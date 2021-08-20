<template>

  <section class="container">
    <h1 class="text-center mt-12 mb-10 text-4xl font-bold text-gray-600">
      Frequently Asked Questions
    </h1>
    <div
      v-for="(faq, i) in faqs"
      :key="i"
      class="faq rounded-lg mb-5 p-5"
      @mouseenter="onFaqMouseEnter(faq)"
      @mouseleave="onFaqMouseLeave(faq)"
    >
      <section class="top flex justify-between font-medium text-lg">
        <h2>
          {{ faq.title }}
          <span
            class="text-sm font-normal text-gray-500"
            v-if="faq.mouseHover"
          >
            (mouse hover)
          </span>
        </h2>
        <button
          class="text-2xl border-2 border-blue-400 rounded-full h-8 w-8 flex items-center justify-center"
          :class="{
            [!faq.mouseHover ? 'text-blue-400' : 'text-white']: true,
            [faq.mouseHover ? 'bg-blue-400' : 'bg-white']: true,
          }"
          @click="faq.expand = !faq.expand"
        >
          <i
            v-if="!faq.expand"
            class="ri-add-line"
          />
          <i
            v-else
            class="ri-subtract-line"
          />
        </button>
      </section>

      <main
        v-if="faq.expand"
        v-html="faq.detail"
        class="text-gray-500 pl-6 mt-4"
      />
    </div>
  </section>
</template>

<script>
import { reactive } from '@vue/reactivity'
import faqsDummy from './faqs-dummy'

export default {
  setup () {
    const faqs = reactive(faqsDummy)

    const onFaqMouseEnter = (faq) => {
      if (faq.mouseHover) {
        faq.expand = true
      }
    }

    const onFaqMouseLeave = (faq) => {
      if (faq.mouseHover) {
        faq.expand = false
      }
    }

    return {
      faqs,
      onFaqMouseEnter,
      onFaqMouseLeave
    }
  }
}
</script>

<style scoped>
.faq {
  box-shadow: 0rem .25rem .65rem rgba(0, 0, 0, 0.2);
}
</style>