window.addEventListener('load',function(){
    // this.alert('1');
    var focus=this.document.querySelector('.focus');
    var focusWidth=focus.offsetWidth;
    var ul=focus.querySelector('ul');
    var ol_circle=this.document.querySelector('.circle');
    var arrowl=this.document.querySelector('.arrow-l');
    var arrowr=this.document.querySelector('.arrow-r');

    // 声明一个记录小圆点状态的变量
    var circle_num=0;
    // 声明一个记录变量
    var current_num=0;

    // 功能1.鼠标经过轮播图模块，左右按钮显示，离开则隐藏左右按钮；
    focus.addEventListener('mouseenter',function(){
        arrowl.style.display='block';
        arrowr.style.display='block';
        console.log("鼠标来了");
    })

    focus.addEventListener('mouseleave',function(){
        arrowl.style.display='none';
        arrowr.style.display='none';
    })

    // 动态生成小圆圈
    // var images_list=ul.querySelectorAll('li');
    console.log(ul.children.length);
    for(var i=0;i<ul.children.length;i++){
        var li=this.document.createElement('li');
        li.setAttribute("index_num",i);
        ol_circle.appendChild(li);
    }
    // 把ol里面的第一个小li设置类名为current
    ol_circle.children[0].className='current';

    // 功能4.点击小圆圈，被点击的小圆圈样式发生变化
    for(var i=0;i<ol_circle.children.length;i++){
        ol_circle.children[i].addEventListener('click',function(){
            //先清除所有原点的样式
            for(var i=0;i<ol_circle.children.length;i++){
                ol_circle.children[i].className='';
            }
            //再设置我们点击的圆点
            this.className='current';
            // console.log(this.getAttribute("index_num"));
            // 调用animate函数，可以播放相应的图片；
            // ul的移动距离，小圆圈的索引号 乘以 图片的宽度

            circle_num=parseInt(this.getAttribute("index_num"));
            current_num=parseInt(this.getAttribute("index_num"));
  
            animate(ul,-focusWidth*this.getAttribute("index_num"));
        })
    }

    //功能2.点击右侧按钮一次，图片往左播放一张，以此类推，左侧按钮同理；

    // 点击右侧按钮
    // 克隆第一张图片li放在ul最后面,这段代码要放在前面动态生成小圆圈代码的后面
    var firstpic_clone=ul.children[0].cloneNode(true);
    ul.appendChild(firstpic_clone);
    var flag=true;
    arrowr.addEventListener('click',function(){
        if(flag){
            flag=false; //关闭节流阀。

            if(current_num== ul.children.length-1){
                current_num=0;
                ul.style.left=0+'px';
            }
            current_num+=1;
            circle_num+=1;
            // console.log(current_num);
            animate(ul,-focusWidth*current_num,function(){
                flag=true;
            });
            if (circle_num==ul.children.length-1){
                circle_num=0;
            }
            
            circleChange();
        }
    })



    // 点击左侧按钮
    arrowl.addEventListener('click',function(){
        if(flag){
            flag=false;//关闭节流阀。
            if(current_num==0){
                current_num=ul.children.length-1;
                circle_num=ul.children.length-1;
                ul.style.left=-focusWidth*current_num+'px';
                // console.log(ul.children.length);
            }
            current_num--;
            circle_num--;
            // console.log(current_num);
            animate(ul,-focusWidth*current_num,function(){
                flag=true;
            });
    
            circleChange();
        }

    })

    function circleChange(){
        //先清除所有原点的样式
        for(var i=0;i<ol_circle.children.length;i++){
            ol_circle.children[i].className='';
        }
        // 留下当前的小圆圈的current类名
        ol_circle.children[circle_num].className='current';
    }

    // 5.鼠标不经过轮播图，轮播图也会自动播放图片；
    var timer=this.setInterval(function(){
        arrowr.click();
    },2000)

    // 6.鼠标经过轮播图模块，自动播放停止。
    focus.addEventListener('mouseenter',function(){
        clearInterval(timer);
        // 清除定时器变量
        timer=null;
    })

    focus.addEventListener('mouseleave',function(){
        // 不要用var再次定义定时器，只需要赋值即可
        timer=setInterval(function(){
            arrowr.click();
        },2000)
    })

})