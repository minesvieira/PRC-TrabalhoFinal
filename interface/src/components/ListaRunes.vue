<template>
  <v-container> 
    <v-row flex flex-direction='row'>
      <v-card v-for="(treeRune,index) in this.runes" :key='index'  class='ma-1 pa-1' flex >
      {{index}}
        <v-row v-if="index == 'Domination'"  > 
          <v-col v-for="n in 4" :key="n" align-center>
            <v-dialog
              v-model="dialog"
              width="500"
            >
              <template v-slot:activator="{ on, attrs }">
              <v-img v-bind="attrs" v-on="on" v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="90" width="90"/> 
              </template>
              <v-card>
              <v-card
            class="black"
            outlined
            tile
            justify="left"
            center 
          >
             <v-img center v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="80" width="80"/>
             <v-card-title primary-title> {{ treeRune[n-1].name }} </v-card-title>
             <v-card-text v-html=treeRune[n-1].desc />
          </v-card>
              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
                      
 
            </v-dialog>
          </v-col>
        </v-row>
        <v-row v-if="index == 'Domination'" class='pl-10'> 
          <v-col v-for="n in [5,6,7]" :key="n">
            <v-dialog
              v-model="dialog"
              width="500"
            >
              <template v-slot:activator="{ on, attrs }">
<v-img v-bind="attrs" v-on="on" v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="64" width="64"/> 
               </template>
              <v-card>
              <v-card
            class="black"
            outlined
            tile
            justify="left"
            center 
          >
             <v-img center v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="80" width="80"/>
             <v-card-title primary-title> {{ treeRune[n-1].name }} </v-card-title>
             <v-card-text v-html=treeRune[n-1].desc />
          </v-card>
              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
                      
</v-dialog> 
          </v-col>
        </v-row>
        <v-row v-if="index == 'Domination'" class='pl-10'> 
          <v-col v-for="n in [8,9,10]" :key="n">
            <v-dialog
              v-model="dialog"
              width="500"
            >
              <template v-slot:activator="{ on, attrs }">
<v-img v-bind="attrs" v-on="on" v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="64" width="64"/> 
               </template>
              <v-card>
              <v-card
            class="black"
            outlined
            tile
            justify="left"
            center 
          >
             <v-img center v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="80" width="80"/>
             <v-card-title primary-title> {{ treeRune[n-1].name }} </v-card-title>
             <v-card-text v-html=treeRune[n-1].desc />
          </v-card>
              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
                      
</v-dialog> 
          </v-col>
        </v-row>
        <v-row v-if="index == 'Domination'" class='pl-5'> 
          <v-col v-for="n in [11,12,13,14]" :key="n">
            <v-dialog
              v-model="dialog"
              width="500"
            >
              <template v-slot:activator="{ on, attrs }">
<v-img v-bind="attrs" v-on="on" v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="64" width="64"/> 
               </template>
              <v-card>
              <v-card
            class="black"
            outlined
            tile
            justify="left"
            center 
          >
             <v-img center v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="80" width="80"/>
             <v-card-title primary-title> {{ treeRune[n-1].name }} </v-card-title>
             <v-card-text v-html=treeRune[n-1].desc />
          </v-card>
              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
                      
</v-dialog> 
          </v-col>
        </v-row>
        <v-row v-if="index == 'Precision'" > 
          <v-col v-for="n in 4" :key="n">
            <v-dialog
              v-model="dialog"
              width="500"
            >
              <template v-slot:activator="{ on, attrs }">
<v-img v-bind="attrs" v-on="on" v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="90" width="90"/> 
               </template>
              <v-card>
              <v-card
            class="black"
            outlined
            tile
            justify="left"
            center 
          >
             <v-img center v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="80" width="80"/>
             <v-card-title primary-title> {{ treeRune[n-1].name }} </v-card-title>
             <v-card-text v-html=treeRune[n-1].desc />
          </v-card>
              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
                      
</v-dialog> 
          </v-col>
        </v-row>
        <v-row v-if="index == 'Precision'" class='pl-10'> 
          <v-col v-for="n in [5,6,7]" :key="n">
            <v-dialog
              v-model="dialog"
              width="500"
            >
              <template v-slot:activator="{ on, attrs }">
