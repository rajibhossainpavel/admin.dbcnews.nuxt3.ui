<template>
  <div>
    {{ playlists }}
    <ElementsVideoSectionTitle
      borderColor="border-gray-400"
      cascading="text-red-500 bg-gray-300"
      more="সকল ভিডিও"
      :title="title"
      :playlists="playlists"
    />
    <div class="grid grid-cols-12 gap-3 grid-rows-12">
      <div
        class="order-4 col-span-12 row-span-2 overflow-hidden  sm:col-span-6 md:col-span-4 lg:col-span-3"
        v-for="n in 12"
        :key="n"
      >
        <ArticlesVideoItem />
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
  },
  methods: {},
};
</script>
