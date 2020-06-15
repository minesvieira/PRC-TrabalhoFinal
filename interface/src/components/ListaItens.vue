<template >
  <v-card class="ma-2 black" >
    <v-toolbar color="#C5B358" height="50px">
        <v-toolbar-title class="black--text">League of Legends</v-toolbar-title>
            <v-btn icon class="hidden-xs-only">
            </v-btn>
            <v-spacer></v-spacer>
        <v-btn text to="/champions">
            <p>Champions</p>
        </v-btn>
        <v-btn text to="/runes">
            <p>Runes</p>
        </v-btn>
          </v-toolbar>
    
    <br>
    <h1 class="white--text" align="center" size="30px"> ALL ITEMS </h1>
    <br>
    <v-row>
        <v-col lg="2">
           <input type="checkbox" id="checkbox" v-model="checked">
           <label class="white--text" for="checkbox">  Item Type</label>
           <br>
           <br>
           <br>
           <input type="checkbox" id="checkbox" v-model="checked">
           <label class="white--text" for="checkbox">  Item Tag</label>
            
        </v-col>
        <v-col lg="10" class="pa-6" v-for="n in 3"
        :key="n">
            <v-avatar tile color="blue" size="100">
                <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                >
            </v-avatar>
            <v-avatar tile color="blue"  size="100" >
                <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                >
            </v-avatar>
            <v-avatar tile color="blue" size="100">
                <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                >
            </v-avatar>
            <v-avatar tile color="blue"  size="100">
                <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                >
            </v-avatar>
            <v-avatar tile color="blue" size="100">
                <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                >
            </v-avatar>
            <v-avatar tile color="blue" size="100">
                <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                >
            </v-avatar>
            <v-avatar tile color="blue"  size="100">
                <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                >
            </v-avatar>
            <v-avatar tile color="blue"  size="100">
                <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                >
            </v-avatar>
            <v-avatar tile color="blue"  size="100">
                <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                >
            </v-avatar>
            <v-avatar tile color="blue"  size="100">
                <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                >
            </v-avatar>
            <v-avatar tile color="blue"  size="100">
                <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                >
            </v-avatar>
            <v-avatar tile color="blue"  size="100">
                <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                >
            </v-avatar>
        </v-col>
        
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