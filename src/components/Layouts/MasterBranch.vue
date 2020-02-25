<template>
    <div>
        <!-- nav -->
        <Navbar/>
        <!-- page header -->
        <HeaderBranch v-bind:headerContent="headerContent">
         </HeaderBranch>
       <article>
        <div class="container">
         <div class="row">
           <div class="col-lg-8 col-md-10 mx-auto">
               <slot name="content"></slot>
               
             </div>
          </div>
        </div>  
      </article>  
        <!-- footer -->
        <Footer/>
    </div>   
</template>

<script>
 import Navbar from './Partials/Navbar'
 import HeaderBranch from './Partials/HeaderBranch'
 import Footer from './Partials/Footer'
export default {
    name: 'MasterBranch',
    props:["headerContent"],
    components:{
      Navbar,
      HeaderBranch,
      Footer

    }
}
</script>