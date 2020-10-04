import {request} from './request'

//面向程序开发

export function getHomeMultidata() {
    return request({
        url:'/home/multidata'
    });
}


/**
 * 请求首页商品相关的数据
 * @param {*} type 
 * @param {*} page 
 * return {*}
 */

export function getHomeGoods(type,page) {
    return request({
        url:'/home/data',
        params: {
            type,
            page
        }
    })
}