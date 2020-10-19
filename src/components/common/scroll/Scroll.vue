<!--  -->
<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
        <slot></slot>
      </div>
  </div>
</template>

<script>

import BScroll from 'better-scroll'


export default {
  name:'scroll',
  props:{
      click:{
          type:Boolean,
          default(){
              return false
          }
      },
      probeType:{
          type:Number,
          default() {
              return 0
          }
      },
      pullUpLoad: {
          type:Boolean,
          default() {
              return false
          }
      }
  },
  data () {
    return {
        scroll:null,
        message:'nihaoa',
    };
  },
  components: {},

  computed: {},

  mounted() {
      this.scroll = new BScroll(this.$refs.wrapper,{
          probeType:this.probeType,
          click:this.click,
          pullUpLoad:this.pullUpLoad
      });
      if(this.probeType===2||this.probeType===3) {
        this.scroll.on('scroll' , (position) => {
            this.$emit( "scroll", position);
        });
      }
      if(this.pullUpLoad) {
        this.scroll.on('pullingUp' , () => {
            this.$emit('pullingUp');
            this.scroll.finishPullUp();
        })
      }
  },

  methods: {
    /**
     * @param {x:num}
     * @param {y:num}
     * @param {time:500}
     * return null
     */
    scrollToMy(x,y,time = 500) {
        this.scroll && this.scroll.scrollTo(x,y,time);
    },

    refresh() {
        this.scroll && this.scroll.refresh && this.scroll.refresh();
    },

    getY() {
        // 加一层判断
        return this.scroll?this.scroll.y:0;
    }
  }
}

</script>
<style scoped>
    
</style>