<v-img v-bind="attrs" v-on="on" v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="64" width="64"/> 
               </template>
              <v-card>
              <v-card
            class="black"
            outlined
            tile
            justify="left"
            center 
          >
             <v-img center v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="80" width="80"/>
             <v-card-title primary-title> {{ treeRune[n-1].name }} </v-card-title>
             <v-card-text v-html=treeRune[n-1].desc />
          </v-card>
              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
                      
</v-dialog> 
          </v-col>
        </v-row>
        <v-row v-if="index == 'Precision'" class='pl-10'> 
          <v-col v-for="n in [8,9,10]" :key="n">
            <v-dialog
              v-model="dialog"
              width="500"
            >
              <template v-slot:activator="{ on, attrs }">
<v-img v-bind="attrs" v-on="on" v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="64" width="64"/> 
               </template>
              <v-card>
              <v-card
            class="black"
            outlined
            tile
            justify="left"
            center 
          >
             <v-img center v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="80" width="80"/>
             <v-card-title primary-title> {{ treeRune[n-1].name }} </v-card-title>
             <v-card-text v-html=treeRune[n-1].desc />
          </v-card>
              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
                      
</v-dialog> 
          </v-col>
        </v-row>
        <v-row v-if="index == 'Precision'" class='pl-10'> 
          <v-col v-for="n in [11,12,13]" :key="n">
            <v-dialog
              v-model="dialog"
              width="500"
            >
              <template v-slot:activator="{ on, attrs }">
<v-img v-bind="attrs" v-on="on" v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="64" width="64"/> 
               </template>
              <v-card>
              <v-card
            class="black"
            outlined
            tile
            justify="left"
            center 
          >
             <v-img center v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="80" width="80"/>
             <v-card-title primary-title> {{ treeRune[n-1].name }} </v-card-title>
             <v-card-text v-html=treeRune[n-1].desc />
          </v-card>
              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
                      
</v-dialog> 
          </v-col>
        </v-row>
        <v-row v-if="index == 'Sorcery'"> 
          <v-col v-for="n in 3" :key="n">
            <v-dialog
              v-model="dialog"
              width="500"
            >
              <template v-slot:activator="{ on, attrs }">
<v-img v-bind="attrs" v-on="on" v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="90" width="90"/> 
               </template>
              <v-card>
              <v-card
            class="black"
            outlined
            tile
            justify="left"
            center 
          >
             <v-img center v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="80" width="80"/>
             <v-card-title primary-title> {{ treeRune[n-1].name }} </v-card-title>
             <v-card-text v-html=treeRune[n-1].desc />
          </v-card>
              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
                      
</v-dialog> 
          </v-col>
        </v-row>
        <v-row v-if="index == 'Sorcery'" class='pl-6'> 
          <v-col v-for="n in [4,5,6]" :key="n">
            <v-dialog
              v-model="dialog"
              width="500"
            >
              <template v-slot:activator="{ on, attrs }">
<v-img v-bind="attrs" v-on="on" v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="64" width="64"/> 
               </template>
              <v-card>
              <v-card
            class="black"
            outlined
            tile
            justify="left"
            center 
          >
             <v-img center v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="80" width="80"/>
             <v-card-title primary-title> {{ treeRune[n-1].name }} </v-card-title>
             <v-card-text v-html=treeRune[n-1].desc />
          </v-card>
              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
                      
</v-dialog> 
          </v-col>
        </v-row>
        <v-row v-if="index == 'Sorcery'" class='pl-6'> 
          <v-col v-for="n in [7,8,9]" :key="n">
            <v-dialog
              v-model="dialog"
              width="500"
            >
              <template v-slot:activator="{ on, attrs }">
<v-img v-bind="attrs" v-on="on" v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="64" width="64"/> 
               </template>
              <v-card>
              <v-card
            class="black"
            outlined
            tile
            justify="left"
            center 
          >
             <v-img center v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="80" width="80"/>
             <v-card-title primary-title> {{ treeRune[n-1].name }} </v-card-title>
             <v-card-text v-html=treeRune[n-1].desc />
          </v-card>
              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
                      
