<template>
   <header>
        <div class ="cNavi" id="Europa"><HeadButton titel="Europa" link="/"></HeadButton></div>
        <div class ="cNavi" id="Asien"><HeadButton titel="Asien" link="/asien"></HeadButton></div>
        <div class ="cNavi" id="Amerika"><HeadButton titel="Amerika" link="/amerika"></HeadButton></div>
   </header>
</template>



<script>
import HeadButton from './HeadButton'

export default {
    name:'HeaderBar',
components:{
    HeadButton,
}}
</script>



<style>
header{
    color:aliceblue;
    display:grid;
    grid-auto-columns: 1fr;
    grid-template-areas: 
     'one two three';
    gap: 0.5rem;
    height:fit-content;
    background-color:rgb(22, 75, 40);
    opacity:0.85;

}
.cNavi{
    margin-top: 1.5rem;
    margin-bottom:1.5rem;
    text-align:center;
    align-self:center;
    padding-left:2rem;

}
#Europa{
    grid-area:one;
}
#Seite2{
  grid-area:two;
}
#Seite3{
    grid-area:three;
}
/* Anpassung der Schaltflächenanordnung bei kleineren Bildschirmen */
@media screen and (max-width: 500px){
    header {grid-template-areas: 
     'one' 'two''three';
    }
}
</style>