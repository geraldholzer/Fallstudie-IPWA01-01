<template>
 <!-- Header start -->

<div class="cheader">
  <HeaderBar></HeaderBar>
</div>
<!-- Header end -->



<!-- Content start -->
<div class ="ccontent">
<CoTable></CoTable>


    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse ex pariatur illo ratione quam alias, ad sit doloribus? Enim, fugiat. Dolorem iusto illum doloremque at possimus qui autem, aliquam accusantium.
    </p>
    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse ex pariatur illo ratione quam alias, ad sit doloribus? Enim, fugiat. Dolorem iusto illum doloremque at possimus qui autem, aliquam accusantium.
    </p>
    <p> Lorem ipsum dolor sit, ame   </p>
    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse ex pariatur illo ratione quam alias, ad sit doloribus? Enim, fugiat. Dolorem iusto illum doloremque at possimus qui autem, aliquam accusantium.
    </p>
    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse ex pariatur illo ratione quam alias, ad sit doloribus? Enim, fugiat. Dolorem iusto illum doloremque at possimus qui autem, aliquam accusantium.
    </p>
    <p> Lorem ipsum dolor sit, ame   </p><p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse ex pariatur illo ratione quam alias, ad sit doloribus? Enim, fugiat. Dolorem iusto illum doloremque at possimus qui autem, aliquam accusantium.
    </p>
    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse ex pariatur illo ratione quam a</p>
    <p> Lorem ipsum dolor sit, ame   </p><p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse ex pariatur illo ratione quam alias, ad sit doloribus? Enim, fugiat. Dolorem iusto illum doloremque at possimus qui autem, aliquam accusantium.
    </p>
    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse ex pariatur illo ratione quam alias, ad sit doloribus? Enim, fugiat. Dolorem iusto illum doloremque at possimus qui autem, aliquam accusantium.
    </p>
    <p> Lorem ipsum dolor sit, ame   </p><p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse ex pariatur illo ratione quam alias, ad sit doloribus? Enim, fugiat. Dolorem iusto illum doloremque at possimus qui autem, aliquam accusantium.
    </p>
    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse ex pariatur illo ratione quam alias, ad sit doloribus? Enim, fugiat. Dolorem iusto illum doloremque at possimus qui autem, aliquam accusantium.
    </p>
    <p id="test">tesssssssst Lorem ipsum dolor sit, ame   </p><p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse ex pariatur illo ratione quam alias, ad sit doloribus? Enim, fugiat. Dolorem iusto illum doloremque at possimus qui autem, aliquam accusantium.
    </p>
    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse ex pariatur illo ratione quam alias, ad sit doloribus? Enim, fugiat. Dolorem iusto illum doloremque at possimus qui autem, aliquam accusantium.
    </p>
    <p> Lorem ipsum dolor sit, ame   </p>
 
  </div>
<!-- Content end -->

<!-- Navi start -->
<div :class="{cnavil:navilinks,cnavir:navirechts}">

<router-link class="clokallink" to="#" v-scroll-to="'#test'">
    Scroll to #section-two
</router-link>
<router-link class="clokallink" to="#" v-scroll-to="'#test'">
    Scroll to #section-two
</router-link>
<router-link class="clokallink" to="#" v-scroll-to="'#test'">
    Scroll to #section-two
</router-link>
 
</div>

<!-- Navi end-->


<!-- Footer start -->
<div class="cfooter">
  <FooterBar text="Dies sind rechtliche Hinweise"></FooterBar>
</div>

<!-- Footer end -->


</template>




<script >
import FooterBar from '@/components/footer.vue'
import HeaderBar from '@/components/header.vue'

import CoTable from '@/components/COTable.vue'





export default {
  name: 'HomeView',
  components: {
    FooterBar,
    HeaderBar,
    CoTable
  },
  data(){
    return {
      navirechts:false,
      navilinks:true,
      posts:[]
    }
  },
mounted(){
  // Abfragen der Browserspracheinstellung
let navigator=window.navigator
              
        if(navigator.language==="de-DE"){
         this.navilinks=true;
          this.navirechts=false;
         }
         else if (navigator.language==="en"){
          this.navilinks=false;
          this.navirechts=true;
         }


},


}

</script>

<style>

#app{
  display:grid;
 grid-template-rows:8rem  1fr; 
  grid-template-areas:
  'header header header'
  'navl content navr';
margin:none;
  
}
.cheader{
  display:grid;
  grid-area:header;
  position:sticky;
  top: 1rem;
  margin-bottom:2rem;
  margin-right:1vw;
  margin-left:1vw;

}
.ccontent{
  display:grid;
  grid-area:content;
}
.cnavil{
  display:grid;
  grid-area:navl;
  width:10rem;
  background-color:rgb(22, 75, 40);
  height:20rem;
}
.cnavir{
  display:grid;
  grid-area:navr;
  width:10rem;
  background-color:rgb(22, 75, 40);
  height:20rem;
}
.cfooter{
  display:flex;
  position:fixed;
  width:100rem;
  height:1.4rem;
  bottom:20px;
  background-color:rgb(22, 75, 40);
  
}
.clokallink{
  color:white;
  font-style: italic;
  font-size:1rem;
  border-style:solid;
  border-width:0.05rem;
  border-collapse:collapse;
  padding:0.6rem;
  text-align:justify;
}
.clokallink:hover{
  background-color:brown;
}
@media screen and (max-width: 500px){
 #app{  grid-template-rows:20rem 1fr;  } 
.cnavil{
  width:5rem;
  margin-right:0.1rem;
}
.cnavir{
  width:3rem;
  margin-left:0.1rem;
}
.clokallink{
  font-size:0.5rem;
}
}
</style>
