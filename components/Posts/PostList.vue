<template>
    <section class="post-list">
      <PostPreveiw
        id="1"
        previewText="my first preview text"
        title="Hello there"
        thumbnail="https://news.cgtn.com/news/2020-11-02/Analysis-China-is-betting-on-science-and-tech-like-never-before-V68V871ula/img/871ca9ce8b9941088260b6ed4ced4eeb/871ca9ce8b9941088260b6ed4ced4eeb.jpeg"
      />
      <PostPreveiw
        id="2"
        previewText="my second preview text"
        title="Hello there again"
        thumbnail="https://news.cgtn.com/news/2020-11-02/Analysis-China-is-betting-on-science-and-tech-like-never-before-V68V871ula/img/871ca9ce8b9941088260b6ed4ced4eeb/871ca9ce8b9941088260b6ed4ced4eeb.jpeg"
      />
      <PostPreveiw
        id="3"
        previewText="my preview text"
        title="bye"
        thumbnail="https://news.cgtn.com/news/2020-11-02/Analysis-China-is-betting-on-science-and-tech-like-never-before-V68V871ula/img/871ca9ce8b9941088260b6ed4ced4eeb/871ca9ce8b9941088260b6ed4ced4eeb.jpeg"
      />
    </section>
</template>

<script>
import PostPreveiw from './PostPreview.vue';
export default {
    components:{PostPreveiw}

}
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