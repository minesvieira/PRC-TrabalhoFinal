<template>
    <v-app v-bind:style="{ backgroundColor: color}">
        <toolBar />
        <ListaSummoner/>
    </v-app>
</template>

<script>
// @ is an alias to /src
import ListaSummoner from '@/components/ListaSummoner.vue'
import toolBar from '@/components/toolBar.vue'

export default {
  name: 'Principal',
  components: {
    toolBar,
    ListaSummoner
  },
  data:() => ({
    color: " #000000"
  })
};
</script>