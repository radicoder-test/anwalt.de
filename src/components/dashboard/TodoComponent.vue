<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title text-start">{{ modelValue.title }}</h5>
      <div class="card-text text-start">
        <div>Id: {{ modelValue.id }}</div>
        <div>User Id: {{ modelValue.user_id }}</div>
        <div>Status: {{ modelValue.status }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { ITodo } from "../../models";

interface IProps {
  modelValue: ITodo;
}

defineProps<IProps>();
</script>
