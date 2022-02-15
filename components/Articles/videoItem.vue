<template>
  <nuxt-link
    :to="{ name: 'videos-slug', params: { slug: 1 } }"
    class="flex space-x-2 sm:space-x-0 sm:flex-col"
  >
    <div class="relative w-32 sm:w-full sm:h-auto">
      <ElementsPlayButton />
      <img
        src="https://img.youtube.com/vi/C6H429a0iuU/maxresdefault.jpg"
        alt=""
        class="w-full h-full sm:h-auto"
      />
    </div>
    <div class="w-full">
      <div class="mb-1 sm:my-1">
        <!-- <ElementsKicker kicker="Murder" /> -->
        <ElementsDatetime
          class="text-red-500"
          date="সোমবার ১৭ই জানুয়ারী ২০২২ ০৫:৩৬:০১ অপরাহ্ন"
        />
      </div>

      <h3
        class="
          px-0.5
          text-base text-gray-700
          transition
          duration-300
          ease-in-out
          hover:text-gray-500
          font-semibold
          leading-tight
        "
        style="
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        "
      >
        ক্যাপিটল হিলে হামলার ঘটনায় ট্রাম্পকে এককভাবে দায়ী করবেন বাইডেন 41
      </h3>
    </div>
  </nuxt-link>
</template>