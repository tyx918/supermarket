<!--  -->
<template>
  <div class="homerecview">
      <div v-for = "item in recommends"  :key="item.id" class="rec-item">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{ item.title }}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
  name:'HomeRecommendView',
  props:{
      recommends:{
          type: Array,
          default() {
              return []
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
    .homerecview {
        display: flex;
        padding: 10px 0;
        border-bottom: 8px solid gray;
    }

    .homerecview .rec-item {
        text-align: center;
        font-size: 12px;
    } 

    .homerecview  img{
        flex: 1;
        width: 80px;
        height: 72px;
        margin: 0  0 10px 1px;
    }

    

</style>