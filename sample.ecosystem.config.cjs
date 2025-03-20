/**
* Sample configuration to run inside pm2
**/
module.exports = {
    apps: [
        {
            name: 'kevinorge.com',
            port: '3000',
            exec_mode: 'cluster',
            instances: '1',
            script: './.output/server/index.mjs'
        }
    ]
}