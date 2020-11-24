console.log('NODE_ENV', process.env.NODE_ENV)
const config = require('config')

let nextConfig

if (process.env.DEV_SERVER) {
    nextConfig = {
        publicRuntimeConfig: config,
        distDir: 'build',
        devIndicators: {
            autoPrerender: false,
        },
    }
} else {
    nextConfig = {
        publicRuntimeConfig: config,
        distDir: 'build',
        assetPrefix: './',
        devIndicators: {
            autoPrerender: false,
        },
    }
}

module.exports = nextConfig
