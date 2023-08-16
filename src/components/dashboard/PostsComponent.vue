<template>
  <div class="mb-5">
    <h3 class="text-start">Latest Posts</h3>

    <div v-if="!hasPosts">
      <h5 class="text-center">No any Post registered</h5>
    </div>
    <div v-if="hasPosts" class="row justify-content-around">
      <post-component
        class="col-5"
        v-for="post in postsList"
        :key="post.id"
        :model-value="post"
      ></post-component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, Ref } from "vue";
import { PostsService, Posts } from "../../api";
import PostComponent from "./PostComponent.vue";

// Services
const postsService = new PostsService();

// Refs
const postsList: Ref<Posts> = ref([]);

// Computed
const hasPosts = computed(() => postsList.value.length !== 0);

// Functions
const loadPostsList = async () => {
  const list = await postsService.loadPosts();
  // postsList.value = list.sort((a, b) => b.id - a.id).slice;
  postsList.value = list.slice(0, 2);
};

// Hooks
onMounted(() => {
  loadPostsList();
});
</script>
