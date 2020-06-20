<template>
    <v-app v-bind:style="{ backgroundColor: color}">
        <toolBar />
        <ListaChampions/>
    </v-app>
</template>

<script>
// @ is an alias to /src
import ListaChampions from '@/components/ListaChampions.vue'
import toolBar from '@/components/toolBar.vue'

export default {
  name: 'Principal',
  components: {
    toolBar,
    ListaChampions
  },
  data:() => ({
    color: " #000000"
  })
};
</script>