<!--  -->
<template>
  <div class="tab-control">
<!-- 只是文字不一样的情况下，没有必要用插槽 -->
    <div v-for = "(item , index) in titles" class="tab-control-item" 
         :class = "{ active:index === currentIndex }" 
         @click = "tabClick(index)">
        <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'TabControl',
  props:{
      titles: {
          type:Array,
          default() {
              return []
          }
      }
  },
  data () {
    return {
        currentIndex: 0,
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
      tabClick(index) {
          this.currentIndex = index;
        //   内部发生的事件往外面传数据
          this.$emit('tabClick',index);
      }
  }
}

</script>
<style scoped>
    .tab-control {
        display: flex;
        text-align: center;
        font-size: 15px;
        background-color: #fff;
        /* 提高层级 */
        z-index: 9;
    }

    .tab-control-item {
        flex: 1;
        height: 40px;
        line-height: 40px;
    }

    .active {
        color: var(--color-high-text);
    }

    .active span {
        border-bottom: 3px solid var(--color-tint);
        padding: 5px;
    }
</style>