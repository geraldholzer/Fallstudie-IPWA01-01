<template>
  <!-- Variable Überschrift mit Logo -->
   <h1 class="cheadline"><img src="favicon.ico" height=30>{{titel}} </h1>
   
   <!-- Tabelle -->
<table border="1" id="datatable"> 
      <!-- Tabellenkopf mit Überschriften -->
  <thead >
        <tr>
          <th id="tablehead" > Land    
            <select id="selectländer" @click="this.selectfunction">
              <option value="clearfilter">kein Filter</option>
              <option  :key= element.Land v-for="element in uniqueLand" :value=element>{{ element }} </option>
          </select>
          <button id="sortbutton" @click="this.sortland">sort</button></th>

          <th id="tablehead" >Unternehmen
            <select id="selectunternehmen" @click="this.selectunternehmenfunction">
              <option value="clearfilter">kein Filter</option>
              <option  :key= element.Ausstoß v-for="element in daten"  :value=element.Unternehmen>{{ element.Unternehmen }} </option>
          </select> 
           <button id="sortbutton" @click="this.sortunternehmen">sort</button>
          </th>

          <th id="tablehead" @dblclick="this.sortausstoß">Ausstoß/Tonnen
            <button id="sortbutton" @click="this.sortausstoß">sort</button>           
          </th>
        </tr>
      </thead>

      <tbody :key="datensatz.Ausstoß" v-for="datensatz in daten">
        <tr >
          <td id="tabledata">{{datensatz.Land}}</td>
          <td id="tabledata">{{datensatz.Unternehmen}}</td>
          <td id="tabledata">{{datensatz.Ausstoß}}</td>
          </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>Land</th>
          <th>Unternehmen</th>
          <th>Ausstoß/Tonnen</th>
        </tr>
      </tfoot>
</table>

<div></div>
</template>


<script>








export default {
name: 'CoTable',
props:{
quelle:String,
titel:String
},
data(){

 return{ 
        daten :[],
        ascending:false,
        ascendingland:false,
        ascendingunternehmen:false,    
        länder:[],
        selectedvalue:String,
        selectedunternehmenvalue:String,
        datenoriginal:[],
        filtered:false,
        filteredunternehmen:false
      }
      },
      
      watch:{
              
                selectedvalue(){this.filterfunction();},
                selectedunternehmenvalue(){this.filterunternehmenfunction();}
            },
         

    mounted()
    // Daten aus JSON Quelle laden
    {
fetch(this.quelle)
        .then((response)=>{return response.json()})
        .then((data)=>{
          this.daten=data.datei;
        });

    },

computed: {
  // Methode um Doppelte Werte im Filter zu vermeiden
    uniqueLand: function() {
      var filtered_array = [];
      for(var i =0; i < this.daten.length; i++) {
        if(filtered_array.indexOf(this.daten[i].Land) === -1) {
          filtered_array.push(this.daten[i].Land)
        }
      }
    return filtered_array;
    }
  },
       
      

  methods:{

   // nach Ausstoß sortieren
        sortausstoß(){
      if(this.ascending==true){ 
          this.daten=this.daten.sort(function(a,b){return a.Ausstoß-b.Ausstoß;});
          this.ascending=false;
       }

      else if(this.ascending==false){  
      this.daten=this.daten.sort(function(a,b){return b.Ausstoß-a.Ausstoß;});
      this.ascending=true;
       }
},
    // nach Länder sortieren
sortland(){ 

      if(this.ascendingland==true){ 
         this.ascendingland=false;
          this.daten.sort(function(a,b){  let x = a.Land.toLowerCase();
                let y = b.Land.toLowerCase();            
                if (x < y) {return -1;}
                if (x > y) {return 1;}            
                return 0; }
                );          

       }

      else if(this.ascendingland==false){  
        this.ascendingland=true;
        this.daten=this.daten.sort(function(a,b){ 
        let x = a.Land.toLowerCase();
        let y = b.Land.toLowerCase();      
                if (x > y) {return -1;}
                if (x < y) {return 1;}
                return 0;}
                );
        }
       },
       // nach Unternehmen sortieren
       sortunternehmen(){
        if(this.ascendingunternehmen==true){ 
          this.ascendingunternehmen=false;
          this.daten=this.daten.sort(function(a,b){  let x = a.Unternehmen.toLowerCase();
            let y = b.Unternehmen.toLowerCase();
            if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;});
                
       }
       
      else if(this.ascendingunternehmen==false){  
        this.ascendingunternehmen=true;
        this.daten=this.daten.sort(function(a,b){ 
          let x = a.Unternehmen.toLowerCase();
        let y = b.Unternehmen.toLowerCase();
                if (x > y) {return -1;}
                if (x < y) {return 1;}
                return 0;});}
    
              },

              // Funktion zur übergabe der Filterauswahl in der Länderspalte             
               selectfunction(){
                let select= document.getElementById('selectländer');
                this.selectedvalue=select.options[select.selectedIndex].value    
               
               },
                  // Funktion zur übergabe der Filterauswahl in der Unternehmensspalte  
               selectunternehmenfunction(){
                let select= document.getElementById('selectunternehmen');
                this.selectedunternehmenvalue=select.options[select.selectedIndex].value    
               
               },
              //  Filterfunction für Länderspalte
               filterfunction(){
                 
                    let sel=this.selectedvalue
                 if(sel!=""&&sel!="clearfilter"){ 
                  this.datenoriginal=this.daten                
                  this.daten = this.daten.filter(function(elem){return elem.Land==sel})
                  this.filtered=true
                }   if(sel==="clearfilter"&& this.filtered==true){
                    this.daten=this.datenoriginal
                }             
               },
              //  Filterfunction für Unternehmensspalte

               filterunternehmenfunction(){
                 let sel=this.selectedunternehmenvalue
              if(sel!=""&&sel!="clearfilter"){ 
               this.datenoriginal=this.daten                
               this.daten = this.daten.filter(function(elem){return elem.Unternehmen==sel})
               this.filtered=true
             }   if(sel==="clearfilter"&& this.filtered==true){
                 this.daten=this.datenoriginal
             }             
            },


        },   
                
          
                    
           }
              
            
          

            

</script>
<style>
#datatable{
  border-style:solid;
  border-color:aquamarine;
  border-collapse: collapse;
  border-width:0.1rem;
  width:80vw;
}
.cheadline{
  font-family:cursive;
}
#tablehead{
  /* border-style:solid;
  border-color:black; */
  background-color:rgb(11, 133, 11);
  font-style: italic;
  
}
#tabledata{
text-align:center;
font-style:italic;
}


#sortbutton{
width:2.5rem;
border-radius:0.3rem;
background-color:rgb(26, 80, 127);
text-align:left;
color:white;
border-color:white;
border-width:0.07rem;
}

</style>