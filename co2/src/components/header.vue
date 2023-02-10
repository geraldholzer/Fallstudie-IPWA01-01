<template>
   <header>
 
        <div class ="Navi" id="Startseite"><HeadButton titel="Startseite" link="/"></HeadButton></div>
        <div class ="Navi" id="Seite2"><HeadButton titel=" CO2-Auswirkungen" link="/about"></HeadButton></div>
        <div class ="Navi" id="Seite3"><HeadButton titel="Seite2"></HeadButton></div>
    
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
    /* grid-template-columns: 1fr 1fr 1fr; */
    grid-auto-columns: 1fr;
    grid-template-areas: 
     'one two three';
    gap: 0.5rem;
    height:fit-content;
    background-color:rgb(22, 75, 40);
    opacity:0.85;
   
    /* border-radius: 1rem; */

}
.Navi{
    margin-top: 1.5rem;
    margin-bottom:1.5rem;
    text-align:center;
    align-self:center;
    padding-left:2rem;

}
#Startseite{
    grid-area:one;

    /* grid-column: 1 / 1; */
}
#Seite2{
    /* grid-column: 2 / 2; */
  grid-area:two;
}
#Seite3{
    /* grid-column: 3 / 3; */
    grid-area:three;
}
@media screen and (max-width: 500px){
    header {grid-template-areas: 
     'one' 'two''three';
    }
}
</style>