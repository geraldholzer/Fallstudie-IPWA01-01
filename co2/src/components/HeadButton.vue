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
background-color:rgb(104, 22, 22);
border-color:grey;
border-radius: 0.2rem;
border-style:groove;
width:12rem;
height:2.7em;
}
</style>