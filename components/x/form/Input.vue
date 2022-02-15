<template>
  <input
    :type="text"
    :placeholder="placeholder"
    class="
      flex-grow
      w-full
      h-10
      px-2
      border border-gray-300
      rounded-md
      shadow-sm
      focus:border-indigo-300
      focus:ring
      focus:ring-indigo-200
      focus:ring-opacity-50
      focus:outline-none
    "
  />
</template>

<script>
export default {
  props: {
    type: {
      required: false,
      type: String,
      default: "text",
    },
    placeholder: {
      required: false,
      type: String,
      default: "text",
    },
  },
};
</script>
