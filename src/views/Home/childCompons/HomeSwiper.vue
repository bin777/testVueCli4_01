<template>
  <div v-if="banner">
    <swiper>
      <swiper-item v-for="item in banner" :key="item.link">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Swiper, SwiperItem} from '@/components/common/swiper/index'

@Component({
  components:{
    Swiper,
    SwiperItem
  }
})
export default class HomeSwiper extends Vue{
  @Prop({type:Array}) banner? : Array<any>
}
</script>