<template>
    <v-app v-bind:style="{ backgroundColor: color}">
        <ListaRunes/>
    </v-app>
</template>

<script>
// @ is an alias to /src
import ListaRunes from '@/components/ListaRunes.vue'

export default {
  name: 'Principal',
  components: {
    ListaRunes
  },
  data:() => ({
    color: " #000000"
  })
};
</script>