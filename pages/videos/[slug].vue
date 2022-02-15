<template>
  <div class="px-2 mx-auto my-6 max-w-7xl sm:px-6 lg:px-8">
    <div class="space-y-6 md:space-x-6 md:flex md:space-y-0">
      <div class="w-full md:w-8/12">
        <div class="w-full">
          <div class="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/r9jwGansp1E"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            >
            </iframe>
          </div>
        </div>

        <div class="w-full my-6">
          <div>
            <!-- <h1
              class="py-1 mb-3 text-4xl text-center text-gray-600 bg-gray-100 rounded-sm "
            >
              আরও দেখুন
            </h1> -->
            <div class="grid grid-cols-12 gap-3 grid-rows-12">
              <div
                class="order-1 col-span-12 row-span-6 overflow-hidden  sm:col-span-6 md:col-span-4"
                v-for="n in 18"
                :key="n"
              >
                <ArticlesVideoItem video="objrct" />
              </div>
            </div>
            <!-- <div class="p-2">
              <div class="mt-2 pagination">{{ $this->videos()->links() }}</div>
            </div> -->
          </div>
        </div>
      </div>

      <div class="w-full md:w-4/12">
        <ElementsAdvertisements />

        <div class="w-full">
          <div class="overflow-hidden bg-white rounded-md shadow">
            <div
              class="relative order-3 col-span-12 overflow-hidden rounded-md shadow-sm  sm:col-span-6 md:col-span-4 row-span-10 lg:col-span-3 md:order-2"
            >
              <div class="h-full px-2">
                <ElementsSectionLabel title="সর্বশেষ" />
                <ArticlesLatestItem
                  v-for="n in 10"
                  :key="n"
                  :article="{}"
                  :index="1"
                />
                <ElementsReadMore :url="'read more'" />
              </div>
            </div>
          </div>

          <!-- <div class="hidden mt-3 space-y-3 md:block">
             @livewire('details.article-grid')
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
