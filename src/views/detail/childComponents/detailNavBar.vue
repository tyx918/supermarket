<!--  -->
<template>
  <div>
      <navbar>
          <div slot="left" class="back" @click = "backClick">
              <img src="~assets/img/common/back.svg" alt="">
          </div>
          <div slot="center" class="detailCenter">
              <div v-for = "(title ,index) in titles" class="title" 
                   @click = "titleClick(index)"
                   :class = "{active : currentIndex=== index}">{{ title }}</div>
          </div>
      </navbar>
  </div>
</template>

<script>

import navbar from "components/common/navbar/NavBar"

export default {
  name:'datailNavBar',
  data () {
    return {
        titles:["商品","参数","评论","推荐"],
        currentIndex:0,
    };
  },

  components: {
      navbar 
  },

  computed: {},

  mounted() {},

  methods: {
      titleClick(index) {
          this.currentIndex = index;
          this.$emit('titleClick' , index);
      },
      backClick() {
        //   返回上一级
          this.$router.go(-1);
      }
  }
}

</script>
<style scoped>
    .detailCenter {
        display:flex;
        font-size: 14px;
    }

    .title {
        flex: 1;
    }

    .active {
        color:khaki;
    }

    .back img {
        margin-top: 10px;
    }

</style>