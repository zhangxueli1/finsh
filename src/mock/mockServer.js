import Mock from 'mockjs'
import Data from './homepage.json'


Mock.mock('/shouye', {code:0, data:Data})
Mock.mock('/classify/fenlei',{code:0,data:[Data.categorys,Data.cate_list]})
Mock.mock('/classify/pinpai',{code:0,data:Data.brand})

