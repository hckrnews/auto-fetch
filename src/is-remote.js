const reRemote = /^\w[http(s)]+:\/\//

const isRemote = target => reRemote.test(target)

export default isRemote
