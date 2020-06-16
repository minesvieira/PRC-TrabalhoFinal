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
    <h1 class="white--text" style="margin-left:40px"> LOL CHAMPIONS SEARCH</h1>
    <h3 class="white--text" style="margin-left:40px"> Discover the best builds for every champion</h3>
    <br>
    <v-row justify="space-around" lg="10" class="pa-6" v-for="n in 4" :key="n">
        <v-avatar size="150">
        <img
            src="https://cdn.vuetifyjs.com/images/john.jpg"
        >
        </v-avatar>

    <v-avatar size="150">
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
    </v-avatar>

    <v-avatar size="150">
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
    </v-avatar>

    <v-avatar size="150">
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
    </v-avatar>

  </v-row>
  <br>
  <v-row justify="space-around">
        <p class="white--text"> nome </p>
        <p class="white--text"> nome </p>
        <p class="white--text"> nome </p>
        <p class="white--text"> nome </p>
        <p class="white--text"> nome </p>
        <p class="white--text"> nome </p>
        <p class="white--text"> nome </p>
        <p class="white--text"> nome </p>

  </v-row>
  
  </v-card>
    
  
</template>

<script>
import axios from 'axios'
const lhost = require("@/config/global").host;

import { mdiMovieOpen } from '@mdi/js';

export default {
  name: 'ListaPersonagens',

  data: () => ({
     
    champions: [],
    verPersonagem: mdiMovieOpen
  }),

  created: async function(){
    try {
      let response = await axios.get(lhost + "/champion/main");
      this.champion = response.data
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