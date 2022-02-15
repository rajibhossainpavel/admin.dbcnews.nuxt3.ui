<template>
  <textarea
    class="flex-grow w-full h-10 px-2 border border-gray-300 rounded-md shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-none"
    rows="10"
    :placeholder="placeholder"
  ></textarea>
</template>

<script>
export default {
  props: {
    placeholder: {
      required: false,
      type: String,
      default: "text",
    },
  },
};
</script>