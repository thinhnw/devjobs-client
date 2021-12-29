import Api from '@/api'
import { API } from '@/utils/constants'

export default {
  getJobs(params) {
    return Api.get(API.JOB, { params }).then(res => res.data)
  },
  getJobsByCorporate(id, params) {
    return Api.get(API.JOB + `/${id}`, { params }).then(res => res.data)
  },
  getJobById(id) {
    return Api.get(API.JOB + `/${id}`).then(res => res.data)
  },

  postJob(params) {
    return Api.post(API.JOB, params).then(res => res.data)
  }
}