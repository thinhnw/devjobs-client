import { pascalCaseKeys, camelCaseKeys } from '@/utils'
const REGISTER = (state, payload) => {
  const auth = camelCaseKeys(payload)
  console.log('b4', auth)
  state.auth = Object.assign({}, auth)
  console.log('register commit', state.auth)
}

const LOGIN_DEFAULT = (state, payload) => {
  const auth = camelCaseKeys(payload)
  state.auth = Object.assign({}, auth)
}

const SET_ME = (state, payload) => {
  const me = camelCaseKeys(payload)
  state.me = Object.assign({}, me)
}

const CLEAR = (state) => {
  state.auth = {}
}

export default {
  REGISTER,
  LOGIN_DEFAULT,
  SET_ME,
  CLEAR
}