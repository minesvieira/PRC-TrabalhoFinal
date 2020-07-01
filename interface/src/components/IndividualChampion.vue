<template>
  <div class="root">
      <v-tabs
        v-model="tab"
        class="elevation-2"
        dark>
        <v-tab>
          Overview
        </v-tab>
          <v-tab-item>
            <div class="overview">
              <div class="textSide">
                <!--Start of textSide, core information-->
                <div class="core" >
                    <h1> 
                      {{ champion['core']['0']['name'] }}, {{ champion['core']['0']['title'] }}  
                    </h1>
                    <div class='tags'>
                      <v-chip class ='tags' label v-for="item in champion['tags']" :key="item.message" >
                        {{ item.tag }} 
                      </v-chip>
                    </div>
                    <div class='partype'>
                      <v-chip label style="padding:4px" :color="this.partype" width='200'>
                        <h3>Resource used: {{ champion['core']['0']['partype'] }} </h3>
                      </v-chip>
                    </div>
                </div>
                <!-- Start of champion information numbers-->
                <div class="information">
                  <p>Attack: {{ this.champion['infoNumbers']['0']['attack'] }}</p>
                  <p>Defense: {{ this.champion['infoNumbers']['0']['defense'] }}</p>
                  <p>Magic: {{ this.champion['infoNumbers']['0']['magic'] }}</p>
                  <p>Difficulty: {{ this.champion['infoNumbers']['0']['difficulty'] }}</p>
                </div>
                <div class="lore" style="width:90%">
                <p> Lore : {{ champion['core']['0']['lore'] }} </p>
                </div>
                <!-- Start of abilities expansion panels -->
                <div class="abilities" style="width:90%">
                <template>
                  <v-row justify="center">
                    <v-expansion-panels accordion dark>
                      <v-expansion-panel
                        v-for="(item,i) in champion['abilities']"
                        :key="i"
                      >
                        <v-expansion-panel-header>
                          {{item.name}} 
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                          <div class='spell' style='display:flex;flex-direction:row;'>
                            <v-img :src="require('@/assets' + item.imagePath)" height="50" contain />
                            {{item.description}}
                          </div>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </v-row>
                </template>
              </div>
            </div>
            <!-- END OF TEXT SIDE, NOW BEGINS IMAGE SLIDESHOW -->
            <v-carousel cycle height="717">
              <v-carousel-item
                v-for="(item,i) in this.champion['skins']"
                :key="i"
                :src="require('@/assets' + item['splash'].replace('.png','.jpg'))"
                reverse-transition="fade-transition"
                transition="fade-transition"
              ></v-carousel-item>
            </v-carousel>
        </div>
      </v-tab-item>
    </v-tabs>
  </div>
  <!--/div>
  -->
</template>

<style scoped>
  .root {
    background-color: #1f1f1f ;
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
  .overview {
    margin: 12px;
    flex-flow: column;
    height: 100%;
    display:flex;
    flex-direction:row;
  }
  .textSide{
    max-width: 40%;
  }
  .imageCarousel{
    flex: 1 1 auto;
  }
  .tags {
    margin-bottom: 5px;
    margin-right: 4px;
  }
  .partype {
    margin-bottom: 10px;
  }

</style>

<script>
import axios from 'axios'
const lhost = require("@/config/global").host;

export default {
  name: 'IndividualChampion',
  components: {
  },
  props: {
    
  },
  data: () => ({
    champion: {} ,
    background: '',
    championInfo:[],
    partype: '',
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
        switch (this.champion['core']['0']['partype']) {
          case 'Mana':
            this.partype='blue darken-4';
            break;
          case 'Crimson Rush':
          case 'Blood Well':
          case 'Fury':
          case 'Heat':
          case 'Rage':
          case 'Grit':
          case 'Ferocity':
            this.partype='red darken-4'
            break;
          case 'Energy':
            this.partype='amber darken-2'
            break;
          case 'Flow':
          case 'Shield':
          case 'None':
              this.partype='grey darken-2'        
              break;  
          default:
            break;
        }
        console.log(this.partype)

    } 
    catch (e) {
      return e; 
    }
  },
  mounted() {
  },
  methods: { 

  }
  
}
</script>