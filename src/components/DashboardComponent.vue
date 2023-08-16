<template>
  <h1 class="text-center mb-5">My Dashboard</h1>
  <posts-component></posts-component>
  <todos-component></todos-component>
</template>

<script setup lang="ts">
import TodosComponent from "./dashboard/TodosComponent.vue";
import PostsComponent from "./dashboard/PostsComponent.vue";
</script>

<style scoped></style>
