<template>
    <v-app v-bind:style="{ backgroundColor: color}">
      <toolBar/>
        <ListaItens/>
    </v-app>
</template>

<script>
// @ is an alias to /src
import ListaItens from '@/components/ListaItens.vue'
import toolBar from '@/components/toolBar.vue'

export default {
  name: 'Principal',
  components: {
    toolBar,
    ListaItens
  },
  data:() => ({
    color: " #000000"
  })
};
</script>