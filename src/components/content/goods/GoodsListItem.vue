<!--  -->
<template>
  <div class="goods-list-item " @click = "itemClick">
      <img v-lazy = "showImage" alt="" @load = "imageLoad">
      <div class="goods-info">
          <p>{{goodsItem.title}}</p>
          <span class="price">{{ goodsItem.price }}</span>
          <span class="collect">{{ goodsItem.cfav }}</span>
      </div>
  </div>
</template>

<script>
export default {
  name:'GoodsListItem',
  props:{
      goodsItem:{
          type:Object,
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

  computed: {
    //   计算属性：根据不同的图片获取后缀，获取不同的图片
      showImage() {
          return this.goodsItem.img||this.goodsItem.image||this.goodsItem.show.img
      }
  },

  mounted() {},

  methods: {
      imageLoad() {
        //   console.log("图片被加载");
          //使用路由来监听home/detail发出load事件, -1也是为真
          if(this.$route.path.indexOf('/home') !== -1) {
            //   console.log("home中的图片被加载");
              this.$bus.$emit('itemImageLoad');
          } else if(this.$route.path.indexOf('/detail')!==-1) {
              this.$bus.$emit('detailItemImageLoad');
          }
      },
      itemClick() {
        //   动态路由传递参数
        //  
          this.$router.push('/detail/' + this.goodsItem.iid);
      }
  }
}

</script>
<style scoped>

    /* 直接操纵这个组件 */
    .goods-list-item {
        padding-bottom: 40px;
        position: relative;
        width: 48%;
    }

    /* 让图片的宽充满这个组件，并且设置图片的边框 */
    .goods-list-item img {
        /* 宽度充满这个组件 */
        width: 100%;
        /* 设置图片的边框 */
        border-radius: 5px;
    }

    .goods-info {
        font-size: 12px;
        position: absolute;
        bottom:5px;
        left: 0;
        right: 0;
        overflow: hidden;
        text-align: center;
    }

    .goods-info p {
        overflow: hidden;
        /* 让溢出的元素以...的形式隐藏起来 */
        text-overflow: ellipsis;
        /* 文本不进行换行 */
        white-space: nowrap;
        margin-bottom: 3px;
    }

    .goods-info .price {
        color: var(--color-high-text);
        margin-left: 20px;
    }
    
    /* 相对定位 */
    .goods-info .collect {
        position: relative;
        margin-left: 20px;
    }
    /* 绝对定位 */
    .goods-info .collect::before {
        content: '';
        position: absolute;
        left: -14px;
        top: -1px;
        width: 14px;
        height: 14px;
        background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
    }
</style>