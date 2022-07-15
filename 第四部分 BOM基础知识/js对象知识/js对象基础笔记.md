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
