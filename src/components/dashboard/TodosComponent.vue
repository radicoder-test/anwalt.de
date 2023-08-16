<template>
  <div class="mb-5">
    <h3 class="text-start">My Todo's</h3>

    <div v-if="!hasTodos">
      <h5 class="text-center">No any Todo registered</h5>
    </div>
    <div v-if="hasTodos" class="row justify-content-around">
      <todo-component
        class="col-5"
        v-for="todo in todosList"
        :key="todo.id"
        :model-value="todo"
      ></todo-component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, Ref } from "vue";
import { TodosService, Todos } from "../../api";
import TodoComponent from "./TodoComponent.vue";

// Services
const todosService = new TodosService();

// Refs
const todosList: Ref<Todos> = ref([]);

// Computed
const hasTodos = computed(() => todosList.value.length !== 0);

// Functions
const loadTodosList = async () => {
  const value = await todosService.loadTodos();
  todosList.value = value.slice(0, 2);
};

// Hooks
onMounted(() => {
  loadTodosList();
});
</script>
