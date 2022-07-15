window.addEventListener('load',function(){
    //1.获取元素
    var cloud=this.document.querySelector('.cloud');
    var c_nav=this.document.querySelector('.c_nav');
    var lis=c_nav.querySelectorAll('li');

    // 这个current作为筋斗云的起始位置
    var current=0;
    //2. 给所有的小li绑定事件
    for(var i=0;i<lis.length;i++){
        lis[i].addEventListener('mouseenter',function(){
            // alert(12);
            animate(cloud,this.offsetLeft);
        })
    }

    for(var i=0;i<lis.length;i++){
        lis[i].addEventListener('mouseleave',function(){
            // alert(12);
            animate(cloud,current);
        })
    }

    for(var i=0;i<lis.length;i++){
        lis[i].addEventListener('click',function(){
            current=this.offsetLeft;
        })
    }
})