<template>
  <div v-if="titles" class="tab-control">
    <div v-for="(item,index) in titles" :key="index" @click="changeTab(index)" :class="{active:currentIndex===index}">
     <span>{{item}}</span> 
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'


@Component
export default class NavBar extends Vue {
  private currentIndex:number = 0;

  @Prop({type:Array,default:[]}) private titles? : string[]

  changeTab(key: number):void{
    this.currentIndex = key;
     
  }

}
</script>

<style lang="scss" scoped>
.tab-control{
  display:flex;
  text-align:center;
  font-size: 15px;
  background: #fff;

  .active{
    color:deeppink;
    span{
      padding-bottom: 5px;
      border-bottom: deeppink solid 3px;
    }
  }

  div{
    flex:1;
    height: 40px;
    line-height: 40px;

  }
}
</style>