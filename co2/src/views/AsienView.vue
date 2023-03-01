<template>
 <!-- Header start -->

<div class="cheader">
  <HeaderBar></HeaderBar>
</div>
<!-- Header end -->



<!-- Content start -->
<div class ="ccontent">
  <!-- CO2Tabelle -->
  <CoTable titel="Asien" quelle="asien.json"></CoTable>
  <!-- CO2Tabelle -->

  <!-- Allgemeiner Text -->
  <div id="sprungallgemein" class="sprung"></div>
 <div id="text" class="ctext">
  <h2>Emmisionen Allgemein</h2>
Im Jahr 2016 setzte die Menschheit circa 35 Milliarden Tonnen (35 Gigatonnen, Gt, bzw. 35 Pg) Kohlenstoffdioxid frei,[1] das sind rund 74 % der gesamten ausgestoßenen Treibhausgase. Dies führt zu einer starken Erhöhung der Gesamtmasse an Kohlenstoffdioxid in der Atmosphäre von ca. 3000 Gigatonnen um jährlich etwa 1 %.

Mehr als die Hälfte der weltweiten Emissionen verursachten die vier Staaten Volksrepublik China, USA, Indien und Russland. Historisch betrachtet gehen die größten Mengen allerdings noch auf das Konto früherer Industriestaaten.[2] Bei einer Betrachtung pro Kopf liegen entwickelte Länder weit vor Entwicklungs- und Schwellenländern wie China und Indien. In Europa waren Deutschland, Großbritannien, Frankreich und Italien die größten Emittenten. Deutschland lag 2016 mit 753 Millionen Tonnen weltweit auf Rang sechs, 64 Prozent der im Jahr 1979 emittierten Rekordmenge von 1176,4 Millionen Tonnen CO2.

Das Energieversorgungsunternehmen mit der größten Emission von Kohlenstoffdioxid ist nach Angaben der in Washington, D.C. ansässigen Denkfabrik Center for Global Development (CGD) die chinesische Huaneng Power International. In Europa sind die Unternehmen E.ON, Gazprom und RWE die größten Emittenten. Unter den Wärmekraftwerken hat das taiwanische Kraftwerk Taichung den höchsten CO2-Ausstoß. In Europa besitzen das polnische Kraftwerk Bełchatów und das deutsche Kraftwerk Niederaußem die höchste CO2-Emission.

CO2 ist mit einem Anteil von etwa 0,04 % (etwa 400 ppm) in der Atmosphäre enthalten, welcher derzeit mit einer Rate von 2 bis 3 ppm pro Jahr weiter ansteigt. Gegenüber dem vorindustriellen Niveau von 280 ppm führten die bisher durch den Menschen erzeugten CO2-Emissionen bereits zu einer Erhöhung der atmosphärischen Konzentration von über 40 %.  
 </div>
  <!-- Allgemeiner Text -->
  
  <!-- Spezifischer Text -->
  <div id="sprungspezifisch" class="sprung2"></div>
 <div id="text2" class="ctext">
  <h2>Emmisionen Asien</h2>
  Der Treibhausgasausstoß der EU belief sich 2020 auf rund 3,4 Milliarden Tonnen CO2-Äquivalente. Damit lagen die Emissionen 32 % niedriger als 1990. Vor allem die Staaten Mittel- und Osteuropas verzeichneten in den letzten drei Jahrzehnten deutliche Einsparungen. Diese lassen sich zum Teil auf den deutlichen Industrieabbau zu Beginn der 1990er Jahre zurückführen.
  Rund drei Viertel der EU-weiten Treibhausgasemissionen entfallen auf den Bereich Energie (für Industrie, Verkehr, Haushalte u.a.). Die 2020 ausgestoßene Menge entsprach rund 2,5 Milliarden Tonnen CO2-Äquivalente. Um die Klimaziele bis 2030 und Klimaneutralität bis 2050 zu erreichen, will die EU-Kommission das Energiesystem der EU dekarbonisieren. Dafür soll der Anteil erneuerbarer Energien gesteigert und die Energieeffizienz erhöht werden.
</div>
<!-- Spezifischer Text -->
 
</div>

 
<!-- Content end -->

<!-- Navi start -->
<div :class="{cnavil:navilinks,cnavir:navirechts}">
<a class= "clokallink" href="#">Tabelle</a>
<a class= "clokallink" href="#sprungallgemein">Emmisionen Allgemein</a>
<a class= "clokallink" href="#sprungspezifisch">Emmisionen Asien</a>

 
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
  name: 'AsienView',
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
  position:-webkit-sticky;
  
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
  text-align:center;

}
.cnavil{
  display:grid; 
  position:sticky;
  top:8rem;
  grid-area:navl;
  width:10rem;
  background-color:rgb(22, 75, 40);
  height:20rem;
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

.ctext{
  text-align:justify;
  margin-right: 5rem;
  padding-top:1rem;
  padding-bottom:2rem
}
.sprung {visibility: hidden; height: 0px !important; position: absolute; margin-top: 50rem;}
.sprung2 {visibility: hidden; height: 0px !important; position: absolute; margin-top: 100rem;}

@media screen and (max-width: 500px){
 #app{  grid-template-rows:20rem 1fr;
  display:grid;
  justify-self:center;
} 
.cnavil{
  width:5rem;
  margin-right:0.1rem;
  top:19rem;
}

.clokallink{
  font-size:0.7rem;
}
.ctext{
  text-align:justify;
  margin-right: 2rem;
  padding-top:1rem;

}
.sprung {visibility: hidden; height: 0px !important; position: absolute; margin-top: 3.3rem;}
.sprung2 {visibility: hidden; height: 0px !important; position: absolute; margin-top: 62rem;}
}

</style>
