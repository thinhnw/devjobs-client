import Api from '@/api'
import { API } from '@/utils/constants'

export default {
  getCorporates(params) {
    return Api.get(API.CORPORATE, { ...params }).then(res => res.data)
  },
  getCorporateById(id) {
    return Api.get(API.CORPORATE + `/${id}`).then(res => res.data)
  },

  editProfile(id, params) {
    return Api.patch(API.CORPORATE + "/" + id, params).then(res => res.data)
  }
}