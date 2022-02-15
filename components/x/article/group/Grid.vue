<template>
  <div
    class="order-2 col-span-12 row-span-2 overflow-hidden transition delay-150 bg-white rounded shadow  sm:col-span-6 md:col-span-4 lg:col-span-3 sm:order-3 hover:shadow-lg"
    v-for="n in 10"
    :key="n"
  >
    <XArticleRowCard :article="{}" />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  //
});
</script>
