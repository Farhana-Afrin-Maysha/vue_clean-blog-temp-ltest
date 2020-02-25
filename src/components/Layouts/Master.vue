<template>
    <div>
        <!-- nav -->
        <Navbar/>
        <!-- page header -->
          <Header v-bind:headerContent="headerContent">
         </Header>
        <div class="container">
         <div class="row">
           <div class="col-lg-8 col-md-10 mx-auto">
               <slot name="content"></slot>               
             </div>
          </div>
        </div>  
        
        <!-- footer -->
        <Footer/>
    </div>   
</template>

<script>
 import Navbar from './Partials/Navbar'
 import Header from './Partials/Header'
 import Footer from './Partials/Footer'

export default {
    name: 'Master',
    props:["headerContent"],
    components:{
      Navbar,
      Header,
      Footer

    }
}
</script>