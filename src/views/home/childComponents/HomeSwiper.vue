<!--  -->
<template>
  <div>
    <Swiper>
        <!--  -->
        <slide v-for = "item in banner"  v-bind:key="item.id">
            <a :href = "item.link"><img :src = "item.image" alt="" @load = "imageLoad"></a>
        </slide>
    </Swiper>
  </div>
</template>

<script>
import { Swiper,Slide} from 'components/common/swiper/index'
export default {
  name:'homeswiper',
  props:{
      banner: {
          type: Array,
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
      Swiper,Slide
  },

  computed: {},

  mounted() {},

  methods: {
      imageLoad() {
          if(!this.isLoad) {
              this.$emit("swiperImageLoad");
              this.isLoad = true;
          }
      }
  }
}

</script>
<style scoped>
</style>