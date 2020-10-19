<!--  -->
<template>
  <div id = "cart-botton-bar">
      <div class="check-content">
          <CheckButton :isChecked = "isSelectAll" class="check-button"
                        @click.native="checkAllClick"/>
          <span>全选</span>
      </div>
      <div class="total">
          合计
          <span>￥{{totalPrice}}</span>
      </div>
      <div class="pay" @click="caculate">
          结算({{checkedLength}})
      </div>
  </div>
</template>

<script>

import CheckButton from "components/content/checkButton/CheckButton";

export default {
  name:'cartBottonBar',
  data () {
    return {
    };
  },

  components: {
      CheckButton
  },

  computed: {
      totalPrice() {
          return this.$store.getters.cartList.filter(item => {
              return item.checked;
          }).reduce((preValue,item) => {
              return preValue+item.price*item.count;
          },0)
      },
      checkedLength() {
          return this.$store.state.cartList.filter(item => item.checked).length;
      },
      isSelectAll() {
        //   全选和部分选
        // 选择没有选中的状态
        if(this.$store.state.cartList.length === 0) return false;
        return !this.$store.state.cartList.find(item => !item.checked);
        //    return !(this.$store.state.cartList.filter(item => !item.checked).length);
      }
  },

  mounted() {},

  methods: {
      checkAllClick() {
          if(this.isSelectAll) {
            this.$store.state.cartList.forEach(element => {
                element.checked = false
            });
          } else {
              this.$store.state.cartList.forEach(item => item.checked = true)
          }
        //this.$store.state.cartList.forEach(item => item.checked = !this.isSelectAll);
      },
      caculate() {
        this.$toast.show("没有添加商品");
      }
  }
}

</script>
<style scoped>
    #cart-botton-bar {
        height: 40px;
        background-color: #fff;
        box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);;
        position: relative;
        left: 0;
        display: flex;
        /* 垂直居中，两边分布 */
        align-items: center;
        justify-content: space-between;
    }

    .check-content {
        display: flex;
        /* flex: 1; */
        margin-left: 15px;
    }


    .pay {
        width: 82px;
        height: 100%;
        line-height: 40px;
        text-align: center;
        background-color:burlywood
        /* flex: 1; */
        /* text-align: right; */
    }

</style>