<template >
  <v-card class="ma-2 black" >
    <v-toolbar color="#C5B358" height="50px">
        <v-toolbar-title class="black--text">League of Legends</v-toolbar-title>
            <v-btn icon class="hidden-xs-only">
            </v-btn>
            <v-spacer></v-spacer>
        <v-btn text to="/itens">
            <p >Items</p>
        </v-btn>
        <v-btn text to="/runes">
            <p >Runes</p>
        </v-btn>
        <v-text-field
        hide-details
        single-line
        ></v-text-field>
    </v-toolbar>
    <br>
    <br>
    <h1 class="white--text" style="margin-left:40px"> LOL CHAMPIONS</h1>
    <br>

  <template>
  <v-container class="black">
    <v-row no-gutters>
      <template v-for="item in champions">
        <v-col :key="item.ind">
          <v-card
            class="black"
            outlined
            tile
            justify="left"
          >
             <v-img v-bind:src="require('@/assets' + item.imagePath)" aspect-ratio="1" height="100" width="100"> </v-img>
             <div class="white--text" justify="center" align="center"> {{ item.ind }} </div>
             
          </v-card>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

  </v-card>
    
  
</template>

<script>
import axios from 'axios'
const lhost = require("@/config/global").host;

import { mdiMovieOpen } from '@mdi/js';

export default {
  name: 'ListaChampions',

  data: () => ({
    champions: [],
    verPersonagem: mdiMovieOpen,
  }),

  created: async function(){
    try {
      let response = await axios.get(lhost + "/champion/main");
      this.champions = response.data
      this.champions.forEach(champ => {
        champ.imagePath = champ.imagePath.replace(".png",".jpg")
        console.log(champ.imagePath)
      });
    } 
    catch (e) {
      return e;
    }
  },

  methods: {
    mostraPersonagem: function(item){
      alert('Cliquei na personagem: ' + JSON.stringify(item))
      this.$router.push("/personagens/" + item.id);
    }
  }
  
}
</script>