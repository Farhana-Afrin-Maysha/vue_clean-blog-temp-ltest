<template>
    <div>
      <Master v-bind:headerContent="headerContent">
          <template v-slot:content>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime quae totam ducimus consectetur?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius praesentium recusandae illo eaque architecto error, repellendus iusto reprehenderit, doloribus, minus sunt. Numquam at quae voluptatum in officia voluptas voluptatibus, minus!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur magnam, excepturi aliquid ex itaque esse est vero natus quae optio aperiam soluta voluptatibus corporis atque iste neque sit tempora!</p>
          </template>
      </Master>
    </div>   
</template>

<script>
import Master from '../Layouts/Master'
export default {
    name: 'Contact',
    components:{
        Master
    },
    data(){
      return{
        headerContent:{
          backgroundImage:"https://blackrockdigital.github.io/startbootstrap-clean-blog/img/about-bg.jpg",
          heading:"About Me ",
          subheading:"This is What I do"
        }
      }
    }
}
</script>
