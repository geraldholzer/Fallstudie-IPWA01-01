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
    color:rgb(232, 240, 235);
    padding-left: 0.1rem;
    font-size:0.75rem;
    padding-bottom:0.7rem;
    background-color:rgb(22, 75, 33);
    width:100vw;
    height:0.05rem;
    text-align:left;
}

</style>