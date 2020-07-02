<template>
  <v-container class="bv-example-row">
      <v-row
        no-gutters
      >
        <v-col class="mb-2">
          <h3 class="white--text"> Precision </h3>
          <v-img v-bind:src="require('@/assets/perk-images/Styles/7201_Precision.png')" aspect-ratio="1" height="40" width="40"> </v-img>
          <v-space></v-space>
          <v-list-item v-for="item in runes" :key="item.name">
            <v-card
              class="black"
              outlined
              tile
              justify="left"
            >
              <v-img v-bind:src="require('@/assets' + item.imagePath)" aspect-ratio="1" height="80" width="80"> </v-img>
              <div class="white--text" justify="center" align="center"> {{ item.name }} </div>
            </v-card>
          </v-list-item>
        </v-col>
        <v-col class="mb-2">
          <h3 class="white--text"> Domination </h3>
          <v-img v-bind:src="require('@/assets/perk-images/Styles/7200_Domination.png')" aspect-ratio="1" height="40" width="40"> </v-img>
          <br>
          <v-list-item v-for="item in runes" :key="item.name">
            <v-card
              class="black"
              outlined
              tile
              justify="left"
            >
              <v-img v-bind:src="require('@/assets' + item.imagePath)" aspect-ratio="1" height="80" width="80"> </v-img>
              <div class="white--text" justify="center" align="center"> {{ item.name }} </div>
            </v-card>
          </v-list-item>
        </v-col>
        <v-col class="mb-2">
          <h3 class="white--text"> Sorcery </h3>
          <v-img v-bind:src="require('@/assets/perk-images/Styles/7202_Sorcery.png')" aspect-ratio="1" height="40" width="40"> </v-img>
          <v-list-item v-for="item in runes" :key="item.name">
            <v-card
              class="black"
              outlined
              tile
              justify="left"
            >
              <v-img v-bind:src="require('@/assets' + item.imagePath)" aspect-ratio="1" height="80" width="80"> </v-img>
              <div class="white--text" justify="center" align="center"> {{ item.name }} </div>
            </v-card>
          </v-list-item>
        </v-col>
        <v-col class="mb-2">
          <h3 class="white--text"> Resolve </h3>
          <v-img v-bind:src="require('@/assets/perk-images/Styles/7204_Resolve.png')" aspect-ratio="1" height="40" width="40"> </v-img>
          <v-list-item v-for="item in runes" :key="item.name">
            <v-card
              class="black"
              outlined
              tile
              justify="left"
            >
              <v-img v-bind:src="require('@/assets' + item.imagePath)" aspect-ratio="1" height="80" width="80"> </v-img>
              <div class="white--text" justify="center" align="center"> {{ item.name }} </div>
            </v-card>
          </v-list-item>
        </v-col>
        <v-col class="mb-2">
          <h3 class="white--text"> Inspiration </h3>
          <v-img v-bind:src="require('@/assets/perk-images/Styles/7203_Whimsy.png')" aspect-ratio="1" height="40" width="40"> </v-img>
          <v-list-item v-for="item in runes" :key="item.name">
            <v-card
              class="black"
              outlined
              tile
              justify="left"
            >
              <v-img v-bind:src="require('@/assets' + item.imagePath)" aspect-ratio="1" height="80" width="80"> </v-img>
              <div class="white--text" justify="center" align="center"> {{ item.name }} </div>
            </v-card>
          </v-list-item>
        </v-col>
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