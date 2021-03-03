import Prismic from "prismic-javascript"

// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = 'https://local-landscapers.cdn.prismic.io/api/v2'

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = 'MC5ZRGdHTkJFQUFDQUFQVmdu.77-9dEXvv73vv71J77-977-9PBLvv73vv73vv73vv73vv71bDO-_ve-_ve-_vQTvv73vv73vv73vv73vv70nTjUh77-9NA'

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
  if (doc.type === 'post') {
    return `/posts/${doc.uid}`
  }
  return '/'
}

// Additional helper function for Next/Link components
export const hrefResolver = (doc) => {
  if (doc.type === 'post') {
    return '/posts/[uid]'
  }
  return '/'
}

// Client method to query Prismic
export const client = Prismic.client(apiEndpoint, { accessToken })
