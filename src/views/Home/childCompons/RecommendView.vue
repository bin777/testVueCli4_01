<template>
  <div class="recommend">
    <div v-for="(item,index) in recommend" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class RecommendView extends Vue{
  @Prop({type:Array,default:[]}) private recommend? : Array<any>
}
</script>

<style lang="scss" scoped>
.recommend{
  display: flex;
  width:100%;
  text-align:center;
  font-size: 12px;
  padding: 10px 0;
  border-bottom:10px solid rgba(226, 219, 219, 0.945);
  margin-bottom: 10px;
  .recommend-item{
    flex:1;

    img{
      width:70px;
      height:70px;
      margin-bottom:5px;
    }
  }
}
</style>