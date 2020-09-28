<!--  -->
<template>
    <!-- 多了一个div包裹的话，就不会生效  -->
    <div class="tab-bar-item" @click="itemClick" :style = "curStyle">
        <div v-if = "!isActive"><slot name = "item-con"></slot></div>
        <div v-else><slot name = "item-con-active"></slot></div>
        <!-- 类名：许可名 -->
        <div ><slot name = "item-text"></slot></div>
    </div>
</template>

<script>
export default {
  name:'TabBarItem',
  props:{
      path:String,
      activeColor: {
          type:String,
          default:'red',
      }
  },

  data () {
    return {
        //col:this.activeColor
    };
  },

  components: {
  },

  computed: {
      isActive() {
          return this.$route.path.indexOf(this.path) !== -1
      },
      curStyle() {
          return this.isActive ? {color : this.activeColor} : {}
      }
  },

  mounted(){
      console.log(this.col);
  },

  methods: {
      itemClick() {
        //   防止跳转到自身的时候出现问题
          this.$router.replace(this.path,onComplete => {},
            onAbort => {});
      },
  }
}

</script>
<style  scoped>
     .tab-bar-item {
        flex: 1;
        text-align: center;
        /* 开发的时候一般是49 */
        height: 49px;
        font-size: 14px;
    }

    .tab-bar-item img {
        width: 24px;
        height: 24ps;
        margin-top: 3px;
        /* 图片相对于水平基线的位置 */
        vertical-align: middle;
        margin-top: 2px;
    }

</style>