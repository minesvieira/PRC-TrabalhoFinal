<template>
    <v-app v-bind:style="{ backgroundColor: color}">
        <ListaItens/>
    </v-app>
</template>

<script>
// @ is an alias to /src
import ListaItens from '@/components/ListaItens.vue'

export default {
  name: 'Principal',
  components: {
    ListaItens
  },
  data:() => ({
    color: " #000000"
  })
};
</script>