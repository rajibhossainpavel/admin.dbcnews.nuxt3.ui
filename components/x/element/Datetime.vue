<template>
  <div>
    <div
      class="flex items-center text-sm text-red-400 text-semibold"
      :class="cascading"
      v-if="date"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="inline-block w-3.5 h-3.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <span class="ml-1">{{ date }}</span>
    </div>
    <div
      class="flex items-center text-sm text-red-400 text-semibold"
      :class="cascading"
      v-if="time"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="inline-block w-3.5 h-3.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span class="ml-1">{{ time }}</span>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Datetime",
  data() {
    return {};
  },
  props: {
    time: {
      required: false,

      default: null,
    },
    date: {
      required: false,

      default: null,
    },
    cascading: {
      required: false,

      default: null,
    },
  },

  methods: {},
});
</script>
