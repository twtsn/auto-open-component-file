# 点击浏览器dom元素，自动打开对应组件文件

##实现原理
```
通过自定义的vue-loader修改uve文件源码，注入文件路径和打开事件，通过fetch发送请求到node服务打开文件，
后台启动一个node server,用来执行cmd命令，打开文件
vue.config.js：配置自定义vue-loader文件
file-server: 存放node server和vue-loader文件
```
##如何配置
![image](https://github.com/twtsn/auto-open-component-file/tree/main/public/demo.gif)

### 除了你的项目程序外，需要再启动一个file-server 的node服务
###1.复制file-server到你的项目根目录
```
打开env.js，配置启动端口和打开文件的程序路径
module.exports = {
    port: 3000, // 后台服务端口，auto-open-vue.js中的url端口需要和这里对应
    exePath: "D:\\Program Files\\Microsoft VS Code\\Code.exe"
}
cd file-server
npm install
npm run start
```
###2.如果是vue-cli创建的项目，添加vue.config.js，设置自定义路由文件
```
const path = require('path');
module.exports = {
    configureWebpack: (config) => {
        config.module.rules.push({
            test: /\.vue$/,
            use: [{
                loader: './file-server/auto-open-vue.js',
                options: {}
            }]
        })
    },
}
```
###3.启动项目

