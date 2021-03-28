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
    text-align: center;
    height: 44px;
    box-shadow: 0 1.2px 1.2px rgba(248,98,216, .5);
    position: fixed;
    left: 0%;
    top: 0%;
    z-index: 1;
    width:100%;
  }
  .nav-bar-left, .nav-bar-right{
    width:60px;
  }
  .nav-bar-center{
    flex: 1;
  }
</style>
