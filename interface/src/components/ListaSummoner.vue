<template>
  <v-container class="black">
    <v-row no-gutters>
      <template v-for="(item,index) in summoner">
        <v-col :key="index">
          <v-dialog
            v-model="dialog"
            width="500"
          >
            <template v-slot:activator="{ on, attrs }">
              <div class='activator' v-bind="attrs"
                v-on="on">
              <v-img v-bind:src="require('@/assets/spell/' + item.path)" aspect-ratio="1" height="80" width="80"/>
             <v-card-title primary-title> {{ item.name }} </v-card-title>
              </div>
            </template>

            <v-card>
              <v-card
            class="black"
            outlined
            tile
            justify="left"
            center 
          >
             <v-img center v-bind:src="require('@/assets/spell/' + item.path)" aspect-ratio="1" height="80" width="80"/>
             <v-card-title primary-title> {{ item.name }} </v-card-title>
             <v-card-text>
                {{item.desc}}
              </v-card-text>
          </v-card>
              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog></v-col>
           <v-responsive
          v-if="index === 6"
          :key="`width-${index}`"
          width="100%"
        ></v-responsive>
      </template>
    </v-row>
  </v-container>
</template>


<script>
import axios from 'axios'
const lhost = require("@/config/global").host;

import { mdiMovieOpen } from '@mdi/js';

export default {
  name: 'ListaSummoner',

  data: () => ({
    summoner: [],
    verPersonagem: mdiMovieOpen
  }),

  created: async function(){
    try {
      let response = await axios.get(lhost + "/summoner");
      this.summoner = response.data
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