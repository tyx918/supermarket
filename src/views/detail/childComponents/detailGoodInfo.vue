<!--  -->
<template>
  <div id = "detailGoodInfo" v-if="Object.keys(detailInfos).length!==0">
      <div class="info-desc">
        <div class="start"></div>
        <div class="desc">{{detailInfos.desc}}</div>
        <div class="end"></div>
      </div>
      <div class="info-key">{{ detailInfos.detailImage[0].key }}</div>
      <div class="images">
          <img v-for = "imageAdr in detailInfos.detailImage[0].list" :src="imageAdr" 
               class="image" @load="imageLoad">
      </div>
  </div>
</template>

<script>
export default {
  name:'detailGoodInfo',
  props:{
      detailInfos:{
          type:Object,
          default() {
              return {}
          }
      }
  },
  data () {
    return {
        count:0,
        imageNum:0,
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
      imageLoad() {
        //   当调用的次数等于图片数，才刷新一次
        if(++this.count === this.imageNum) {
            this.$emit('imageLoad');
        }
      }
  },
  watch: {
    //   获取图片的高度
    detailInfos() {
        if(null !== this.detailInfos && this.detailInfos.detailImage) {
            this.imageNum = this.detailInfos.detailImage[0].list.length;
        }
    }
  }
}

</script>
<style scoped>
    #detailGoodInfo {
        padding: 18px 8px 20px;
        border-bottom: 3px solid yellowgreen;
    }

 .info-desc .start, .info-desc .end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }

    .info-desc .start {
        float: left;
    }

    .info-desc .end {
        float: right;
    }

    .info-desc .start::before, .info-desc .end::after {
        content: '';
        position: absolute;
        width: 5px;
        height: 5px;
        background-color: #333;
        bottom: 0;
    }

    .info-desc .end::after {
        right: 0;
    }

    .info-desc .desc {
        padding: 2vh 0;
        font-size: 14px;
    }

    .info-key {
        font-size: 14px;
        margin-top: 10px;
    }

    .images {
        margin-top: 14px;
    }

    .image {
        width: 100%;
    }
</style>