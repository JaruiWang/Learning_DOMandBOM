## offset偏移量
offset翻译过来就是偏移量，我们使用offset相关属性可以动态获得该元素的位置偏移量
- 获得元素距离带有定位父元素的位置
- 获得元素自身的大小（宽度和高度）
注意：返回的数值都不带单位px
(1)element.offsetTop 返回元素(元素的border)相对带有定位父元素上方的偏移
(2)element.offsetLeft 返回元素(元素的border)相对带有定位父元素上左边框的偏移
```html js
    <div class="father">
        <div class="son">
        </div>
    </div>
    <script>
        // offset 系列
        var father=document.querySelector('.father');
        var son=document.querySelector('.son');
        // 可以得到元素的偏移位置，返回的不带单位的数值
        console.log(father.offsetTop);
        console.log(father.offsetLeft);

        // 它以带有定位的父亲为准，如果父元素没有定位，则以body为准。
        console.log("son的offsetLeft "+son.offsetLeft);
    </script>
```

（3）element.offsetWidth可以得到元素的宽度，包括padding,border和内容区的宽度。
（4）element.offsetHeight可以得到元素的高度，包括padding,border和内容区的高度。
（5）element.offsetParent返回该元素带有定位的父级元素，如果父级元素没有定位，则返回body。
```html js
   <div class="father">
        <div class="son">
        </div>
    </div>
    <script>
        // offset 系列
        var father=document.querySelector('.father');
        var son=document.querySelector('.son');
        // offsetWidth可以得到元素的宽度，包括padding,border和内容区的宽度。
        console.log(father.offsetWidth);
        // offsetHeight可以得到元素的高度，包括padding,border和内容区的高度。
        console.log(father.offsetHeight);
        console.log(son.offsetWidth);
        console.log(son.offsetHeight);
        //offsetParent返回该元素带有定位的父级元素，如果父级元素没有定位，则返回body。
        console.log(son.offsetParent);
    </script>

```

## offset和style的区别
- offset可以得到任意样式表中的样式值;
- offset系列获得的数值是没有单位的;
- offsetWidth包含padding+border+width;
- offsetWidth等属性是只读属性，只能获取不能赋值;
**所以，我们想要获取元素大小位置，用offset更合适**

- style只能得到行内样式表中的样式值;
- style.width获得的是带有单位的字符串;
- style.width获得不包含padding和border的值;
- style.width是可读写属性，可以获取也可以赋值;
**所以，我们想要给元素更改值，则需要用style改变**