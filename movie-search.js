const http = require('http')
const request = require('request')
const cheerio = require('cheerio')
const input = process.argv[2]

const req = http.request({
    hostname: 'imdb.com',
    path: '/find?ref_=nv_sr_fn&q=' + input + '&s=all',
    port: 80
}, (res) => {
    let str = ''
    res.on('data', chunk => { str += chunk })
    res.on('end', () => { console.log(str) })
    const $body = cheerio.load(str)
    console.log($body)
})

