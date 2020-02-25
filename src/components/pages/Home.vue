<template>
<div>
   <Master v-bind:headerContent="headerContent">
   <template v-slot:content>
   <div v-for="post in posts" :key="post.id">
     <router-link :to="{ name: 'Sample', params: { teamid: post.id }}"><h3>{{ post.title}}</h3></router-link>
      <p>{{post.body}}</p>
      
   <hr>
</div>

</template>
</Master>
<router-view></router-view>
</div>

</template>

<script>
import Master from '../Layouts/Master'
import axios from 'axios'

export default {
    name: 'Home',
    components:{
        Master
    }, 
    data(){
      return{
        posts:[],
        headerContent:{
          backgroundImage:"https://blackrockdigital.github.io/startbootstrap-clean-blog/img/home-bg.jpg",
          heading:"Clean Blog ",
          subheading:"A Blog theme by Start Bootstrap"
        }
      }
    },
    created() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          //  console.log(response)
           this.posts = response.data
    })
  }
}
</script>
