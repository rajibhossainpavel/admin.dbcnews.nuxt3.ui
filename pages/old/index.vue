<template>
  <div>
    <div class="px-2 mx-auto my-3 max-w-7xl sm:px-6 lg:px-8">
      <div class="grid grid-cols-12 gap-3 grid-rows-12">
        <div
          class="order-1 col-span-12 row-span-6 overflow-hidden rounded-md shadow  md:col-span-8 lg:col-span-6"
        >
          <ArticlesPinnedTop />
        </div>
        <ArticlesPinnedLatest />
        <ArticlesPinnedList />
      </div>
    </div>

    <!-- বাংলাদেশ -->
    <div class="px-2 mx-auto my-3 max-w-7xl sm:px-6 lg:px-8">
      <ArticlesCategoryArticleSection
        categories="bangladesh"
        title="বাংলাদেশ"
        asideBar="covid"
      />
    </div>

    <!-- ডিবিসি নিউজ স্পেশাল -->
    <div class="py-8 bg-gray-300">
      <div class="px-2 mx-auto my-3 max-w-7xl sm:px-6 lg:px-8">
        <ArticlesVideoArticleSection
          playlists="dbc-news-special"
          title=" বিশেষ প্রতিবেদন (সংবাদ)"
        />
      </div>
    </div>

    <!-- খেলাধুলা আন্তর্জাতিক -->
    <div class="px-2 mx-auto my-3 max-w-7xl sm:px-6 lg:px-8">
      <div class="sm:space-x-3 lg:space-x-6 sm:flex">
        <ArticlesCategoryArticleSectionTwo
          categories="international"
          title="আন্তর্জাতিক"
        />
        <ArticlesCategoryArticleSectionTwo
          categories="sports"
          title="খেলাধুলা"
        />
      </div>
    </div>

    <!-- ডিবিসি নিউজ -->
    <div class="py-8 bg-gray-300">
      <div class="px-2 mx-auto my-3 max-w-7xl sm:px-6 lg:px-8">
        <ArticlesVideoArticleSection
          playlists="dbc-news,rajkahon"
          title="ডিবিসি নিউজ"
        />
      </div>
    </div>

    <!-- বিনোদন -->
    <div class="px-2 mx-auto my-3 max-w-7xl sm:px-6 lg:px-8">
      <ArticlesCategoryArticleSection
        categories="recreation"
        asideBar="latest"
        title="বিনোদন"
        asideTitle="এ সপ্তাহের সর্বশেষ"
      />
    </div>

    <!-- বিশেষ প্রতিবেদন (সংবাদ) -->
    <div class="py-8 bg-gray-300">
      <div class="px-2 mx-auto my-3 max-w-7xl sm:px-6 lg:px-8">
        <ArticlesVideoArticleSection
          playlists="dbc-news-special"
          title="বিশেষ প্রতিবেদন (সংবাদ)"
        />
      </div>
    </div>

    <!-- রাজনীতি জেলার-খবর লাইফস্টাইল বিবিধ-->
    <div class="px-2 mx-auto my-3 max-w-7xl sm:px-6 lg:px-8">
      <div class="flex flex-wrap">
        <ArticlesCategoryArticleSectionThree
          categories="international"
          title="জেলার খবর"
        />
        <ArticlesCategoryArticleSectionThree
          categories="international"
          title="লাইফস্টাইল"
        />
        <ArticlesCategoryArticleSectionThree
          categories="international"
          title="চাকরি"
        />
        <ArticlesCategoryArticleSectionThree
          categories="international"
          title="বিবিধ"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },

  methods: {},
};
</script>
