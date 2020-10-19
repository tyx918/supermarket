<!--  -->
<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div class="service">
          <i class="service-pattern icon"></i>
          <span>客服</span>
      </div>

      <div class="shop">
          <i class="shop-pattern icon"></i>
          <p>店铺</p>
      </div>

      <div class="collect">
          <i class="collect-pattern icon"></i>
          <p>收藏</p>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="add-to-cart" @click="addToCarts">
          加入购物车
      </div>
      <div class="buy">
          购买
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'detailBottomBar',
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
      addToCarts() {
          this.$emit("addCart");
      }
  }
}

</script>
<style scoped>
    .bottom-bar {
        display: flex;
        height: 49px;

        position: relative;
        bottom: 0px;
        left: 0;
        right: 0;
    }

    .bar-item  {
        display: flex;
        flex: 1;
        font-size: 14px;
        text-align: center;
    }

    .bar-left {
        background-color:bisque;
    }

    .bar-item .icon {
        display: block;
        width: 22px;
        height: 22px;
        margin: 5px auto 3px;
        background: url('~assets/img/detail/detail_bottom.png');
        background-size: 100%;
    }

    .bar-item .service {
        flex: 1;
    }

    .bar-item .service .service-pattern {
        background-position: 0 -54px;
    }

    .bar-item .shop {
        flex: 1;
    }

    .bar-item .shop .shop-pattern {
        background-position: 0 -98px;
    }

    .bar-item .collect {
        flex: 1;
    }

    .bar-right {
        /* font-size: 12px; */
        height: 49px;
        line-height: 49px;
    }

    .add-to-cart {
        flex: 1;
        background-color: yellow;
    }

    .buy {
        flex: 1;
        color: white;
        background-color:salmon;
    }

</style>