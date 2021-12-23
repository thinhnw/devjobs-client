import Api from '@/api'
import { API } from '@/utils/constants'

export default {
  getCandidates(params) {
    return Api.get(API.CANDIDATE, { params }).then(res => res.data)
  },
  getCandidateById(id) {
    return Api.get(API.CANDIDATE + `/${id}`).then(res => res.data)
  },

  postPersonalProfile(params) {
    return Api.post(API.CANDIDATE + '/profile', { params }).then(res => res.data)
  },

  postEducationProfile(params) {
    return Api.post(API.CANDIDATE + '/educations', { params }).then(res => res.data)
  },

  postWorkExperience(params) {
    return Api.post(API.CANDIDATE + '/WorkExperiences', { params }).then(res => res.data)
  }
}