<template>
  <div id="home">
    
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <template v-if="result.banner">
        <home-swiper :banner="result.banner.list" />  
    </template>
    <template v-if="result.recommend">
        <recommend-view :recommend="result.recommend.list" />  
    </template>
    <feature-view/>

    <tab-control class="tab-control" :titles="['流行','新款','精选']"/>

    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import NavBar from 'components/common/navbar/NavBar.vue' // @ is an alias to /src
import TabControl from 'components/content/tabControl/TabControl.vue'

import HomeSwiper from './childCompons/HomeSwiper.vue'
import RecommendView from './childCompons/RecommendView.vue'
import FeatureView from './childCompons/FeatureView.vue'

import {getHomeMultData} from '@/network/home'

@Component({
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl
  }
})

export default class Home extends Vue {
  private result: any = [] ;
  protected goods:Object = {
    pop:{page:0,list:[]},
    new:{page:0,list:[]},
    sell:{page:0,list:[]}
  }
  
  created(){
    
  }
  mounted(){
    let that = this;
    getHomeMultData().then(res => {
      this.result = res;
    })
    console.log('mounted');
  }
}
</script>

<style scoped>
#home{
  padding-top: 44px;
}
.home-nav{
  background: var(--color-tint);
  color:#fff
}
.tab-control{
  position:sticky;
  top:44px;
}
</style>