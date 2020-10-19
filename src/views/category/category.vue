<!--  -->
<template>
  <div class="wrapper">
      <ul class="content">
          {{show}}
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
          <li>nihaoa</li>
      </ul>
  </div>
  
</template>

<script>

import BScroll from 'better-scroll'

export default {
  name:'category',
  data () {
    return {
        scroll:null
    };
  },
  created() {
    //创造监听属性里面拿不到模板中的内容
    //只有在挂载函数中才可以拿到
  },

  components: {},

  computed: {
      show() {
          return this.aaa;
      }
  },

  mounted(){
    this.scroll = new BScroll('.wrapper',{
        probeType :3,
        pullUpLoad:true     
      });
    this.scroll.on('scroll',(position) => {
        // console.log(position);
    });
    this.scroll.on('pullingUp',() => {
        console.log('上拉加载更多');
    });
          console.log(this.scroll);
      console.log(this.scroll.hasVerticalScroll);
      console.log(this.scroll.scrollerHeight);
      console.log(this.scroll.content1erHeight);
  },

  methods: {}
}

</script>
<style  scoped>
    /* 原生的滚动  */
    /* .content {
        height: 100px;
        background-color: red;
        overflow-y: scroll;
    } */
    .wrapper {
        height: 680px;
        background-color: red;
        overflow: hidden;
    }
</style>