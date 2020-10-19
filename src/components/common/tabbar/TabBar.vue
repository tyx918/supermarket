<!--  -->
<template>
  <div>
    <div id = "tab-bar">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:"tabBar",
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted(){},

  methods: {}
}

</script>
<style  scoped>
    #tab-bar {
        display: flex;
        background-color: aqua;
        /* 固定布局 */
        position: fixed;
        left: 0;
        bottom: 0;
        right: 0;

        box-shadow:0 -4px 1px rgba(0, 0, 0, .3);
    }

</style>