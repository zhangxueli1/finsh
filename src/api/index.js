import ajax from './ajax'

//获取首页
export const reqShouYe = () => ajax('/shouye')
//获取分类列表
export const reqFenlei = () => ajax('/classify/fenlei')
//获取品牌列表
export const reqPinpai = () => ajax('/classify/pinpai')
