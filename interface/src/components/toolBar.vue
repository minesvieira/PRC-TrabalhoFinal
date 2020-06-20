<template >
  <v-card class="ma-2 black" >
    <v-toolbar color="#303F9F" height="50px">
        <v-toolbar-title class="black--text">League of Legends</v-toolbar-title>
            <v-spacer></v-spacer>
        <v-btn text to="/champions">
            Champions
        </v-btn>
        <v-btn text to="/itens">
            Items
        </v-btn>
        <v-btn text to="/runes">
            Runes
        </v-btn>
        <v-btn text to="/summoner">
            Summoner Spells
        </v-btn>
        <v-text-field
        hide-details
        single-line
        ></v-text-field>
    </v-toolbar>
  </v-card>
</template>