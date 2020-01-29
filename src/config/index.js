const configSetup = {
  prod: {},
  stage: {},
  local: {
    url: 'http://miniatureartacademy.com/',
    redirect: '/bad',
  },
}

export const apiGenric = {}
export const apiGlobalErrors = {}

export default configSetup.local
