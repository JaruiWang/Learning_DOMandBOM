## 什么是BOM
BOM（brower object model）即浏览器对象模型，它提供独立于内容而与浏览器窗口进行交互的对象。其核心的对象是window。
BOM由一些列相关的对象构成，并且每个对象都提供了很多的方法和属性。
BOM缺乏标准，JavaScript语法的标准化组织是ECMA，DON的标准化组织是W3C，BOM最初是Netscape网景浏览器标准的一部分，各个浏览器支持的情况不一样。

### BOM和DOM的区别
DOM是文档对象模型，DOM的顶级对象是document，DOM主要学习的是操作页面元素；
BOM是浏览器对象模型，把整个浏览器看成一个对象，BOM的顶级对象是window,
BOM学习的是浏览器窗口交互的一些对象，例如页面的前进，后退，浏览器的尺寸变化。

### BOM的构成
BOM比DOM更大，它包含DOM。
window对象包含document,location,navigation,screen,history。

### window对象
window对象是浏览器的顶级对象
1. 它是js访问浏览器的一个接口；
2. 它是一个全局对象，定义在全局作用域中的变量，函数都会变成window对象的属性和方法。
window.alert()  window.prompt() 调用时都是可以省略window的
window下的一个特俗属性window.name，所以定义全局变量时不要使用var name

## 页面加载事件
window对象的load事件，  document对象的DOMContentLoaded事件
```js
    window.addEventListener('load',function(){
        var btn=document.querySelector('button');
        btn.addEventListener('click',function(){
            alert('window.load事件');
        })
        
    })

    //load触发事件，需要等页面的全部内容加载完毕，包括页面的dom元素，图片，flash和CSS等。
    // DOMContentLoaded事件触发时，仅当DOM加载完成，不包括样式表，图片和flash等。
    // DOMContentLoaded事件触发会比load更快。
    window.addEventListener('load',function(){
        alert('window.load事件123');
    })

    // DOMContentLoaded事件触发时，仅当DOM加载完成，不包括样式表，图片和flash等。
    // 如果页面的图片非常多，用户用onload触发可能需要较长的时间，影响交互效果，这时用DOMContentLoaded事件比较合适。
    // IE9浏览器以上才支持。
    document.addEventListener('DOMContentLoaded',function(){
        alert("DOMContentLoaded事件")
    })
```

## 调整窗口大小事件
resize事件
window.onresize是调整窗口大小加载事件，当触发时就调用的处理函数。
传统注册方式：window.onresize=function(){}
推荐的注册方式： window.addEventListener('resize',function(){})
我们经常利用这个事件完成响应式布局。使用window.innerWidth获取浏览器可视窗口的宽度。
```html js
    <div></div>
    <script>
        //代码的功能，当页面的window.innerWidth小于800px时，div消失；大于等于800px时，div出现。
        var div=document.querySelector('div');
        //window.onresize=function(){}
        window.addEventListener('resize',function(){
        console.log('变化了');
        console.log(window.innerWidth);
        if(window.innerWidth<=800){
            div.style.display='none';
        }else{
            div.style.display='block';
        }
        //    console.log(window.innerHeight);
        })
    </script>
```

## 定时器setTimeout()
window.setTimeout(调用函数,[延迟的毫秒数]);
setTimeout()方法用于设置一个定时器，该定时器在定时器到期后调用函数。
setTimeout()这个调用函数我们称之为回调函数callback
```js
    //1.函数在外面定义，setTimeout()里面写函数名
    function test(){
        console.log('你好');
    }
    //window一般不写
    // window.setTimeout(test,3000);
    // setTimeout(test,2000);

    //2.在setTimeout()里面直接定义函数
    setTimeout(function(){
        console.log("在里面定义函数")
    },5000)

    //用标识符区别不同的定时器
    var timer1=setTimeout(test,2000);
    var timer2=setTimeout(test,5000);
```

### 停止定时器setTimeout
采用window.clearTimeout(timerID)
clearTimeout()方法可以取消先前通过setTimeout()建立的定时器。
timerID就是定时器的标识符

