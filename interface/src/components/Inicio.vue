<template >
  <v-card class="ma-2 black" >
    <v-toolbar color="#C5B358" height="50px">
            <v-btn icon class="hidden-xs-only">
            </v-btn>

            <v-spacer></v-spacer>
          </v-toolbar>
      <v-space> </v-space>
      <v-row align="center" justify="center">
        <v-col cols="5"  class="justify-center">
          <v-layout flex align-center justify-center>
            <v-img justify-center class="text-center" align="center" src="..\assets\foto.jpg" aspect-ratio="1.3"></v-img>
          </v-layout>
        </v-col>
      </v-row>
    <v-row align="center">
    <v-col class="text-center">
      <div class="my-2">
        <v-btn href="ListaChampions.vue">Ir para a Página Principal</v-btn>
      </div>
    </v-col>
    </v-row>
    
  </v-card>
  
</template>

<script>
import axios from 'axios'
const lhost = require("@/config/global").host;

import { mdiMovieOpen } from '@mdi/js';

export default {
  name: 'ListaFilmes',

  data: () => ({
    dynamic: " #000000",
    hfilmes: [
      {text: "Título", sortable: true, value: 'titulo', class: 'subtitle-1'},
      {text: "Data", sortable: true, value: 'data', class: 'subtitle-1'},
      {text: "Língua", sortable: true, value: 'lingua', class: 'subtitle-1'},
      {text: "Duração", sortable: true, value: 'duracao', class: 'subtitle-1'},
      {text: "Popularidade", sortable: true, value: 'pop', class: 'subtitle-1', filterable: false},
      {text: "Operações", value: 'ops', class: 'subtitle-1'}
    ],
    footer_props: {
      "items-per-page-text": "Mostrar",
      "items-per-page-options": [10, 20, 50, 100, -1],
      "items-per-page-all-text": "Todos"
    }, 

    filmes: [],
    filtrar: "",
    verFilme: mdiMovieOpen
  }),

  created: async function(){
    try {
      let response = await axios.get(lhost + "/filmes");
      this.filmes = response.data
    } 
    catch (e) {
      return e;
    }
  },

  methods: {
    mostraFilme: function(item){
      alert('Cliquei no filme: ' + JSON.stringify(item))
      this.$router.push("/filmes/" + item.id);
    }
  }
  
}
</script>
<style scoped>
body {
    margin: 0;
    padding: 0;
    background-color:rgb(250, 28, 65);
}
</style>