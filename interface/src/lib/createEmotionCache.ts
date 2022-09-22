import createCache from '@emotion/cache'

const createEmotionCache = () => {
  return createCache({
    key: 'ortc',
    prepend: false,
  })
}

export default createEmotionCache
