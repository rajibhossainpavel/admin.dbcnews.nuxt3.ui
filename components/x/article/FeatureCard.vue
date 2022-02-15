<template>
  <div class="relative h-full">
    <nuxt-link :to="{ name: 'articles-slug', params: { slug: 1 } }">
      <img
        src="https://asset1.dbcnews.tv/storage/images/f3d4bf30-0ecd-4bbe-ac2c-893966ba1c17.webp"
        alt="top"
        class="w-full sm:h-full"
      />
      <div
        class="p-2 text-xl transition duration-300 ease-in-out  sm:px-6 sm:py-3 sm:text-2xl sm:text-white sm:absolute bottom-4 hover:text-gray-200"
      >
        <div class="mb-1">
          <div class="text-sm text-red-400 sm:text-white">Trump</div>
          <XElementDatetime cascading="sm:text-white" time="2 hours ago" />
        </div>
        <h3>
          পার্বত্য চট্টগ্রামে পরিত্যক্ত সেনাক্যাম্পে পুলিশ থাকবে:
          স্বরাষ্ট্রমন্ত্রী 1
        </h3>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  //
});
</script>
