<template>
  <div class="flex items-center">
    <span class="text-sm text-red-400">{{ kicker }}</span>
  </div>
</template>
<script>
export default {
  name: "Kicker",
  data() {
    return {};
  },
  props: {
    kicker: {
      required: false,

      default: null,
    },
    cascading: {
      required: false,

      default: null,
    },
  },

  methods: {},
};
</script>
