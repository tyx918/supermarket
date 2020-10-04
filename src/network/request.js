import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL:'http://152.136.185.210:8000/api/w6',
        timeout:5000,
    })


    // //
    // instance(config.baseConfig).then(res => {
    //     config.success(res);
    // }).catch(err => {
    //     config.failure(err);
    // });
    // return new Promise((resolve,reject) => {
    //     //创建实例
    //     const instance = axios.create({
    //         baseURL:'http://123.207.32.32:8000',
    //         timeout:5000
    //     })
    //     //发送真正的网络请求
    //     instance(config)
    //         .then(res => {
    //             resolve(res)
    //         })
    //         .catch(err => {
    //             reject(err)
    //         })
    //     })

    // axios的拦截器
    axios.interceptors.request.use(config => {
        console.log(config.data);
        //1.显示图标
        return config;
    },err => {
        console.log(err);
    });

    //响应拦截
    axios.interceptors.response.use(res => {
        return res.data
    },err => {
        console.log(err);
    })
    //发送网络请求
    return instance(config)
    }


