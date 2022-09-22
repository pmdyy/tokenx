const path = require('path')
const loaderUtils = require('loader-utils')
const withFonts = require('next-fonts')
const withPreact = require('next-plugin-preact');

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

module.exports = withPreact(
)
