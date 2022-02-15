<template>
  <div
    class="
      relative
      order-3
      col-span-12
      overflow-hidden
      bg-white
      rounded-md
      shadow
      sm:col-span-6
      md:col-span-4
      row-span-8
      lg:col-span-3
      sm:order-2
    "
  >
    <div class="h-full px-2">
      <ElementsSectionLabel title="পাঠকের পছন্দ" />
      <ArticlesLatestItem :article="{}" index="1" v-for="n in 5" :key="n" />
      <ElementsReadMore url="read more" />
    </div>
  </div>
</template>
