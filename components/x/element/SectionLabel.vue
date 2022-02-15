<template>
  <div class="relative mb-2 group">
    <div class="absolute inset-0 flex items-center" aria-hidden="true">
      <div class="w-full border-t border-gray-300"></div>
    </div>
    <div class="relative flex items-center justify-between">
      <div class="pr-2 text-xl font-bold text-red-500 bg-gray-100">
        {{ leading }}
      </div>

      <a href="#" class="pl-2 text-sm font-bold text-red-500 bg-gray-100">
        {{ trailing }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="inline-block w-5 h-5 text-red-500 transition duration-500 opacity-0  group-hover:opacity-100"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    leading: {
      required: true,
    },
    trailing: {
      required: false,

      default: "More",
    },
    categories: {
      required: false,
    },
  },
});
</script>
