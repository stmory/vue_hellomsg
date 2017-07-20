# hellomsg

# 一个简单的vue弹出框组件
  提供了普通弹出框，延时自动关闭弹出框，带取消按钮的弹出框等几种常见的弹出框…………
# 截图如下
<img src="https://github.com/stmory/vue_hellomsg/blob/master/screenShot/GIF.gif" />


# 安装
```bash
$ npm install vue-hello-msg --save
```

# 使用
在组件中引入：
```JavaScript

import HelloMsg from 'vue-hello-msg';

```
然后就可以在组件中使用啦

基本用法：

```JavaScript

HelloMsg('hello!'，'good boy','true')

```

带promise的提示框：

```JavaScript

HelloMsg('hello!').then(function(a){
  conlose.log(a)
}).catch(function(a){
  conlose.log(a)
})

```

设置属性的提示框：
```JavaScript

HelloMsg({title:'hello',autoClose:'true',showConfirm:'false'})

```


# 设置
| 属性 | 描述 |
| ----- | ----- |
| title | HelloMsg的标题文字（默认为空） |
| msg | HelloMsg的内容文字（默认为空） |
| showPicture | 显示图片‘true’为√，‘false’为×，默认不显示 |
| showCancel | ‘true’or‘false’ 是否显示取消按钮，默认不显示 |
| showConfirm | ‘true’or‘false’是否显示确认按钮，默认显示 |
| autoClose | ‘true’or‘false’是否自动关闭，默认不关闭 |
| autoCloseTime | 设置自动关闭时间，默认2000毫秒 |
