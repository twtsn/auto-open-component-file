# 点击浏览器dom元素，自动打开对应组件文件
```
实现原理：通过自定义的vue-loader修改源码，在dom上添加文件路径和fetch事件
后台启动一个node server,用来执行cmd命令，打开文件
vue.config.js：配置自定义vue-loader文件
file-server: 存放node server和vue-loader文件
```
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```