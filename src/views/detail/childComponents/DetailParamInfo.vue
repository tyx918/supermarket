<!--  -->
<template>
  <div id="detailParamInfo" v-if="Object.keys(paramInfo).length !== 0">
      <div class="table-size">
          <table class="size">
              <tr v-for = "size in paramInfo.sizes[0]">
                  <td class="name">{{size[0]}}</td>
                  <td>{{size[1]}}</td>
                  <td>{{size[2]}}</td>
                  <td>{{size[3]}}</td>
              </tr>
          </table>
      </div>
      <div class="table-info">
          <table class="info">
              <tr v-for="info in paramInfo.infos">
                  <td>{{info.key}}</td>
                  <td class="info-last">{{info.value}}</td>
              </tr>
          </table>
      </div>
      <div class="image">
          <img :src="paramInfo.image" alt="">
      </div>
  </div>
</template>

<script>
export default {
  name:'DetailParamInfo',
  props:{
      paramInfo:{
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
    #detailParamInfo {
        padding: 20px 6px 10px;
        border-bottom: 3px solid khaki;
    }

    .table-size .size{
        width: 100%;
        border-collapse: collapse;
        font-size: 12px;
        /* text-align: center; */
    }

    .table-size .size .name{
        padding-right: 60px;
    }

    .size tr {
        height: 50px;
        border-bottom: 1px solid bisque;
    }

    .info {
        border-top: 1px solid bisque;
    }

    .info {
        width: 100%;
        font-size: 12px;
    }

    .info tr {
        height: 40px;
    }

    .info .info-last {
        width: 70%;
        color: lightblue;
    }

    .image img {
        width: 100%;
    }
</style>