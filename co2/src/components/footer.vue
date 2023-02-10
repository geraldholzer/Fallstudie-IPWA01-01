 <template>
  <footer>
       <p>  {{ text }}    </p>
  </footer>

</template>



<script>
export default {
    name:'FooterBar',
props:{
    text:String,
}

}
</script>

<style>
footer{
    /* display:grid; */
    /* background-color:rgb(50, 36, 36); */
    color:rgb(232, 240, 235);
    padding-left: 2rem;
    font-size:0.7rem;
}

</style>