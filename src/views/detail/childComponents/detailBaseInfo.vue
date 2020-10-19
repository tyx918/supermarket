<!--  -->
<template>
    <div v-if = "Object.keys(goodsInfo).length !== 0" class="detail-info">
        <div class = "title">{{ goodsInfo.title }}</div>
        <div class="price">
            <span class="newPrice">{{ goodsInfo.newPrice }}</span>
            <span class="oldPrice">
                <p> {{ goodsInfo.oldPrice }}</p>
            <span v-if = "goodsInfo.discount" class="discount" 
                  :style="{'background-color': goodsInfo.discountBgColor}">{{ goodsInfo.discount }}</span>
            </span>
        </div>
        <div class="columns">
            <div v-for = "columns in goodsInfo.columns" class="column">{{ columns}}</div>
        </div>
        <div class="services">
            <div v-for = "n in goodsInfo.services.length">
                <img :src="goodsInfo.services[n-1].icon"></img>
                <span>{{goodsInfo.services[n-1].name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name:'detailBaseInfo',
  props:{
      goodsInfo:{
          type: Object,
          default() {
              return {}
          }
      }
  },
  data () {
    return {
    };
  },
  components: {},

  computed: {},

  created(){
      console.log(typeof this.goodsInfo);
  },
  
  mounted() {
  },

  methods: {
  }
}

</script>
<style scoped>

    .detail-info {
        padding: 20px 4px 0 4px;
        border-bottom: 3px solid gray;
    }

    .title {
        font-size: 18px;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-weight: 700;
    }

    .price {
        margin-top:12px;
    }

    .price .newPrice {
        font-size: 24px;
        color: khaki;
        margin-right: 10px;
    }

    /* .price .oldPrice {
        
    } */

    .price .oldPrice p{
        /* position: relative; */
        display:inline-block;
        font-size: 12px;
        text-decoration: line-through;
    }
    /* 使用相对定位直接定过去 */
    .price .discount {
        position: relative;
        font-size: 12px;
        /* right: -29px; */
        top: -11px;
        color: honeydew;
        border-radius: 10px;
    }

    .columns {
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        margin-top: 15px;
        padding-bottom: 4px;
        border-bottom:1px solid lightsalmon;
    }

    .columns .column {
        color:lightsalmon;
    } 

    .services {
        /* 这种方式可以实现两端对齐 */
        display: flex;
        justify-content: space-between;
        height: 54px;
        line-height: 54px;
        font-size: 12px;
    }

    .services img {
        width: 12px;
        height: 12px;
    }


</style>

