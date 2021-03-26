<template>
  <div class="nav-bar">
    <div class="nav-bar-left"><slot name="left"></slot></div>
    <div class="nav-bar-center"><slot name="center"></slot></div>
    <div class="nav-bar-right"><slot name="right"></slot></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

export default class NavBar extends Vue {}
</script>

<style scoped>
  .nav-bar {
    display: flex;
    line-height: 44px;
  }
  .nav-bar-left, .nav-bar-right{
    width:60px;
    background: red;
  }
  .nav-bar-center{
    flex: 1;
    background: blue;
  }
</style>
