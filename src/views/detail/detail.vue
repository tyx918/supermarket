<!--  -->
<template>
    <div class="detail"> 
        <datailNavBar @titleClick = "titleClick" ref="nav"></datailNavBar>
        <scroll class = "content" ref = "scroll"
        :probe-type = "3" :pullUpLoad = "true" :click = "true" @scroll="contentScroll"> 
            <detailSwiper :topImages = "topImages" @kol = "update"></detailSwiper>
            <detailBaseInfo :goodsInfo = "goods"></detailBaseInfo>
            <detailShopInfo :shopInfos = "shops"/>
            <detailGoodInfo :detailInfos = "detailInfo" @imageLoad = "update"></detailGoodInfo>
            <DetailParamInfo :paramInfo = "paramInfo" ref = "params"></DetailParamInfo>
            <detailComment :commentInfo = "commentInfo" ref = "comment"></detailComment> 
            <GoodsList :goods = "recommend" ref="recommend"/>
        </scroll>
        <detailBottomBar @addCart = "addToCart"/>
        <Toast :message = "message" :show = "show"/>
    </div>
</template>

<script>

import datailNavBar from "./childComponents/detailNavBar"
import detailSwiper from "./childComponents/detailSwiper"
import detailBaseInfo from "./childComponents/detailBaseInfo"
import detailShopInfo from "./childComponents/detailShopInfo"
import detailGoodInfo from "./childComponents/detailGoodInfo"
import DetailParamInfo from "./childComponents/DetailParamInfo"
import detailComment from "./childComponents/detailComment"
import detailBottomBar from "./childComponents/detailBottomBar"
import Toast from "components/common/toast/Toast"

import GoodsList from "components/content/goods/GoodsList";
import GoodsListItem from "components/content/goods/GoodsListItem";
import scroll from 'components/common/scroll/Scroll'

import {getDetail , Goods , Shop , GoodsParam , getRecommend} from "network/detail"

import {debounce} from "common/utils"

import  { mapActions } from "vuex"


export default {
  name:'detail',
  data () {
    return {
        iid:{},
        topImages:[],
        goods:{},
        shops:{},
        detailInfo:{},
        paramInfo:{},
        commentInfo:{},
        recommend: [],
        themeTopYs:[],
        getThemeTopY:null,
        currentIndex:0,
        message:"",
        show:false
    };
  },

  created() {
      this.iid = this.$route.params.id
      getDetail(this.iid).then((res) => {
          const data = res.data.result;
          this.topImages = data.itemInfo.topImages;
          this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);
          this.shops = new Shop(data.shopInfo);
          this.detailInfo = data.detailInfo;
          this. paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule);
          if (data.rate.cRate !== 0) {
            this.commentInfo = data.rate.list[0];
          }
          //等前面的dom渲染完成再调用,dom渲染出来，但是图片还是没有包括在内
        //   this.$nextTick(() => {
        //   });

        }).catch((err) => {
            console.log(err);
        });

    //获取推荐数据
        getRecommend().then(res => {
            this.recommend = res.data.data.list;

        }) 
        this.getThemeTopY = debounce(() => {
          this.themeTopYs = [];
          this.themeTopYs.push(0);
          this.themeTopYs.push(this.$refs.params.$el.offsetTop);
          this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
          this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
        },100);  
  },

  components: {
      datailNavBar,
      detailSwiper,
      detailBaseInfo,
      detailShopInfo,
      scroll,
      detailGoodInfo,
      DetailParamInfo,
      detailComment,
      GoodsList,
      GoodsListItem,
      detailBottomBar,
      Toast
  },

  computed: {},

  mounted() {
      this.$refs.scroll.refresh();
      const refresh = debounce(this.$refs.scroll.refresh,50); //新生成的函数
      this.$bus.$on('detailItemImageLoad',() => {
          refresh();
          //防抖函数,防止对服务器频繁请求;节流函数
      }); 
  },

  methods: {
      ...mapActions(['addCart']),
      update() {
          this.$refs.scroll.refresh();
          this.getThemeTopY();
      },
      titleClick(index) {
          this.$refs.scroll.scrollToMy(0,-this.themeTopYs[index],1000);
      },
      contentScroll(position) {
        //   1.获取y值
          const positionY = -position.y;
          let length = this.themeTopYs.length;
          for(let i = 0;i < length;i++) {
              if((this.currentIndex !== i)&&((i < length - 1 && positionY >= this.themeTopYs[i] && positionY<
                 this.themeTopYs[i+1]) || (i === length - 1 && positionY > this.themeTopYs[i]))) {
                     //保存其i的内容，为了判断i是否与当前相等
                     this.currentIndex = i; 
                     this.$refs.nav.currentIndex = this.currentIndex;  
              }
          } 
      },
      addToCart() {
          const product = {};
          product.image = this.topImages[0];
          product.title = this.goods.title;
          product.desc = this.goods.desc;
          product.price = this.goods.realPrice;
          product.iid = this.iid;
          product.name = this.shops.name;
         
        //   vuex的映射actions
          this.addCart(product).then(res => {
              console.log(this.$toast);
             //   this.show = true;
            //   this.message = res;
            //   setTimeout(() => {
            //     this.show = false,
            //     this.message = "" 
              this.$toast.show(res,2000);
              },1500);

        // 用promise从其他地方返回信息
        //   this.$store.dispatch("addCart",product).then(res => {
        //       console.log(res);
        //   });
          
          
      }
  }
}

</script>
<style scoped>
    .detail {
        position: relative;
        z-index: 9;
        background-color: #fff;
        height: 100vh;
    }


    .content {
        position: relative;
        height: calc(100vh - 93px);
        overflow: hidden;
        /* border:1px solid red; */
    }
</style>