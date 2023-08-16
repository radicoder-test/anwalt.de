<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title text-start">{{ modelValue.title }}</h5>
      <p class="card-text text-start">{{ modelValue.body }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { IPost } from "../../models";

interface IProps {
  modelValue: IPost;
}

defineProps<IProps>();
</script>