## 定时器setInterval()
window.setInterval(回调函数，[间隔的毫秒数]);
setInterval()方法重复调用一个函数，每隔这个时间，就去调用这个函数。
```js
    setInterval(function(){
        console.log("abc");
    },1000)
```
### clearInterval()清除定时器
```js
var timer01=setInterval(timerfn,1000);
clearInterval(timer01);
```

## this的指向问题
1. 全局作用域或者普通函数中的this指向全局对象window
定时器调用函数中的this也是指向window。
```html js
  <script>
    //1.全局作用域下，或者普通函数fn()中，this都是指向window对象
       console.log(this);
    // 普通函数fn()，也是window的对象的一个方法。
        function fn(){
            console.log(this);
        }
        window.fn();

    // 定时器中调用的函数，this也是指向window.
    // 因为定时器setTimeout是window对象的一个方法。
    window.setTimeout(function(){
        console.log(this);
    },1000)
  </script>


```
2. 方法调用中谁调用this指向谁
```js
    // 2. 方法调用中谁调用this指向调用了方法的对象
    var o={
        sayHi:function(){
            console.log(this);
        }
    }
    o.sayHi();
    // 按钮调用函数中的this，指向按钮
    var btn=document.querySelector('button');
    btn.onclick=function(){
        console.log("按钮点击调用");
        console.log(this);
    }

```

3. 构造函数中的this指向构造函数的实例
```js
    // 3.构造函数中的this指向构造函数的实例
    function Fun(){
        console.log(this);  //构造函数中的this指向fun实例对象
    }
    var fun=new Fun();
```


## JavaScript对象
在JavaScript中，对象是一组无序的相关属性和方法的集合。所有的事物都是对象，例如字符串，函数，数值，数组。
创建对象的三种方法：
### 1. 利用字面量创建对象
1.定义对象（1）里面的属性或方法我们采用键值对的形式，键（属性名）：值（属性值）
(2)多个属性和方法中间用逗号隔开的
(3)方法冒号后面跟的是一个匿名函数

2.使用对象
(1)调用对象的属性，我们采用 对象名.属性名
调用对象还有一种方法  对象名['属性名']
(2)调用对象的方法，我们采用 对象名.方法名()
```html js
    <script>
    // 利用字面量创建对象
    var aa={};  //创建了一个空的对象 
     //   console.log(aa);
     // 1.定义对象（1）里面的属性或方法我们采用键值对的形式，键（属性名）：值（属性值）
     // (2)多个属性和方法中间用逗号隔开的
     // (3)方法冒号后面跟的是一个匿名函数
     var obj={
         uname:"张山",
         age:18,
         sex:'男',
         sayHi:function(){
             console.log('hi~');
         },
         sayHi2:function(){
             console.log('hi2~');
         },
     }
     // 2.使用对象
     // (1)调用对象的属性，我们采用 对象名.属性名
     console.log(obj.uname);

     // 调用对象还有一种方法  对象名['属性名']
     console.log(obj['age']);
    //(2) 调用对象的方法，我们采用 对象名.方法名()
     obj.sayHi();
     obj.sayHi2();
    </script>
```

### 2. 利用new Object创建对象
 var obj=new Object() 创建一个新的对象
 我们利用等号 = 赋值的方法 添加对象和函数
 每个属性和方法之间 用分号 结束
```html js
    <script>
        // 利用 new Object 创建对象
        var obj=new Object(); //创建一个新的对象
        obj.uname='张三';
        obj.age=18;
        obj.sex='男';
        obj.sayHi=function(){
            console.log('利用 new Object 创建对象,hi~');
        }
        // (1) 我们利用等号 = 赋值的方法 添加对象和函数
        // (2) 每个属性和方法之间 用分号 结束
        console.log(obj.uname);
        obj.sayHi();
    </script>
```

### 3. 利用构造函数创建对象
利用构造函数创建对象,构造函数泛指某一大类，类似于C++，Python里面的类class。
构造函数的语法格式
function 构造函数名(){
    this.属性=值;
    this.方法=function(){}
}
new 构造函数名();
```html js
    <script>
        function Star(uname,age,sex){
            this.name=uname;
            this.age=age;
            this.sex=sex;
            this.sing=function(song){
                console.log(song);
            }
        }
        var ldh=new Star('刘德华',19,'男');
        // new 构造函数Star(),调用函数返回的是一个对象。
        console.log(typeof ldh);
        console.log(ldh.sex);
        ldh.sing("冰雨");
        // 构造函数的首字母要大写，是一种规范，不是语法

        var zxy=new Star('张学友',20,'女');
        console.log(zxy.name);
    </script>
```

