<template>
<table border="1" id="datatable"> 
      <thead >
        <tr>
          <th id="tablehead" > Land    
            <select id="selectländer" @click="this.selectfunction">
              <option value="clearfilter">kein Filter</option>
              <option  :key= element.Land v-for="element in daten"  :value=element.Land>{{ element.Land }} </option>
          </select>
          <button id="sortbutton" @click="this.sortland">sort</button></th>

          <th id="tablehead" >Unternehmen
            <select id="selectunternehmen" @click="this.selectunternehmenfunction">
              <option value="clearfilter">kein Filter</option>
              <option  :key= element.Land v-for="element in daten"  :value=element.Unternehmen>{{ element.Unternehmen }} </option>
          </select>
           <button id="sortbutton" @click="this.sortunternehmen">sort</button>
          </th>

          <th id="tablehead" @dblclick="this.sortausstoß">Ausstoß/Tonnen
            <button id="sortbutton" @click="this.sortausstoß">sort</button>           
          </th>
        </tr>
      </thead>
      <tbody :key="datensatz.Land" v-for="datensatz in daten">
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
data(){

 return{ daten :[],

    //   {
    //   Land: 'aZsterreich',
    //   Unternehmen: "OMV",
    //   Ausstoß:800
    //   },
    //   {
    //   Land: "bDeutschland",
    //   Unternehmen: "BASF",
    //   Ausstoß:9100
    //   },    
    //  {
    //   Land: "cRussland",
    //   Unternehmen: "Gazprom",
    //   Ausstoß:1200
    //   },
    //   {
    //   Land: "aSchweiz",
    //   Unternehmen: "Nestle",
    //   Ausstoß:70
    //   }
  
        // ],
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
    {
fetch('data.json')
        .then((response)=>{return response.json()})
        .then((data)=>{
          this.daten=data.datei;
          console.log(this.daten)
        });

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
          this.daten=this.daten.sort(function(a,b){  let x = a.Land.toLowerCase();
                let y = b.Land.toLowerCase();
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;});
         
       }

      else if(this.ascendingland==false){  
        this.ascendingland=true;
        this.daten=this.daten.sort(function(a,b){ 
        let x = a.Land.toLowerCase();
        let y = b.Land.toLowerCase();
                if (x > y) {return -1;}
                if (x < y) {return 1;}
                return 0;});}
    
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
                               
               selectfunction(){
                let select= document.getElementById('selectländer');
                this.selectedvalue=select.options[select.selectedIndex].value    
               
               },
               selectunternehmenfunction(){
                let select= document.getElementById('selectunternehmen');
                this.selectedunternehmenvalue=select.options[select.selectedIndex].value    
               
               },
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
#tablehead #tooltip {
  visibility: hidden;
  width: 3rem;
  background-color: rgb(225, 216, 216);
  color: #292727;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  margin-left:6.5rem;
  font-size:0.4rem;

}

#tablehead:hover #tooltip {
  visibility: visible;
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