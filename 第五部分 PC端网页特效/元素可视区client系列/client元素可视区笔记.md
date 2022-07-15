## client系列的相关属性
使用client系列的相关属性来获取元素可视区的相关信息。
通过client系统的相关属性可以动态的得到该元素的边框大小，元素大小等。

element.clientTop  返回元素上边框的大小
element.clientleft  返回元素左边框的大小
element.clientWidth  返回自身包括padding，内容区的宽度，不包含边框，返回数值不带单位px。
element.clientHeight  返回自身包括padding，内容区的高度，不包含边框，返回数值不带单位px。

## 立即执行函数
```html js
  <script>
    // 1.立即执行函数，不需要调用，立马能够自己执行的函数
    function fn(){
        console.log(1);
    }
    // 一般的函数需要调用才能执行
    fn();

    //2.立即执行函数的写法 两者写法
    // (function(){})() 或者 (function(){}());

    // 第一种写法 (function(){})()
    (function sum1(a,b) {
        console.log(a,b);
    })(5,3);  //第二个小括号可以看作是调用函数

    // 第二种写法  (function(){}());
    (function  sum(a,b){
        console.log(a,b);
        }(7,9));

    // 3.立即执行函数最大的作用是 独立创建了一个作用域
    // 里面的所以变量都是局部变量，不会有命名冲突的情况，函数执行完变量就释放了
    </script>
```