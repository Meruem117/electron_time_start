// const {} = require('electron')
// const fs = require('fs')
const menu = require('./menu')
const task = require('./task')
const notification = require('./notification')

// 读取文件
// function fileReader() {
//     const btn = this.document.querySelector('#btn')
//     const content = this.document.querySelector('#content')
//     btn.onclick = () => {
//         fs.readFile('../src/asserts/docs/demo.txt', (err, data) => {
//             content.innerHTML = data
//         })
//     }
// }

module.exports = {
    menu,
    task,
    notification,
    // fileReader
}