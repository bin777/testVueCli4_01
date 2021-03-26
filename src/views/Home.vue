<template>
  <div class="home">
    aabb
    <nav-bar/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NavBar from 'components/common/navbar/NavBar.vue' // @ is an alias to /src

@Component({
  components: {
    NavBar
  },
  data(){
    return {
      msg : 'null'
    }
  }
})
export default class Home extends Vue {}
</script>
