<template>
    <v-app v-bind:style="{ backgroundColor: color}">
        <ListaSummoner/>
    </v-app>
</template>

<script>
// @ is an alias to /src
import ListaSummoner from '@/components/ListaSummoner.vue'

export default {
  name: 'Principal',
  components: {
    ListaSummoner
  },
  data:() => ({
    color: " #000000"
  })
};
</script>