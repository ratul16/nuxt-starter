<template>
  <div>
    <HelloWorld :message="name" />
    {{ data.data }}
  </div>
</template>

<script setup>
// import { useGlobalStore } from "~/stores/global";
// const global = useGlobalStore();
const name = "Nuxt 3 Starter Template";
const { data } = await useFetch("/api/users");
</script>
