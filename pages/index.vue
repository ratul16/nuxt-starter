<template>
  <div>
    <HelloWorld />
  </div>
</template>

<script setup>
const search = ref("");
const weather = ref(null);

const fetchWeather = async () => {
  let searchQuery = `weather?q=${search.value}`;
  console.log(searchQuery);
  const response = await fetch(`/api/weather?query=${searchQuery}`);
  weather.value = await response.json();
};
</script>
