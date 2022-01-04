import auth from '@/api/auth'
import { setToken, removeToken, removePermission } from '@/utils/auth'
import { Status } from '@/utils/constants'

const register = ({ commit }, params) => {
  return auth.register(params).then(res => {
    if (res.status === Status.SUCCESS) {
      if (res.data.token) {
        setToken(res.data.token)
      }
      commit('REGISTER', res.data)
    }
    return res
  }).catch(error => {
    throw error
  })
}

const login = ({ commit }, user) => {
  return auth.login(user).then(res => {
    console.log(res, res.status)
    if (res.status === Status.SUCCESS) {
      if (res.data.token) {
        setToken(res.data.token)
      }
      commit('LOGIN_DEFAULT', res.data)
    }
    return res
  }).catch(error => {
    throw error
  })
}

const me = ({ commit }, user) => {
  return auth.me().then(res => {
    if (res.status === Status.SUCCESS) {
      commit('SET_ME', res.data)
    }
    return res
  }).catch(err => { throw err })
}

const clear = ({ commit }) => {
  removeToken()
  removePermission()
  commit('CLEAR')
}

export default {
  register,
  login,
  me,
  clear
}