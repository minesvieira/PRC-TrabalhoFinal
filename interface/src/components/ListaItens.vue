<template>
  <v-container>
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
    <v-row no-gutters>
      <template v-for="item in filteredItems">
        <v-col :key="item.itemID">
          <v-card
            class="black"
            outlined
            tile
            justify="left"
          >
             <v-img v-bind:src="require('@/assets' + item.imagePath)" aspect-ratio="1" height="80" width="80"> </v-img>
             <div class="white--text" justify="center" align="center"> {{ item.name }} </div>
             
          </v-card>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>


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
  }
  
}
</script>