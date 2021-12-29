import { pascalCaseKeys, camelCaseKeys } from '@/utils'
const REGISTER = (state, payload) => {
  const auth = pascalCaseKeys(payload)
  state.auth = Object.assign({}, auth)
}

const LOGIN_DEFAULT = (state, payload) => {
  const auth = camelCaseKeys(payload)
  state.auth = Object.assign({}, auth)
  console.log(payload, state.auth)
}

const CLEAR = (state) => {
  state.auth = {}
}

export default {
  REGISTER,
  LOGIN_DEFAULT,
  CLEAR
}