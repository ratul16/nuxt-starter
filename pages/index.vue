<template>
  <div>
    <HelloWorld :message="global.appName" />
    <!-- <ProductView /> -->
  </div>
</template>

<script setup>
import { useGlobalStore } from "~/store/global";
const global = useGlobalStore();
</script>