## 使用for in 遍历我们的对象
```html js
    <script>
        var obj={
            name:'pink老师',
            age:18,
            sex:'男'
        }
        // 使用for in 遍历我们的对象
        // for(变量 in 对象){}

        for(var k in obj){
            console.log(k); //k变量 输出的 属性名，字符串类型
            console.log(typeof k);
            console.log(obj[k]); //obj[k] 得到的是 属性值
        }
    </script>
```

## JS执行机制 同步和异步
- 同步：前一个任务执行完再执行后一个任务，程序的执行顺序和代码中任务的排列顺序是一直的。
同步任务都在主线程上执行，形成一个执行栈。

异步：你在做一件事时，同时还可以去处理其他事情。
js的异步是通过回调函数实现的。
一般而言，异步任务有以下三种类型：
1. 普通时间，如click，resize;
2. 资源加载，如load,error；
3. 定时器，包括setInterval,setTimeout。
异步任务相关的回调函数添加到任务队列中（任务队列也称消息队列）。

他们的本质区别是：这条流水线上的各个流程的执行顺序不同。
运行机制：
当**1主线程的执行栈**执行过程中遇到有回调函数时，会送入**2异步进程**来处理，
**2异步进程**会监控这些回调函数是否触发，例如是否发送鼠标点击事件，键盘按键按下事件，
还有定时器时间到触发事件，**2异步进程**会把触发的回调函数送入**3任务队列**中。
当**1主线程的执行栈**执行完成时，会去**3任务队列**中读取需要运行的程序，
**1主线程的执行栈**执行完成后又会去**3任务队列**中读取需要运行的程序，不断循环进行，
也称为事件循环（event loop）。

## URL基础知识
URL：统一资源定位符（Uniform Resource Locator,URL）
是互联网上标准资源的地址。
互联网上每一个文件都有一个唯一的URL，它包含的信息指出文件的位置，以及浏览器应该怎么处理它。
URL的一般语法格式为：
protocol://host[:post]/path/[?query]#fragment
http://www.baidu.com/index.html?name=andy&age=18#link
组成解释：
protocol，通信协议，常用的http,ftp,matio
host，主机（域名）www.baidu.com
port: 端口号，可选，省略时使用的是默认端口，如http的默认端口是80.
path,路径，由零个或多个‘/’符号隔开的字符串，一般用来表示主机上的一个目录或文件地址。如/index.html。
query，参数，以键值对的形式，通过&符号分隔开。
fragment，片段 #后面内容，常见于链接锚点。


## location对象的属性
- location.href  获取或者设置整个URL https://www.bilibili.com/video/BV1k4411w7sV?p=91
- location.host  返回主机域名  www.bilibili.com
- location.port  返回端口号  一般省略，返回空字符串
- location.pathname 返回路径 /video/BV1k4411w7sV
- location.search   返回参数  ?p=91
- location.hash     返回链接的锚点，如果没有就返回空字符串。

## location对象的方法
- location.assign() 跟href一样，可以跳转页面（也成为重定向页面），记录历史的，可以实现后退。
- location.replace() 替换当前页面，不记录历史，所示不能后退页面。
- location.reload() 重新加载页面，相当于刷新按钮，或者F5。
```html js
    <button>跳转</button>
    <script>
        var btn=document.querySelector('button');
        btn.addEventListener('click',function(){
        //assign记录历史，所以可以实现后退功能
        //  location.assign('http://www.jd.com');

        //replace不记录历史，所以不可以实现后退功能
        //location.replace('http://www.itcast.cn');
        location.reload(); // 重新加载页面，刷新相当于F5，会从浏览器缓存中取数据
        location.reload(true); // 强制刷新，相当于Ctrl+F5,从服务器中重新取数据
    })
    </script>
```

## navigator对象
navigator对象包含有关浏览器的信息，
常用的属性有userAgent,该属性可以返回由客户端发送服务器的user-agent头部的值。








