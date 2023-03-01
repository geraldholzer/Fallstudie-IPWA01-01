<template>
    <button @click="$router.push($router.name=link)" class="cheadbutton">{{ titel }}</button>
</template>


<script>
export default {
name:'HeadButton',
props: {titel: String,
        link:String
},
}
</script>

<style>

.cheadbutton{
color:white;
border-color:grey;
border-radius: 0.2rem;
border-style:groove;
width:14rem;
height:2.7em;
background-color:rgb(22, 75, 40);
}
.cheadbutton:hover{
    background-color:rgb(124, 7, 7);   

}
</style>