<template>
  <v-container>
    <div class='root'>
      <div class ='itemList'>
        <div class='filters'>
          <div class="container" id="people">
            <div class="filter">
              <label><input type="radio" v-model="selectedCategory" value="All" /> All</label>
              <label v-for="type in this.types" :key='type.type'   ><input type="radio" v-model="selectedCategory" :value='type.type'> {{type.type}} </label>
            </div>
            <!--
            <ul class="people-list">
              <li v-for="item in filteredItems" :key='item.itemID'>{{ item.name }}</li>
            </ul>
            -->
          </div>
        </div>
        <div class='items'>
          <v-row no-gutters>
            <template v-for="item in filteredItems">
              <v-col :key="item.itemID">
                <v-card
                  class="black"
                  outlined
                  tile
                  justify="left"
                  @click="clickMethod(item.itemID)"
                >
                  <v-img v-bind:src="require('@/assets' + item.imagePath)" aspect-ratio="1" height="60" width="60"/> 
                  <div justify="center" align="center"> {{ item.name }} </div>
                  
                </v-card>
              </v-col>
            </template>
          </v-row>
        </div>
        
      </div>
      <div class='itemDetails' v-if = clicked >
        <v-card outlined >
          <div class='into' v-if ='clickedItem.buildsInto.length'>
            <div class='builds'  v-for='into in clickedItem.buildsInto' :key="into.item" >
              <div class='buildsInto'  v-for='itemInto in into' :key="itemInto.item" >
              <v-img v-bind:src="require('@/assets/items/' + itemInto + '.png')" aspect-ratio="1" height="40" width="40" @click="clickMethod(itemInto)"/>
              </div>
            </div>
          </div>

          <div class='from' v-if ='clickedItem.buildsFrom.length'>
            <div class='builds'  v-for='from in clickedItem.buildsFrom' :key="from.item" >
              <div class='buildsFrom'  v-for='itemFrom in from' :key="itemFrom.item" >
              <v-img v-bind:src="require('@/assets/items/' + itemFrom + '.png')" aspect-ratio="1" height="40" width="40" @click="clickMethod(itemFrom)"/>
              </div>
            </div>
          </div>
          <br/>
          <br/>
          <br/>
          <v-card-title> {{clickedItem.core[0].name}}</v-card-title>
          <div class='itemImage'>
            <v-img v-bind:src="require('@/assets' + clickedItem.image[0].imagePath)" aspect-ratio="1" height="60" width="60"/>
          </div>
          <div class='details' v-html=clickedItem.core[0].desc>
             
          </div>
        </v-card>
      </div>
    </div>
  </v-container>
</template>

<style scoped>
  .root {
    min-height: 100vh;
    height: 100%;
    display: flex;  
    flex-wrap: wrap;
  }
  .itemList{
    max-width: 60%;
    flex: 0 0 65%;
  }
  .itemDetails{
    flex: 1;
    padding: top 50px;
    display: block;
  }
  .details {
    max-width: 50%;
    padding:10px;
  }
  .itemImage {
  }
  .buildsFrom{
    float:left;
    justify-content:center;
    margin-bottom:10px;
    margin-top:10px;
  }
  .buildsInto {
    position: relative;
    margin-bottom:10px;
    margin-top:10px;
    float:left;
    justify-content:center;
    min-width: 0
  }
  .into{
    justify-content:center;
  }
  .from{
    justify-content:center;
  }

</style>

<script>
import axios from 'axios'
const lhost = require("@/config/global").host;

export default {
  name: 'ListaItens',
  data: () => ({
    items: [],
    tags:[],
    types:[],
    tagType : [],
    Attack : [],
    Defense : [],
    Tools : [],
    Movement : [],
    Magic : [],
    clickedItem : [],
    clicked : false,
    filtrar: "",
    selectedCategory: "All",
  }),
  computed: {
    filteredItems: function() {
			var category = this.selectedCategory;
      
      if(category == 'All') return this.items
      if(category == 'Attack') return this.Attack
      if(category == 'Defense') return this.Defense
      if(category == 'Tools') return this.Tools
      if(category == 'Movement') return this.Movement
      if(category == 'Magic') return this.Magic
      return this.items
		}
   },

  created: async function(){
    try {
      let response = await axios.get(lhost + "/item/items2");
      let defenseItems = await axios.get(lhost + "/item/itemType/Defense");
      let attackItems = await axios.get(lhost + "/item/itemType/Attack");
      let toolItems = await axios.get(lhost + "/item/itemType/Tools");
      let movementItems = await axios.get(lhost + "/item/itemType/Movement");
      let magicItems = await axios.get(lhost + "/item/itemType/Magic");
      this.items = response.data.item
      this.Attack = attackItems.data
      this.Defense = defenseItems.data
      this.Tools = toolItems.data
      this.Movement = movementItems.data
      this.Magic = magicItems.data

      console.log(this.items)
    } 
    catch (e) {
      return e;
    }
  },
  mounted: async function (){
    try {
      let tagsResponse = await axios.get(lhost + "/item/tags");
      let typesResponse = await axios.get(lhost + "/item/types");
      let tagTypeResponse = await axios.get(lhost + "/item/tagType");
      this.tags = tagsResponse.data
      this.types = typesResponse.data
      this.tagType = tagTypeResponse.data

    } 
    catch (e) {
      return e;
    }
  },

  methods: {
    mostraPersonagem: function(item){
      alert('Cliquei na personagem: ' + JSON.stringify(item))
      this.$router.push("/personagens/" + item.id);
    },
    clickMethod : async function (item) {
      this.clicked = true
      let Response = await axios.get(lhost + "/item/" + item)
      this.clickedItem = Response.data
      console.log(JSON.stringify(this.clickedItem))
    }
  }
  
}
</script>