<template>
  <section class="post-list">
    <PostPreveiw
      v-for="post in posts"
      :id="post.id"
      :is-admin="isAdmin"
      :previewText="post.previewText"
      :title="post.title"
      :thumbnail="post.thumbnail"
      :key="post.id"
    />
  </section>
</template>

<script>
import PostPreveiw from "./PostPreview.vue";
export default {
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
    posts:{
      type:Array,
      required:true
    }
  },
  components: { PostPreveiw },
};
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>