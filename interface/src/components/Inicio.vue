<template >
  <v-card class="ma-2 black" >
      <v-space> </v-space>
      <v-col cols="5"  class="justify-center">
        <v-img justify-center class="text-center" align="center" src="..\assets\foto.jpg" aspect-ratio="1.3"></v-img>
      </v-col>
    <v-row align="center">
    <v-col class="text-center">
      <div class="my-2">
        <v-btn>Ir para a Página Principal</v-btn>
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