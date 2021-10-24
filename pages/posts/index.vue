<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>
<script>
import PostList from '~/components/Posts/PostList';
export default {
components:{PostList},
asyncData(context){
    console.log('-----> asyncData execute.')
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve(
          {
        loadedPosts:[
        {
          id:'1',
          title:'First Post',
          previewText:'This is our first post',
          thumbnail:'"https://news.cgtn.com/news/2020-11-02/Analysis-China-is-betting-on-science-and-tech-like-never-before-V68V871ula/img/871ca9ce8b9941088260b6ed4ced4eeb/871ca9ce8b9941088260b6ed4ced4eeb.jpeg"'
        },
        {
          id:'2',
          title:'Second Post',
          previewText:'This is our second post',
          thumbnail:'"https://news.cgtn.com/news/2020-11-02/Analysis-China-is-betting-on-science-and-tech-like-never-before-V68V871ula/img/871ca9ce8b9941088260b6ed4ced4eeb/871ca9ce8b9941088260b6ed4ced4eeb.jpeg"'
        }
      ]

      }
        )
      },1000);
    })
    .then(data =>{
        return data
      })
      .catch(e=>{
        context.error(new Error())
      })
  },
  created(){
    this.$store.dispatch('setPosts', this.loadedPosts)
  }
}
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

