// next.config.js
const withCSS = require('@zeit/next-css')
const withLess = require('@zeit/next-less')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

module.exports = withMDX(withLess(withCSS({
  // useFileSystemPublicRoutes: false,
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
})))