<template>
  <div id="app">
    <keep-alive exclude="detail">
        <router-view/>
    </keep-alive>
    
    <maintabbar/>
  </div>
</template>

<script>
import maintabbar from 'components/content/mainTabbar/MainTabBar'
export default {
  name: 'App',
  components: {
    maintabbar
  }
}
</script>

<style>
    @import 'assets/css/base.css';
</style>
