<template >

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
          <a :href="'/champions/' + item.ind">
             <v-img v-bind:src="require('@/assets' + item.imagePath)" aspect-ratio="1" height="100" width="100"> </v-img>
             <div class="white--text" justify="center" align="center"> {{ item.ind }} </div>
          </a>
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