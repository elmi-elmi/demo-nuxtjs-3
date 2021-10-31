<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from "~/components/Admin/AdminPostForm";
import axios from 'axios';
export default {
  components: { AdminPostForm },
  layout: "admin",
  methods:{
    onSubmitted(postData){
      axios.post('https://fir-nuxt-blog-default-rtdb.firebaseio.com/posts.json', {...postData,
      updateData: new Date()})
      .then(result => console.log('resutl --->',result))
      .catch(error=>console.log(error))
    }
  }
};
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>