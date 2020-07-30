const configSetup = {
  prod: {},
  stage: {},
  local: {
    url: 'https://miniatureartacademy.com/',
    redirect: '/bad',
    graphQL: {
      categoryArtistId: '132',
    },
  },
}

export const apiGenric = {}
export const apiGlobalErrors = {}

export default configSetup.local
