
const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: false,//解决eslint报错
    // pluginOptions: { // 第三方插件配置
    //     'style-resources-loader': {
    //         preProcessor: 'less',
    //         patterns: [path.resolve(__dirname, './src/assets/css/base.less')] // less所在文件路径
    //     }
    // }
}