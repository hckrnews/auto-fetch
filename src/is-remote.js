const reRemote = /^\w[htp(s)]+:\/\//

const isRemote = target => reRemote.test(target)

export default isRemote
