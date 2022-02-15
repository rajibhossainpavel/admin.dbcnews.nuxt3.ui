<template>
  <div
    class="relative order-3 col-span-12 overflow-hidden bg-white rounded-md shadow  sm:col-span-6 md:col-span-4 row-span-8 lg:col-span-3 sm:order-2"
  >
    <div class="h-full px-2">
      <div class="flex items-center w-full p-2 border-b">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="inline-block w-6 h-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
          />
        </svg>

        <span class="text-lg font-bold text-gray-600">পাঠকের পছন্দ</span>
      </div>
      <template v-for="n in 5" :key="n">
        <XArticleListTile :article="{}" />
      </template>
      <ElementsReadMore url="read more" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  //
});
</script>
