<template>
  <div
    class="
      w-full
      px-2
      mt-3
      sm:w-6/12
      2md:w-3/12
      sm:mt-0
      first:pl-0
      last:pr-0
      lg:px-1.5
    "
  >
    <ElementsCategorySectionTitle
      :title="title"
      :categories="categories"
      cascading="text-red-500 bg-gray-100"
      borderColor="border-gray-300"
    />
    <div class="grid grid-cols-12 gap-3 grid-rows-12">
      <div
        class="order-1 col-span-12 row-span-6 overflow-hidden bg-white rounded-md shadow "
      >
        <ArticlesGridItem :article="{}" />
      </div>
      <div
        class="order-2 col-span-12 row-span-2 overflow-hidden bg-white rounded-md shadow  2md:order-3"
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
