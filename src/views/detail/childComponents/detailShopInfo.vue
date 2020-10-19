<!--  -->
<template>
  <div class="shop-info">
      <div class="shop-name-logo">
        <img :src="shopInfos.logo" alt="">
        <span>{{shopInfos.name}}</span>
      </div>
      <div class="shop-middle">
          <div class="shop-middle-left">
              <div class = "shop-num">
                  <span class="shop-num-first">{{shopInfos.sells |sellCountFilter}}</span>
                  <span class="shop-num-second">{{shopInfos.goodsCount}}</span>
              </div>
              <div class="shop-name"> 
                  <span class="shop-name-first">总销量</span>
                  <span class="shop-name-second">全部宝贝</span>
              </div>
          </div>
          <div class="shop-middle-right">
              <table class="table">
                  <tr v-for="score in shopInfos.score" class="table-tr">
                      <td >{{score.name}}</td>
                      <td  class="score" :class="{'score-better': score.isBetter}">{{score.score}}</td>
                      <td  class="better" :class="{'better-more': score.isBetter}">{{score.isBetter?"高":"低"}}</td>
                  </tr>
              </table>
          </div>
      </div>
      <div class="enter-shop">
            <div class="font">进店逛逛</div>
      </div>
  </div>
</template>

<script>
export default {
  name:'detailShopInfo',
  props:{
      shopInfos:{
          type:Object,
          default() {
              return {}
          }
      },
  },

  filters:{
    sellCountFilter(value) {
      if (value < 10000) return value;
        return (value / 10000).toFixed(1) + '万'
    }
  },
  data () {
    return {
        fontColor:'#fff'
    };
  },

  components: {},

  computed: {

  },

  mounted() {},

  methods: {}
}

</script>
<style scoped>
    .shop-info {
        padding: 6px;
        border-bottom: 3px solid greenyellow;
    }
    /* flex布局实现垂直居中 */
    .shop-name-logo {
        display: flex;
        align-items: center;
    }

    .shop-name-logo img {
        width: 44.75px;
        height: 44.75px;
    }
    .shop-name-logo span {
        font-size: 18px;
        margin-left:15px;
    }

    .shop-middle {
        display: flex;
        margin-top: 20px;
        align-items: center;
    }

    .shop-middle-left {
        flex: 1;
        border-right: 3px solid greenyellow;
    }

    .shop-num {
        margin-left: 30px;
        font-size: 18px;
    }

    .shop-num-first {
        margin-right: 30px;
    }

    .shop-middle-right {
        flex:1 ;
    }

    .shop-name {
        margin: 15px 0 0 30px;
        font-size: 12px;
    }

    .shop-name-first {
        margin-right: 30px;
    }

    .shop-middle-right h2{
        margin-left: 30px;
    }

    .table {
        margin-left: 30px;
        font-size: 12px;
        border-spacing: 10px 10px;
    }

    .bgcColor {
        background-color: red;
    }

    .fontColor {
        color:red;
    }

    .table .score {
        color: #5ea732;
    }

    .table .score-better {
         color: #f13e3a;
    }

    .table .better {
        color: #fff;
        background-color: #5ea732;
    } 

    .table .better-more {
       background-color: #f13e3a;
    }

    .enter-shop {
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 14px;
    }

    .enter-shop .font {
        display: inline-block;
        width: 130px;
        height: 30px;
        line-height: 30px;
        border-radius: 12px;
        background-color:lemonchiffon;
    }

</style>