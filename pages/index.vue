<template>
  <div>
    <HelloWorld :message="global.appName" />
    <ComponentOverview />
  </div>
</template>

<script setup>
import { useGlobalStore } from "~/store/global";
const global = useGlobalStore();
</script>
