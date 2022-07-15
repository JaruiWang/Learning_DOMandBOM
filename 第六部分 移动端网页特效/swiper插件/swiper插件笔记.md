## swiper轮播图插件的使用
中文官网地址：https://swiper.com.cn/
1.引入插件相关的文件
```html
<head>
    <!-- 引入swiper css文件 -->
    <link rel="stylesheet" href="./swiper-bundle.min.css">
    <!-- 引入swiper js文件 -->
    <script src="./swiper-bundle.min.js"></script>
</head>
```

2.添加HTML内容。Swiper7的默认容器是'.swiper'，Swiper6之前是'.swiper-container'。
```html

<div class="swiper">
    <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    
    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
</div>
<!-- 导航等组件可以放在Swiper容器之外 -->

```

3. 你可能想要给Swiper定义一个大小，当然不要也行。
```css
    .swiper {
        width: 600px;
        height: 300px;
    }  
```

4. 初始化Swiper。
```html
<script>        
  var mySwiper = new Swiper ('.swiper', {
    direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })        
  </script>

```

5. 已经可以正常使用了
如果作为CommonJs 或ES 模块引入
```js
//CommonJs
var Swiper = require('swiper');    
var mySwiper = new Swiper('.swiper', { /* ... */ });

//ES
import Swiper from 'swiper';    
var mySwiper = new Swiper('.swiper', { /* ... */ });

```
