<template>
  <div class="h-10">
    <div
      class="
        absolute
        bottom-0
        block
        w-full
        p-2
        text-base text-center text-red-400
      "
    >
      <nuxt-link to="#"> আরও পড়ুন </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "ReadMore",
  data() {
    return {};
  },
  props: {
    url: {
      required: false,

      default: "#",
    },
  },

  methods: {},
};
</script>
