<!--  -->
<template>
  <div id = "home">
    <navbar class="home-nav">
        <div slot="left"></div>
        <div slot="center">购物车</div>
        <div slot="right"></div>
    </navbar>
    <homeswiper :banner = "banner"></homeswiper>
    <HomeRecommendView :recommends = "recommends"></HomeRecommendView>
    <feature></feature>
    <TabControl :titles="['流行','经典','精选']" class="tab-control"
                @tabClick = "tabClick"></TabControl>
    <GoodsList :goods = "currentGoods"></GoodsList>
    
  </div>
</template>

<script>

import homeswiper from "./childComponents/HomeSwiper"
import HomeRecommendView from "./childComponents/HomeRecommendView"
import feature from "./childComponents/feature"

import navbar from 'components/common/navbar/NavBar'
import TabControl from "components/content/mainTabbar/TabControl"
import GoodsList from "components/content/goods/GoodsList"

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
    };
  },

  components: {
      homeswiper,
      HomeRecommendView,
      feature,
      TabControl,
      navbar,
      GoodsList,
  },
 
  computed: {
        currentGoods:function() { 
            return this.goods[this.currentType].list;
        }
  },

  mounted(){},

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
    }
  },
  created(){
    this.getHomeMultidata();
    //请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
}

</script>
<style  scoped>
    #home {
        padding-top: 44px;
    }

    .home-nav {
        position: fixed;
        left: 0;
        right: 0;
        top:0;
        background-color:var(--color-tint);
        color: #fff;
        z-index: 9;
    }

    .tab-control {
        /* 粘性定位：相当于其固定定位和相对定位的结合 */
        position: sticky;
        top:44px;
    }

</style>