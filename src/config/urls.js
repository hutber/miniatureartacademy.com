export default {
  home: {
    root: '/',
  },
  artists: {
    root: '/artists',
  },
  countries: {
    root: '/countries',
  },
  competitions: {
    root: '/competitions',
  },
  models: {
    root: '/models',
  },
  manufacturers: {
    root: '/manufacturers',
  },
  oop: {
    root: '/oop',
  },
}
export const absoluteUrl = `/var/www/gd.hutber.com/`
export const db = {
  graphql: 'http://localhost:4000/graphql',
}

export const adminNavItems = [
  {
    name: 'Artists',
    url: '/admin/artists',
  },
  {
    name: 'Awards',
    url: '/admin/awards',
  },
  {
    name: 'Award Type',
    url: '/admin/award_type',
  },
  {
    name: 'Competition System',
    url: '/admin/competition_system',
  },
  {
    name: 'Categories',
    url: '/admin/categories',
  },
  {
    name: 'Events',
    url: '/admin/events',
  },
  {
    name: 'Game Systems',
    url: '/admin/gamesystems',
  },
  {
    name: 'Manufacturer',
    url: '/admin/manufacturer',
  },
  {
    name: 'Models',
    url: '/admin/models',
  },
  {
    name: 'Nationalities',
    url: '/admin/nationalities',
  },
  {
    name: 'Scale',
    url: '/admin/scale',
  },
  {
    name: 'Organisers',
    url: '/admin/organisers',
  },
]

export const adminNavTopRight = [
  {
    name: 'Admin',
    url: '/admin',
  },
  {
    name: 'Scrape',
    url: '/admin/scrape',
  },
  {
    name: 'Scrape Demonwinner',
    url: '/admin/scrape/demonwinner',
  },
]

export const adminScrapeLinks = [
  {
    name: 'Golden Demon com',
    url: './scrape/goldendemoncom',
  },
  {
    name: 'Demon Winner fr',
    url: './scrape/demonwinner',
  },
]

export const demonwinner = {
  events: {
    update: 'api/admin/scrape/demonwinner/updateEvents',
  },
  nationality: {
    get: 'api/admin/scrape/demonwinner/getEvents',
  },
}
