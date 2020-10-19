<!--  -->
<template>
  <div >
    <Swiper class = "swiper">
        <!--  -->
        <slide v-for = "topImage in topImages"  v-bind:key = "topImage.id">
            <img :src = "topImage" alt="" @load="imageLoad">
        </slide>
    </Swiper>
  </div>
</template>

<script>

import { Swiper,Slide} from 'components/common/swiper/index'

export default {
  name:'detailSwiper',
  props:{
      topImages:{
          type:Array,
          default() {
              return []
          }
      }
  },
  data () {
    return {
        isLoad:false
    };
  },

  components: {
      Swiper,
      Slide,
  },

  computed: {},

  mounted() {},

  methods: {
      imageLoad() {
          if(!this.isLoad) {
            this.$emit("kol");
            this.isLoad = true;
          }
      }
  }
}

</script>
<style scoped>
    .swiper {
        height: 240px;
        overflow: hidden;
    }

    /* .swiper img {
        height: 240px;
    } */
</style>