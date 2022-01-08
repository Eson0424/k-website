// api接口统一管理模块

import requests from './request'

// 发送请求获取数据

export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' });