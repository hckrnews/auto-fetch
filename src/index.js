import localFetch from '@hckrnews/local-fetch'
import fetch from 'node-fetch'
import isRemote from './is-remote.js'

const autoFetch = (location, options) => {
  if (isRemote(location)) {
    return fetch(location, options)
  }

  return localFetch(location)
}

export default autoFetch
export {
  localFetch,
  fetch,
  autoFetch,
  isRemote
}
