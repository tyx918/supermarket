<!--  -->
<template>
  <div id="detailComment" v-if = "Object.keys(commentInfo).length!==0">
      <div class="title">
          <span class="usercomment">用户评价</span>
          <span class="more">更多>></span>
      </div>
      <div class="user">
          <img :src="commentInfo.user.avatar" alt="">
          <span>{{commentInfo.user.uname}}</span>
      </div>
      <div class="comment">
          <p class="comment-con">{{commentInfo.content}}</p>
          <p class="comment-info">{{commentInfo.style}}</p>
      </div>
  </div>
</template>

<script>
export default {
  name:'detailComment',
  props:{
      commentInfo:{
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

  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style scoped>
    #detailComment {
        padding: 18px 6px 26px;
        border-bottom:3px solid bisque;
        margin-bottom: 24px;
    }

    .title {
        padding-bottom:10px;
        border-bottom: 1px solid bisque;
        /* 给父元素添加这条语句：清除浮动 */
        overflow: hidden;
    }

    .title .usercomment {
        float: left;
    }

    .title .more {
        float: right;
    }

    .user {
        padding:12px ;
        display: flex;
        align-items: center;
    }

    .user img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    .user span {
        font-size: 14px;
        margin-left: 10px;
    }

    .commnent {
        font-size: 14px;
    }

    .commnent-con {
        
    }

    .comment-info {
        font-size: 12px;
        margin-top: 10px;
    }

</style>