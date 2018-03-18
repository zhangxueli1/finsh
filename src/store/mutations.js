import {
  RECEIVE_SHOUYE,
  RECEIVE_FENLEI,
  RECEIVE_PINPAI,
  RECEIVE_TOTAL
} from './mutation-types'

export default {
  [RECEIVE_SHOUYE](state, {data}) {
    state.shouye = data
  },
  [RECEIVE_FENLEI](state, {fenlei}) {
    state.fenlei = fenlei
  },
  [RECEIVE_PINPAI](state, {pinpai}) {
    state.pinpai = pinpai
  },
  [RECEIVE_TOTAL](state, {total}) {
    state.total = total
  },
}
