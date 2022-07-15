window.addEventListener('load',function(){
    //1.获取元素
    var focus=this.document.querySelector('.focus');
    var ul=focus.children[0];
    var ol=focus.children[1];
    // 获得focus的宽度
    var w=focus.offsetWidth;

    // 利用flag判断手指触碰后是否有移动
    var flag=true;
    
    // 2.利用定时器自动播放轮播图
    var index=0;
    var timer=this.setInterval(function(){
        index++;
        var tranX=-index*w;
        ul.style.transition='all.3s';
        ul.style.transform='translateX('+tranX+'px)';
    },2000);
    // 等着我们过渡完成之后，再去判断，监听过度完成的事件 transitionend
    ul.addEventListener('transitionend',function(){
        // console.log(1);
        if(index>=3){
            index=0;
            tranX=-index*w;
            ul.style.transition='none';
            ul.style.transform='translateX('+tranX+'px)';
        }else if(index<0){
            index=2;
            tranX=-index*w;
            ul.style.transition='none';
            ul.style.transform='translateX('+tranX+'px)';
        }

        // 3. 小圆点跟随变化
        // 把ol里面li带有current类型的选出来去掉类名 classList.remove
        // 让当前索引号 的小li 加上 current, classList.add
        ol.querySelector('.current').classList.remove('current');
        ol.children[index].classList.add('current');
    })

    // 4.手指滑动轮播图
    // (1)触摸元素touchstart:获取手指的初始坐标
    var startX=0;
    var moveX=0;  //移动距离
    ul.addEventListener('touchstart',function(e){
        startX=e.targetTouches[0].pageX;
        // console.log(startX);
        //手指摸上去的时候停止计时器
        clearInterval(timer);
    });
    // （2）移动手指touchmove: 计算手指的滑动距离
    ul.addEventListener('touchmove',function(e){
        flag=true; //确认手指已经移动了
        // 计算移动距离
        moveX=e.targetTouches[0].pageX -startX;
        console.log(moveX);
        // 移动盒子 盒子原来的位置+手指移动距离
        var tranX=-index*w +moveX;
        ul.style.transition='none';
        ul.style.transform='translateX('+tranX+'px)';

        e.preventDefault(); //阻止滚动屏幕的行为
    });

    // 手指离开 根据移动距离去判断回弹还是播放上一张下一张
    ul.addEventListener('touchend',function(e){
        if(flag){
            //(1) 如果移动距离大于50像素，我们就播放上一张或者下一张
            if(Math.abs(moveX)>50){
            // 如果是右滑，就是播放上一张，moveX是正值
            if(moveX>0){
                index--
            }else{
            // 如果是左滑，就是播放下一张，moveX是负值
                index++
            }
            var tranX=-index*w;
            ul.style.transition='all .3s';
            ul.style.transform='translateX('+tranX+'px)';
             }else{
            // (2) 如果移动距离小于50像素就回弹
            var tranX=-index*w;
            ul.style.transition='all .3s';
            ul.style.transform='translateX('+tranX+'px)';
            }
        }        
           // 手指离开后恢复定时器
           clearInterval(timer);
           timer=setInterval(function(){
            index++;
            var tranX=-index*w;
            ul.style.transition='all.3s';
            ul.style.transform='translateX('+tranX+'px)';
        },2000);
    })
});