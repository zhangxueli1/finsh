import {
  reqShouYe,
  reqFenlei,
  reqPinpai,
  reqTotal
} from '../api'
import {
  RECEIVE_SHOUYE,
  RECEIVE_FENLEI,
  RECEIVE_PINPAI,
  RECEIVE_TOTAL
} from './mutation-types'

export default {
  //异步获取首页
  async getShouye({commit, state},callback) {
    const result = await reqShouYe( )
    commit(RECEIVE_SHOUYE, {data: result.data})
    callback&&callback()
  },
  //分类
  async getFenlei({commit, state},callback) {
    const result = await reqFenlei( )
    commit(RECEIVE_FENLEI, {fenlei: result.data})
    callback&&callback()
  },
  //品牌
  async getPinpai({commit, state}) {
    const result = await reqPinpai( )
    commit(RECEIVE_PINPAI, {pinpai: result.data})

  },
  //所有品牌
  async getTotalBrand({commit, state},callback) {
    const result = await reqTotal()
    commit(RECEIVE_TOTAL, {total: result.data})
    callback&&callback()
  },
}
