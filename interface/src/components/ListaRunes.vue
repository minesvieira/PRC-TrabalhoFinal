<template>
  <v-container class="black">
    <v-row no-gutters>
      <template v-for="item in runes">
        <v-col :key="item.name">
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

import { mdiMovieOpen } from '@mdi/js';

export default {
  name: 'ListaRunes',

  data: () => ({

    runes: [],
    verPersonagem: mdiMovieOpen
  }),

  created: async function(){
    try {
      let response = await axios.get(lhost + "/rune");
      this.runes = response.data
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