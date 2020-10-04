<!--  -->
<template>
  <div>
      <tabBar>
          <TabBarItem path = "/home" >
            <img src = "~assets/img/tabbar/home.svg" alt="" slot="item-con" > 
            <img src = "~assets/img/tabbar/home_active.svg" alt="" slot="item-con-active">
            <div slot="item-text">首页</div> 
          </TabBarItem>
          <TabBarItem path = "/category" >
            <img src = "~assets/img/tabbar/category.svg" alt="" slot="item-con"  >
            <img src = "~assets/img/tabbar/category_active.svg" alt="" slot="item-con-active">
            <div slot="item-text">分类</div> 
          </TabBarItem>
          <TabBarItem path = "/carts"  >
            <img src="~assets/img/tabbar/shopcart.svg" alt="" slot="item-con" >
            <img src = "~assets/img/tabbar/shopcart_active.svg" alt="" slot="item-con-active">
            <div slot="item-text">购物车</div> 
          </TabBarItem>
          <TabBarItem path = "/profile" >
            <img src="~assets/img/tabbar/profile.svg" alt="" slot="item-con"  >
            <img src = "~assets/img/tabbar/profile_active.svg" alt="" slot="item-con-active">
            <div slot="item-text">我的</div> 
          </TabBarItem>
      </tabBar>
  </div>
</template>

<script>
import tabBar from  'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  name:'maintabbar',
  data () {
    return {
    };
  },

  components: {
      tabBar,
      TabBarItem,
  },

  computed: {},

  mounted(){},

  methods: {}
}

</script>
<style  scoped>
</style>