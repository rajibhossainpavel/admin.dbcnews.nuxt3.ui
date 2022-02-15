<template>
  <div
    class="
      order-2
      col-span-12
      row-span-2
      overflow-hidden
      bg-white
      rounded
      shadow
      sm:col-span-6
      md:col-span-4
      lg:col-span-3
      sm:order-3
    "
    v-for="n in 10"
    :key="n"
  >
    <ArticlesListItem :article="{}" />
  </div>
</template>
