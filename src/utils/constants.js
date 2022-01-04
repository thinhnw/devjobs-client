const API = {
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',  
  ME: '/auth/me',
  CANDIDATE: '/candidates',
  CORPORATE: '/corporates',
  JOB: '/jobs'
}

const Status = {
  SUCCESS: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERR: 500
}

export {
  API,
  Status,
}