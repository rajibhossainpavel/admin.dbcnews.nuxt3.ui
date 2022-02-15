<template>
  <div class="p-3">
    <nuxt-link :to="{ name: 'articles-slug', params: { slug: 1 } }">
      <div class="ml-1" style="float: right">
        <img
          src="https://asset1.dbcnews.tv/storage/images/f3d4bf30-0ecd-4bbe-ac2c-893966ba1c17.webp"
          alt=""
          class="w-24 h-auto rounded-md"
        />
        <ElementsDatetime class="mt-1 text-right" time="3 hours ago" />
      </div>
      <div class="mb-1">
        <ElementsKicker kicker="Trump" cascading="text-red-400" />
      </div>
      <div>
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
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          "
        >
          পার্বত্য চট্টগ্রামে পরিত্যক্ত সেনাক্যাম্পে পুলিশ থাকবে:
          স্বরাষ্ট্রমন্ত্রী 67
        </h3>
      </div>
    </nuxt-link>
  </div>
</template>