</v-dialog> 
          </v-col>
        </v-row>
        <v-row v-if="index == 'Sorcery'" class='pl-6'> 
          <v-col v-for="n in [10,11,12]" :key="n">
            <v-dialog
              v-model="dialog"
              width="500"
            >
              <template v-slot:activator="{ on, attrs }">
<v-img v-bind="attrs" v-on="on" v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="64" width="64"/> 
               </template>
              <v-card>
              <v-card
            class="black"
            outlined
            tile
            justify="left"
            center 
          >
             <v-img center v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="80" width="80"/>
             <v-card-title primary-title> {{ treeRune[n-1].name }} </v-card-title>
             <v-card-text v-html=treeRune[n-1].desc />
          </v-card>
              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
                      
</v-dialog> 
          </v-col>
        </v-row>
        <v-row v-if="index == 'Inspiration'"> 
          <v-col v-for="n in 3" :key="n">
            <v-dialog
              v-model="dialog"
              width="500"
            >
              <template v-slot:activator="{ on, attrs }">
<v-img v-bind="attrs" v-on="on" v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="90" width="90"/> 
               </template>
              <v-card>
              <v-card
            class="black"
            outlined
            tile
            justify="left"
            center 
          >
             <v-img center v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="80" width="80"/>
             <v-card-title primary-title> {{ treeRune[n-1].name }} </v-card-title>
             <v-card-text v-html=treeRune[n-1].desc />
          </v-card>
              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
                      
</v-dialog> 
          </v-col>
        </v-row>
        <v-row v-if="index == 'Inspiration'" class='pl-6'> 
          <v-col v-for="n in [4,5,6]" :key="n">
            <v-dialog
              v-model="dialog"
              width="500"
            >
              <template v-slot:activator="{ on, attrs }">
<v-img v-bind="attrs" v-on="on" v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="64" width="64"/> 
               </template>
              <v-card>
              <v-card
            class="black"
            outlined
            tile
            justify="left"
            center 
          >
             <v-img center v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="80" width="80"/>
             <v-card-title primary-title> {{ treeRune[n-1].name }} </v-card-title>
             <v-card-text v-html=treeRune[n-1].desc />
          </v-card>
              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
                      
</v-dialog> 
          </v-col>
        </v-row>
        <v-row v-if="index == 'Inspiration'" class='pl-6'> 
          <v-col v-for="n in [7,8,9]" :key="n">
            <v-dialog
              v-model="dialog"
              width="500"
            >
              <template v-slot:activator="{ on, attrs }">
<v-img v-bind="attrs" v-on="on" v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="64" width="64"/> 
               </template>
              <v-card>
              <v-card
            class="black"
            outlined
            tile
            justify="left"
            center 
          >
             <v-img center v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="80" width="80"/>
             <v-card-title primary-title> {{ treeRune[n-1].name }} </v-card-title>
             <v-card-text v-html=treeRune[n-1].desc />
          </v-card>
              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
                      
</v-dialog> 
          </v-col>
        </v-row>
        <v-row v-if="index == 'Inspiration'" class='pl-6'> 
          <v-col v-for="n in [10,11,12]" :key="n">
            <v-dialog
              v-model="dialog"
              width="500"
            >
              <template v-slot:activator="{ on, attrs }">
              <v-img v-bind="attrs" v-on="on" v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="64" width="64"/> 
               </template>
              <v-card>
              <v-card
            class="black"
            outlined
            tile
            justify="left"
            center 
          >
             <v-img center v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="80" width="80"/>
             <v-card-title primary-title> {{ treeRune[n-1].name }} </v-card-title>
             <v-card-text v-html=treeRune[n-1].desc />
          </v-card>
              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
                      
</v-dialog> 
          </v-col>
        </v-row>
        <v-row v-if="index == 'Resolve'"> 
          <v-col v-for="n in 3" :key="n">
            <v-dialog
              v-model="dialog"
              width="500"
            >
              <template v-slot:activator="{ on, attrs }">
