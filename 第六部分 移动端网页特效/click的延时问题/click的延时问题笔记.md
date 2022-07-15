## 移动click延时问题的解决方案
移动端click事件会有300ms的延时
- 解决方案一 在meta元素中加入user-scalable=no。
```html
    <meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no">
```

- 解决方案二 
自己定义函数，详细见图片
但是页面上每一个元素要去除延时问题时，都需要调用一下该函数，使用比较麻烦。

- 解决方案三（推荐使用）
使用fastclick插件，
只需要调用一次，页面上所有的元素都可以去除延时的问题。


