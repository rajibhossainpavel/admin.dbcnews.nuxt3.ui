<template>
  <div>
    <XElementSectionLabel
      leading="বাংলাদেশ"
      trailing="আরও দেখুন"
      categories="bangladesh"
    />
    <div class="grid grid-cols-12 gap-3 grid-rows-12">
      <div
        class="order-1 col-span-12 row-span-6 overflow-hidden transition delay-150 bg-white rounded-md shadow  hover:shadow-lg sm:col-span-6 md:col-span-4 lg:col-span-3"
        v-for="n in 3"
        :key="n"
      >
        <a href="#" class="flex sm:flex-col">
          <div class="w-full">
            <img
              src="https://asset1.dbcnews.tv/storage/images/f3d4bf30-0ecd-4bbe-ac2c-893966ba1c17.webp"
              alt=""
              class="w-full h-auto"
            />
          </div>
          <div class="w-full px-3 pb-3">
            <div class="my-2">
              <!-- <ElementsKicker kicker="London" /> -->
              <XElementDatetime time="3 hours ago" />
            </div>
            <h3
              class="pb-3 text-base font-semibold leading-tight text-gray-700 transition duration-300 ease-in-out  hover:text-gray-500"
            >
              নির্বাচনে হতাহতের দায় নিতে হবে প্রার্থীকে: ইসি 19
            </h3>

            <h3
              class="pb-3 text-base leading-tight text-gray-500 transition duration-300 ease-in-out  hover:text-gray-500"
              style="
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
                padding: 1px;
              "
            >
              <span class="hidden sm:block">
                হোয়াইট হাউজের প্রেস সেক্রেটারি জেন সাকি জানান, হামলার জন্য
                এককভাবেই দায়ী করা হবে ট্রাম্পকে। এক বছর আগের ওই হামলায় জড়িত
                সন্দেহে এখন পর্যন্ত ৭শ'র বেশি ট্রাম্প সমর্থককে আটক করা হয়েছে।
              </span>
            </h3>
          </div>
        </a>
      </div>
      <slot />

      <div
        class="order-2 col-span-12 row-span-2 overflow-hidden transition delay-150 bg-white rounded-md shadow  sm:col-span-6 md:col-span-4 lg:col-span-3 md:order-3 hover:shadow-lg"
        v-for="n in 6"
        :key="n"
      >
        <XArticleRowCard :article="{}" />
      </div>
    </div>
  </div>
</template>
