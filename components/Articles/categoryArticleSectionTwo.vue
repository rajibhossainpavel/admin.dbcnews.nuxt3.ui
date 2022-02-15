<template>
  <div class="w-full mt-3 sm:w-6/12 sm:mt-0">
    <ElementsCategorySectionTitle
      :title="title"
      more="আরও দেখুন"
      :categories="categories"
      cascading="text-red-500 bg-gray-100"
      borderColor="border-gray-300"
    />
    <div class="grid grid-cols-12 gap-3 grid-rows-12">
      <div
        class="order-1 col-span-12 row-span-6 overflow-hidden bg-white rounded-md shadow  2md:col-span-6"
      >
        <ArticlesGridItem :article="{}" />
      </div>
      <div
        class="relative order-3 col-span-12 overflow-hidden bg-white rounded-md shadow  2md:order-2 row-span-12 2md:col-span-6"
      >
        <div class="h-full px-2">
          <ArticlesLatestItem
            articles="Object"
            v-for="n in 8"
            :key="n"
            :index="n"
          />
          <ElementsReadMore link="read more" />
        </div>
      </div>
      <div
        class="order-2 col-span-12 row-span-2 overflow-hidden bg-white rounded-md shadow  2md:order-3 2md:col-span-6"
        v-for="n in 3"
        :key="n"
      >
        <ArticlesListItem :article="{}" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "VideoArticleSection",
  data() {
    return {};
  },
  props: {
    title: {
      required: false,

      default: null,
    },
    asideBar: {
      required: false,
      default: "latest",
    },
    asideTitle: {
      required: false,

      default: null,
    },
    playlists: {
      required: false,

      default: null,
    },
    categories: {
      required: false,

      default: null,
    },
  },
  methods: {},
};
</script>
