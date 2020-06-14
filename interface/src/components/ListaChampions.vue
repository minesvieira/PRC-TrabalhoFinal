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
        <br>
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
    <v-row justify="space-around">
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

    <v-avatar color="orange" size="150">
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
    hpersonagens: [
      {text: "Id", sortable: true, value: 'id', class: 'subtitle-1'},
      {text: "Nome", sortable: true, value: 'nome', class: 'subtitle-1'},
      {text: "Operações", value: 'ops', class: 'subtitle-1'}
    ],
    footer_props: {
      "items-per-page-text": "Mostrar",
      "items-per-page-options": [10, 20, 50, 100, -1],
      "items-per-page-all-text": "Todos"
    }, 

    personagens: [],
    filtrar: "",
    verPersonagem: mdiMovieOpen
  }),

  created: async function(){
    try {
      let response = await axios.get(lhost + "/personagens");
      this.personagens = response.data
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