<v-img v-bind="attrs" v-on="on" v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="90" width="90"/> 
               </template>
              <v-card>
              <v-card
            class="black"
            outlined
            tile
            justify="left"
            center 
          >
             <v-img center v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="80" width="80"/>
             <v-card-title primary-title> {{ treeRune[n-1].name }} </v-card-title>
             <v-card-text v-html=treeRune[n-1].desc />
          </v-card>
              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
                      
</v-dialog> 
          </v-col>
        </v-row>
        <v-row v-if="index == 'Resolve'" class='pl-6'> 
          <v-col v-for="n in [4,5,6]" :key="n">
            <v-dialog
              v-model="dialog"
              width="500"
            >
              <template v-slot:activator="{ on, attrs }">
<v-img v-bind="attrs" v-on="on" v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="64" width="64"/> 
               </template>
              <v-card>
              <v-card
            class="black"
            outlined
            tile
            justify="left"
            center 
          >
             <v-img center v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="80" width="80"/>
             <v-card-title primary-title> {{ treeRune[n-1].name }} </v-card-title>
             <v-card-text v-html=treeRune[n-1].desc />
          </v-card>
              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
                      
</v-dialog> 
          </v-col>
        </v-row>
        <v-row v-if="index == 'Resolve'" class='pl-6'> 
          <v-col v-for="n in [7,8,9]" :key="n">
            <v-dialog
              v-model="dialog"
              width="500"
            >
              <template v-slot:activator="{ on, attrs }">
<v-img v-bind="attrs" v-on="on" v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="64" width="64"/> 
               </template>
              <v-card>
              <v-card
            class="black"
            outlined
            tile
            justify="left"
            center 
          >
             <v-img center v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="80" width="80"/>
             <v-card-title primary-title> {{ treeRune[n-1].name }} </v-card-title>
             <v-card-text v-html=treeRune[n-1].desc />
          </v-card>
              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
                      
</v-dialog> 
          </v-col>
        </v-row>
        <v-row v-if="index == 'Resolve'" class='pl-6' > 
          <v-col v-for="n in [10,11,12]" :key="n">
            <v-dialog
              v-model="dialog"
              width="500"
            >
              <template v-slot:activator="{ on, attrs }">
<v-img v-bind="attrs" v-on="on" v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="64" width="64"/> 
               </template>
              <v-card>
              <v-card
            class="black"
            outlined
            tile
            justify="left"
            center 
          >
             <v-img center v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="80" width="80"/>
             <v-card-title primary-title> {{ treeRune[n-1].name }} </v-card-title>
             <v-card-text v-html=treeRune[n-1].desc />
          </v-card>
              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
                      
</v-dialog> 
          </v-col>
        </v-row>
      </v-card>
    </v-row>
      <!--
      <v-row v-if="index == 'Precision'"> 
        <v-col  v-for="n in 4" :key="n">
          <v-img v-bind="attrs" v-on="on" v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="100" width="100"/> 
              </template>
                      

        </v-col>
        <v-card flex flex-direction='row' flat> 
          <v-col v-for="n in [5,6,7]" :key="n">
            <v-img v-bind="attrs" v-on="on" v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="64" width="64"/> 
              </template>
                      
 
          </v-col>
        </v-card>
        
      </v-row>
      <v-row v-if="index == 'Sorcery'"> 
        <v-col v-for="n in 3" :key="n">
          <v-img v-bind="attrs" v-on="on" v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="100" width="100"/> 
        </v-col>
      </v-row>
      <v-row v-if="index == 'Resolve'"> 
        <v-col v-for="n in 3" :key="n">
          <v-img v-bind="attrs" v-on="on" v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="100" width="100"/> 
        </v-col>
      </v-row>
      <v-row v-if="index == 'Inspiration'"> 
        <v-col v-for="n in 3" :key="n">
          <v-img v-bind="attrs" v-on="on" v-bind:src="require('@/assets' + treeRune[n-1].imagePath)" aspect-ratio="1" height="100" width="100"/> 
        </v-col>
      </v-row>
      -->
    
    
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
      let response = await axios.get(lhost + "/rune/runeAndTree");
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