<!--  -->
<template>
  <div class="cart">
      <!-- 导航栏 -->
      <navbar class="nav-Bar">
        <div slot="center">购物车({{length}})</div>
      </navbar>
      <scroll class="content" :probe-type = "3" :pullUpLoad = "true" :click = "true"
              ref = "scroll">
          <CartList ></CartList>
      </scroll>
      <cartBottonBar></cartBottonBar>
  </div>
</template>

<script>

import CartList from "./childComponents/CartList"
import cartBottonBar from "./childComponents/cartBottonBar"

import scroll from 'components/common/scroll/Scroll'

import navbar from "components/common/navbar/NavBar"
//这指的是map的映射：注意是从vuex中导入
import { mapGetters} from 'vuex'

export default {
  name:'carts',
  data () {
    return {

    };
  },

  components: {
      navbar,
      CartList,
      scroll,
      cartBottonBar
  },

  computed: {
    //  cartLength() {
    //      return this.$store.getters.cartLength;
    //  } 
    ...mapGetters(
        {
            length:'cartLength'
        },
        )
  },

  activated() {
      this.$refs.scroll.refresh();
  },

  mounted(){},

  methods: {}
}

</script>
<style scoped>

    .cart {
        height: 100vh;
    }

    .nav-Bar {
        background-color: var(--color-tint);   
        color:#fff;
        font-weight: 700;
    }

    .content {
        /* height: calc(100%-44px); */
        height: calc(100% - 133px);
        /* border: 1px solid rebeccapurple; */
        overflow: hidden;
    }
</style>