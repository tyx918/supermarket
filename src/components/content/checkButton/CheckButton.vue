<!--  -->
<template>
  <div id="check-button">
      <img src="~assets/img/cart/tick.svg" alt="" :class="{checked:isChecked}" >
  </div>
</template>

<script>
export default {
  name:'CheckButton',
  props:{
      isChecked:{
          types:Boolean,
          default(){
              return false
          }
      }
  },
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted() {
  },

  methods: {}
}

</script>
<style scoped>
  #check-button img {
    background-color: #999;
    border-radius: 50%;
  }

  #check-button .checked{
    background-color: var(--color-high-text);
    border-radius: 50%;
  }
</style>