       // 简单动画函数封装 obj目标对象 target 目标位置
    function animate(obj,target,callback){
    clearInterval(obj.timer1);
    obj.timer1=window.setInterval(function(){
        //  目标值target，初始值是obj.offsetLeft
        //  每一步的步长是(target-obj.offsetLeft)/10,要取整step=Math.ceil((target-obj.offsetLeft)/10)
    var step_a=(target-obj.offsetLeft)/10;
    if(step_a>=0){
        var step=Math.ceil(step_a);
    }else{
        var step=Math.floor(step_a);
    }

    // console.log('程序还在运动',obj.offsetLeft,target,step);
    obj.style.left=obj.offsetLeft+step+'px';
    if(obj.offsetLeft==target) {
    clearInterval(obj.timer1);
    if(callback){
        callback();
    }
    }           
    },10);
    }