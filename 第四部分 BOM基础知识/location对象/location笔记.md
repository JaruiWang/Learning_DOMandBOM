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

## location对象
### location对象的属性 
- **location.href** 获取或者设置整个URL href: "https://www.jd.com/?cu=true&name=aq"
- location.host  返回主机（域名） host: "www.jd.com"
- location.port  返回端口号  port: ""
- location.pathname   返回路劲 pathname: "/"
- **location.search**   返回参数  search: "?cu=true&name=aq"
- location.hash   返回片段 #后面内容 常见于链接 锚点
- location.protocol  协议名  protocol: "https:"



