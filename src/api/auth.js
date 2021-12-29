import Api from '@/api'
import { API } from '@/utils/constants'

export default {
  register(params) {
    return Api.post(API.REGISTER, params)
  },
  login(params) {
    return Api.post(API.LOGIN, params)
  }
}