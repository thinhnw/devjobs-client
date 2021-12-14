import Api from '@/api'
import { API } from '@/utils/constants'

export default {
  getCandidates(params) {
    return Api.get(API.CANDIDATE, { params }).then(res => res.data)
  },
  getCandidateById(id) {
    return Api.get(API.CANDIDATE + `/${id}`).then(res => res.data)
  }
}