<template>
  <v-app v-bind:style="{ backgroundColor: color}">
    <Inicio/>
  </v-app>
</template>

<script>
// @ is an alias to /src
import Inicio from '@/components/Inicio.vue'

export default {
  name: 'Principal',
  components: {
    Inicio
  },

  data:() => ({
    color: " #000000"
  })
};
</script>
