<template>
  <div>
    <h1>User List</h1>
    <DataTable
      :value="users.data"
      scrollable
      scrollHeight="400px"
      paginator
      :rows="5"
      :rowsPerPageOptions="[5, 10, 20, 50]"
      tableStyle="min-width: 50rem"
    >
      <Column field="avatar" header="Avatar">
        <template #body="{ data }">
          <img :alt="data.name" :src="data.avatar" style="width: 32px" />
        </template>
      </Column>
      <Column field="name" header="Name"></Column>
      <Column field="email" header="Email"></Column>
      <Column field="phone" header="Phone"></Column>
    </DataTable>
  </div>
</template>

<script setup>
const { data: users } = await useFetch(`/api/users?num=50`);
</script>

<style lang="scss" scoped></style>
