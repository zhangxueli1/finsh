import {
  reqShouYe,
  reqFenlei,
  reqPinpai
} from '../api'
import {
  RECEIVE_SHOUYE,
  RECEIVE_FENLEI,
  RECEIVE_PINPAI
} from './mutation-types'

export default {
  //异步获取首页
  async getShouye({commit, state},callback) {
    const result = await reqShouYe( )
    commit(RECEIVE_SHOUYE, {data: result.data})
    callback&&callback()
  },
  async getFenlei({commit, state},callback) {
    const result = await reqFenlei( )
    commit(RECEIVE_FENLEI, {fenlei: result.data})
    callback&&callback()
  },
  async getPinpai({commit, state}) {
    const result = await reqPinpai( )
    commit(RECEIVE_PINPAI, {pinpai: result.data})

  },
}
