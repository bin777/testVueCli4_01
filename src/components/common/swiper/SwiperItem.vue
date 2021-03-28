<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>

<style scoped>
  .slide {
    width: 100%;
    flex-shrink: 0;
  }

  .slide img {
    width: 100%;
  }
</style>
