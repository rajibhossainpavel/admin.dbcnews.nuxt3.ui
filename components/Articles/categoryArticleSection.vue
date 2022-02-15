<template>
  <div>
    <XElementSectionLabel
      leading="Bangladesh"
      trailing="আরও দেখুন"
      categories="[]"
    />
    <div class="grid grid-cols-12 gap-3 grid-rows-12">
      <div
        class="order-1 col-span-12 row-span-6 overflow-hidden bg-white rounded-md shadow  sm:col-span-6 md:col-span-4 lg:col-span-3"
        v-for="n in 3"
        :key="n"
      >
        <ArticlesGridItem class="flex sm:flex-col" :article="{}" />
      </div>

      <EventsCovid v-if="asideBar == 'covid'" />

      <div
        class="relative order-3 col-span-12 overflow-hidden bg-white rounded-md shadow  sm:col-span-6 md:col-span-4 row-span-10 lg:col-span-3 md:order-2"
        v-if="asideBar == 'latest'"
      >
        <div class="h-full px-2">
          <ElementsSectionLabel :title="asideTitle" />
          <ArticlesLatestItem
            :article="{}"
            :index="1"
            v-for="n in 6"
            :key="n"
          />
          <ElementsReadMore :url="link('politics')" />
        </div>
      </div>

      <div
        class="order-2 col-span-12 row-span-2 overflow-hidden bg-white rounded-md shadow  sm:col-span-6 md:col-span-4 lg:col-span-3 md:order-3"
        v-for="n in 6"
        :key="n"
      >
        <ArticlesListItem :article="{}" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    asideBar: {
      required: false,
      default: "latest",
    },
    title: {
      required: false,

      default: null,
    },
    asideTitle: {
      required: false,

      default: null,
    },
    categories: {
      required: false,

      default: null,
    },
  },
  methods: {
    link(slug) {
      return {
        name: "articles",
        query: { categories: slug },
      };
    },
  },
};
</script>
