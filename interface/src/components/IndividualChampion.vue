<template>
  <v-container class="black">
    <v-row no-gutters>
      <p> conaa </p>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
const lhost = require("@/config/global").host;

import { mdiMovieOpen } from '@mdi/js';

export default {
  name: 'IndividualChampion',

  data: () => ({
    champions: [],
    verPersonagem: mdiMovieOpen,
  }),
  computed: {
       
  },
  created: async function() {
      try {
        let champion = this.$route.fullPath.split('/')[2]
        let response = await axios.get(lhost + "/champion/" + champion + '/full');
        console.log(response.data)
    } 
    catch (e) {
      return e; 
    }
  },
  methods: { 
  }
  
}
</script>