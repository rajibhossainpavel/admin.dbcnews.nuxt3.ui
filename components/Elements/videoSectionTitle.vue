<template>
  <div class="relative mb-2 group">
    <div class="absolute inset-0 flex items-center" aria-hidden="true">
      <div class="w-full border-t" :class="borderColor"></div>
    </div>
    <div class="relative flex items-center justify-between">
      <nuxt-link
        :to="link(playlists)"
        class="pr-2 text-xl font-bold"
        :class="cascading"
      >
        {{ title }}
      </nuxt-link>

      <nuxt-link
        :to="link(playlists)"
        class="pl-2 text-sm font-bold"
        :class="cascading"
      >
        {{ more }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="
            inline-block
            w-3.5
            h-3.5
            text-white
            bg-red-600
            rounded-full
            opacity-0
            transition
            duration-500
            group-hover:opacity-100
          "
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "SectionTitle",
  data() {
    return {};
  },
  props: {
    title: {
      required: false,

      default: null,
    },
    borderColor: {
      required: false,

      default: null,
    },
    more: {
      required: false,

      default: null,
    },
    cascading: {
      required: false,

      default: "text-gray-500",
    },
    playlists: {
      required: false,

      default: "",
    },
  },

  methods: {
    link(slug) {
      return {
        name: "videos",
        query: { playlists: slug },
      };
    },
  },
};
</script>
