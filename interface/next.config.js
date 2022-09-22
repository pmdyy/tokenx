const path = require('path')
const loaderUtils = require('loader-utils')
const withFonts = require('next-fonts')
// const withPreact = require('next-plugin-preact')

const hashOnlyIdent = (context, _, exportName) =>
  loaderUtils
    .getHashDigest(
      Buffer.from(
        `filePath:${path
          .relative(context.rootContext, context.resourcePath)
          .replace(/\\+/g, '/')}#className:${exportName}`
      ),
      'md4',
      'base64',
      6
    )
    .replace(/^(-?\d|--)/, '_$1')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withFonts({
    webpack(config, { dev, isServer }) {
      const rules = config.module.rules
        .find((rule) => typeof rule.oneOf === 'object')
        .oneOf.filter((rule) => Array.isArray(rule.use))

      if (!dev) {
        rules.forEach((rule) => {
          rule.use.forEach((moduleLoader) => {
            if (moduleLoader.loader?.includes('css-loader') && !moduleLoader.loader?.includes('postcss-loader'))
              moduleLoader.options.modules.getLocalIdent = hashOnlyIdent
          })
        })
      }

      return config
    },
    optimizeFonts: true,
  })
