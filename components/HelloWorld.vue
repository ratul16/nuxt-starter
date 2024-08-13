<script setup>
defineProps({
  message: {
    type: String,
    default: "Hello World",
  },
});
</script>

<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<style lang="scss" scoped></style>
