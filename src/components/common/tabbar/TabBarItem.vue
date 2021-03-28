<template>
  <!--所有的item都展示同一个图片, 同一个文字-->
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  @Component
  export default class TabBarItem extends Vue{

    @Prop(String) private path! : string;
    @Prop({type: String, default: 'red'}) private activeColor!: string;
    get isActive():boolean{
      return this.$route.path.indexOf(this.path) !== -1
    }
    get activeStyle():object {
        return this.isActive ? {color: this.activeColor} : {}
      }
    itemClick():void {
      this.$router.push(this.path)
    }   
  }

</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
