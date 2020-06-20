<template>
    <v-app v-bind:style="{ backgroundColor: color}">
        <toolBar />
        <IndividualChampion/>
    </v-app>
</template>

<script>
// @ is an alias to /src
import IndividualChampion from '@/components/IndividualChampion.vue'
import toolBar from '@/components/toolBar.vue'

export default {
  name: 'Principal',
  components: {
      toolBar,
    IndividualChampion
  },
  data:() => ({
    color: " #000000"
  })
};
</script>