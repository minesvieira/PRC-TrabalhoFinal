<template>
  <v-app id="inspire">
    <v-app-bar
      app
      clipped-left
    >
      <v-toolbar-title>
        League of Legends
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="my-2">
        <v-btn small to="/">Home</v-btn>
      </div>
      <div class="my-2">
        <v-btn small to="/champions">Champions</v-btn>
      </div>
      <div class="my-2">
        <v-btn small to="/itens">Items</v-btn>
      </div>
      <div class="my-2">
        <v-btn small to="/runes">Runes</v-btn>
      </div>
      <div class="my-2">
        <v-btn small to="/summoner">Summoner Spells</v-btn>
      </div>

    </v-app-bar>
    <v-main style="">
      <!--
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="shrink">
            <v-tooltip right>
              <slot/>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-container>
      -->
      <slot/>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },

    data: () => ({
      drawer: null,
    }),

    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>
