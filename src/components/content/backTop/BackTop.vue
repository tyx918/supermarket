<!--  -->
<template>
  <div class="back-top" >
      <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name:'BackTop',
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
    .back-top {
        position: fixed;
        right: 30px;
        bottom: 60px;
        z-index: 999;
    }

  .back-top img{
      /* display: none; */
      width: 40px;
      height: 40px;
  }
</style>