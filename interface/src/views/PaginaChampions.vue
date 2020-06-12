<template>
    <v-app v-bind:style="{ backgroundColor: color}">
        <ListaChampions/>
    </v-app>
</template>

<script>
// @ is an alias to /src
import ListaChampions from '@/components/ListaChampions.vue'

export default {
  name: 'Principal',
  components: {
    ListaChampions
  },
  data:() => ({
    color: " #000000"
  })
};
</script>