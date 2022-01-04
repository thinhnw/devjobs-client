import Api from '@/api'
import { API } from '@/utils/constants'

export default {
  getCandidates(params) {
    return Api.get(API.CANDIDATE, { params }).then(res => res.data)
  },
  getCandidateById(id) {
    return Api.get(API.CANDIDATE + `/${id}`).then(res => res.data)
  },

  postPersonalDetails(params) {
    return Api.post(API.CANDIDATE + '/personal-details', params).then(res => res.data)
  },

  postEducationProfile(arr) {
    return Api.post(API.CANDIDATE + '/educations', arr ).then(res => res.data)
  },

  postWorkExperience(arr) {
    return Api.post(API.CANDIDATE + '/WorkExperiences', arr).then(res => res.data)
  }
}