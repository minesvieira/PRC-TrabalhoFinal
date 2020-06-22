<template>
  <div class="root">
    <div v-if="background" :style="{ backgroundImage: `url(${require('@/assets' + background)})`,height:'100%' }" style="display: flex">
      <div class="" style="background: linear-gradient(53deg, rgba(54,54,59,1) 0%, rgba(255,0,0,0) 100%);height:717px;display: flex">
        <div class="overview">
          <div class="core white--text" >
            <h1> {{ champion['core']['0']['name'] }}, {{ champion['core']['0']['title'] }}  </h1>
            <p>Resource used: {{ champion['core']['0']['partype'] }} </p>
          </div>
          <div class="information white--text">
            <p>Attack: {{ this.champion['infoNumbers']['0']['attack'] }}</p>
            <p>Defense: {{ this.champion['infoNumbers']['0']['defense'] }}</p>
            <p>Magic: {{ this.champion['infoNumbers']['0']['magic'] }}</p>
            <p>Difficulty: {{ this.champion['infoNumbers']['0']['difficulty'] }}</p>
          </div>
          <div class="lore white--text" style="width:30%">
          <p> Lore : {{ champion['core']['0']['lore'] }} </p>
          </div>
          <div class="abilities white--text" style="width:30%">
          <p> Abilities:  </p>
          <ul id="abilitites">
            <li v-for="item in champion['abilities']" :key="item.name">
              <v-img :src="require('@/assets' + item.imagePath)" height="50" width="50"  />
              {{ item.name }} : {{item.description}}
            </li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  </div> 
</template>

<style scoped>
  .root {
    background-color:black ;
    min-height: 100vh;
    height: 100%;
    display: flex;  
    flex-wrap: wrap;
  }
  .abilities {
    text-align: justify;
  }
  .lore {
    text-align: justify;
  }

</style>

<script>
import axios from 'axios'
const lhost = require("@/config/global").host;

export default {
  name: 'IndividualChampion',
  props: {
    
  },
  data: () => ({
    champion: {} ,
    background: ''
  }),
  computed: {
       
  },
  created: async function() {
      try {
        let route = this.$route.fullPath.split('/')[2];
        let response = await axios.get(lhost + "/champion/" + route + '/full');
        this.champion = response.data
        console.log(this.champion)
        this.background = this.champion['skins']['0']['splash'].replace('.png','.jpg')
        console.log(this.background)
        console.log(this.champion['core']['0']['name'])
    } 
    catch (e) {
      return e; 
    }
  },
  methods: { 

  }
  
}
</script>