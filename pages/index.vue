<template>
  <div>
    <HelloWorld :message="global.appName" />
    <!-- <p>
      {{ global.getAuthor }}
    </p> -->
  </div>
</template>

<script setup>
import { useGlobalStore } from "~/store/global";
const global = useGlobalStore();
</script>
