<template>
    <Inicio/>
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
