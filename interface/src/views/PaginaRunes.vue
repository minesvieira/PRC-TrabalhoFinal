<template>
    <v-app v-bind:style="{ backgroundColor: color}">
      <toolBar />
      <ListaRunes/>
    </v-app>
</template>

<script>
// @ is an alias to /src
import ListaRunes from '@/components/ListaRunes.vue'
import toolBar from '@/components/toolBar.vue'

export default {
  name: 'Principal',
  components: {
    ListaRunes,
    toolBar
  },
  data:() => ({
    color: " #000000"
  })
};
</script>