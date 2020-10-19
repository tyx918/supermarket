<!--  -->
<template>
  <div id = "home">
    <navbar class="home-nav">
        <div slot="left"></div>
        <div slot="center">购物车</div>
        <div slot="right"></div>
    </navbar>
    <TabControl :titles="['流行','经典','精选']" 
                @tabClick = "tabClick" ref = "tabControl2" class = "tab-control2"
                v-show = "isTabControlShow">
    </TabControl>    
    <!-- 不加冒号就会当字符串传过去 -->
    <scroll class = "content" ref = "scroll"
            :click = "true" :probe-type = "3" :pullUpLoad = "true"
            @scroll= "recvScroll" @pullingUp = "recPullingUp">
        <homeswiper :banner = "banner"  @swiperImageLoad = "swiperImageLoad"></homeswiper>
        <HomeRecommendView :recommends = "recommends"></HomeRecommendView>
        <feature></feature>
        <TabControl :titles="['流行','经典','精选']" @tabClick = "tabClick" ref = "tabControl1">
        </TabControl>
        <GoodsList :goods = "currentGoods"></GoodsList>
    </scroll>
    <!-- 监听组件 -->
    <BackTop class="back-top" @click.native = "backClick" v-show = "isShow"></BackTop>
  </div>
</template>

<script>

import homeswiper from "./childComponents/HomeSwiper"
import HomeRecommendView from "./childComponents/HomeRecommendView"
import feature from "./childComponents/feature"

import navbar from 'components/common/navbar/NavBar'
import TabControl from "components/content/mainTabbar/TabControl"
import GoodsList from "components/content/goods/GoodsList"
import scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

import {debounce} from "common/utils"

import 
{ 
    getHomeMultidata,
    getHomeGoods,
}
from '@/network/home'

export default {
  name:'home',
  data () {
    return {
        result : null,
        banner : null,
        recommends: null,
        //保存使用的数据
        goods: {
            'pop':{ page: 0 , list:[] },
            'new':{ page: 0 , list:[] },
            'sell':{ page: 0 , list:[] },
        },
        currentType: 'pop',
        isShow: false,
        tabOffsetTop:0,
        isTabFixed:false,
        isTabControlShow: false,
        saveY:0,
    };
  },

  components: {
      homeswiper,
      HomeRecommendView,
      feature,
      TabControl,
      navbar,
      GoodsList,
      scroll,
      BackTop,
  },
 
  computed: {
        currentGoods:function() { 
            return this.goods[this.currentType].list;
        }
  },

      //进入本组件时触发
//   activated() {
//       //一进入组件就滚动到离开时保存的位置
//       this.$refs.scroll && this.$refs.scroll.scrollTo(0, this.saveY, 10);
//       //refresh():重新计算 better-scroll,
//       this.$refs.scroll && this.$refs.scroll.refresh();
//     },

  methods: {
    /**
     * 事件监听相关的方法
     */

        tabClick(index) {
        if(index === 0) {
            this.currentType = 'pop'
        }
        else if(index === 1) {
            this.currentType = 'new';
        }
        else if(index === 2) {
            this.currentType = 'sell'
        }
        // 让点击的保持一致
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
    },

        recvScroll(position){
            this.isShow = (-position.y > 1000)? true:false;
            this.isTabControlShow = (-position.y > this.tabOffsetTop)?true:false;   
    },

        recPullingUp() {
            this.getHomeGoods(this.currentType );
    },

        /**
     * 网络请求相关的方法
     */
         getHomeMultidata() {
       getHomeMultidata().then((result) => {
            this.result = result;
            //请求拿到多个数据
            this.banner = result.data.data.banner.list;
            this.recommends = result.data.data.recommend.list;
        }).catch((err) => {
            console.log(err);
        });
     },
          //请求商品的数据
        getHomeGoods(type) {
       const page = this.goods[type].page + 1;
       getHomeGoods(type , page).then(res => {
          //数组的解构
          this.goods[type].list.push(...(res.data.data.list));
          this.goods[type].page+=1;
       }).catch(err => {
          console.log(err);
       })
   },

        backClick() {
        /**
         * 拿到组件的两种种方式：
         * this.$children[1]
         * this.refs.scroll
         */
        this.$refs.scroll.scrollToMy(0,0);
    },

        swiperImageLoad() {
            /**
             * this.$refs.tabControl 拿到的是组件
             * this.$refs.tabControl.$el 拿到的是其div元素
             */
            //console.log(this.$refs.tabControl1.$el );
            this.tabOffsetTop = this.$refs.tabControl1.$el.offsetTop
        },
    },

    created(){
      this.getHomeMultidata();
      //请求商品数据
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    mounted() {
      const refresh = debounce(this.$refs.scroll.refresh,50); //新生成的函数
      this.$bus.$on('itemImageLoad',() => {
          refresh();
          //防抖函数,防止对服务器频繁请求;节流函数
      });
    },
    // 组件被激发,只有加了keep-alive的时候才有用
    activated() {
        console.log("activated");
        this.$refs.scroll.scrollToMy(0,this.saveY);
    },
    //组件被销毁，只有加了keep-alive的时候才有用
    deactivated(){
        console.log("iamdeactivated");
        this.saveY = this.$refs.scroll.getY();
        console.log(this.saveY);
    }
}

</script>
<style  scoped>
    #home {
        /* margin-top: 44px; */
        /* height: 100%; */
        /*  */
        height: 100vh;
        position: relative;
        /* margin-bottom: 49px;
        overflow: hidden; */
    }

    .home-nav {
        background-color:var(--color-tint);
        color: #fff;
        /* color: white;
        background-color: var(--color-tint); */
    }

    .tab-control2 {
        /* position: fixed;
        left: 0;
        right: 0;
        top: 44px; */
        position: relative;
    }
    
    .content {
        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0; 
        overflow: hidden;
        /* margin-bottom: 49px;
        height: calc(100vh - 93px);
        overflow: hidden;  */
    }


</style>