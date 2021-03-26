<template>
  <div id="app">
    
    <router-view/>
    <main-tab-bar/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator' 
import MainTabBar from 'components/content/mainTabbar/MainTabBar.vue'

@Component({
  components: {
    MainTabBar
  }
})
export default class App extends Vue {}

</script>
<style lang="less">
@import './assets/css/base.css';
</style>
