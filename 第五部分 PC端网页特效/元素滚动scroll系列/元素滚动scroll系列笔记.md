## 元素scroll系统属性
scroll翻译过来就是滚动，我们使用scroll系列的相关属性，可以动态地得到该元素的大小和滚动距离等。
- element.scrollTop  返回被卷去的上侧的距离，返回数值，不带单位px；
- element.scrollLeft 返回被卷去的左侧距离，返回数值，不带单位px；
- element.scrollWidth  返回自身实际的宽度，不含边框，返回数值, 不带单位px；

- element.scrollHeight  返回自身实际的高度，不含边框，返回数值, 不带单位px；
**element.scrollWidth和scrollHeight元素的实际大小，会计算超过线框的内容的高度和宽度**

### onscroll事件（scroll事件）
onscroll事件（scroll事件），只要拖动滚动条就会触发事件。
```html
    <div>
    </div>
    <script>
        // scroll系列
        var div=document.querySelector('div');
        console.log(div.scrollHeight);
      //  console.log(div.clientHeight);
      console.log(div.scrollTop);

      // scroll滚动事件，当我们滚动条发生变化就会触发的事件
      div.addEventListener('scroll',function(){
          console.log(div.scrollTop);
      })
    </script>
```

### 页面被卷去的头部：window.pageYOffset
页面被卷去的头部：可以通过window.pageYOffset获得
页面被卷去的左侧：window.pageXOffset
window.pageYOffset和window.pageXOffset需要IE9以上才支持。

## mouseover和mouseenter事件的区别
mouseover事件，鼠标经过自身盒子时会触发，经过子盒子时还会触发，因为冒泡机制；
mouseenter事件，只有鼠标经过自身盒子时会触发，经过子盒子时不会再次触发了,mouseenter不会冒泡；
mouseleave事件，也不会冒泡。

##  滚动窗口至文档中的特定位置
window.scroll(x,y)
```js
  // 3.当我们点击了返回顶部模块，就让窗口滚动到页面的最上方
        span.addEventListener('click',function(){
            window.scroll(0,0);
        })

```
