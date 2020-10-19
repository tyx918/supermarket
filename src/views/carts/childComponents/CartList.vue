<!--  -->
<template>
  <div class="cart-list">
      <cartListItem ></cartListItem>
        <cartListItem v-for = "(item,index) in cartList" :key="index" :product = "item"></cartListItem>
  </div>
</template>

<script>

import cartListItem from "./cartListItem"

import {mapGetters} from 'vuex'

export default {
  name:'CartList',
  data () {
    return {
    };
  },

  components: {
    cartListItem
  },

  computed: {
      ...mapGetters(['cartList'])
  },

  mounted() {},

  methods: {}
}

</script>
<style scoped>
</style>