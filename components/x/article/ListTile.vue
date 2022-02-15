<template>
  <nuxt-link
    :to="{ name: 'articles-slug', params: { slug: 1 } }"
    class="block py-2 border-b"
  >
    <div class="flex justify-between flex-grow">
      <div class="flex items-start before:content-['1']">
        <div class="pl-3">
          <h3
            class="
              mt-0.5
              text-base
              leading-tight
              transition
              duration-300
              ease-in-out
              hover:text-gray-500
            "
            style="
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
            "
          >
            রাষ্ট্রপতির সংলাপে আমন্ত্রণ পেয়েছে বিএনপি 3
          </h3>
          <ElementsDatetime time="2 hours ago" />
        </div>
      </div>
      <img
        class="flex-shrink-0 w-24 h-auto ml-2 rounded-md  2md:w-18 2md:h-12 2md:rounded-sm"
        src="https://asset1.dbcnews.tv/storage/images/f3d4bf30-0ecd-4bbe-ac2c-893966ba1c17.webp"
        alt=""
      />
    </div>
  </nuxt-link>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    article: {
      required: true,
      type: Object,
    },
  },
  methods: {},
});
</script>
