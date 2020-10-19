import {
    ADD_COUNTER,
    ADD_TO_CART
} from "./mutation-types"

export default {
    addCart(context,payload) {
        return new Promise((resolve,reject) => {
            let oldProduct = null;
            for(let item of context.state.cartList) {
                if(item.iid === payload.iid) {
                    oldProduct = item;
                }
            }
            if(oldProduct!==null) {
                context.commit(ADD_COUNTER,oldProduct);
                resolve('当前的商品数量 + 1');
            }else  {
                payload.count = 1; 
                context.commit(ADD_TO_CART,payload);
                resolve('添加新的商品');
            }
        })
    }
}