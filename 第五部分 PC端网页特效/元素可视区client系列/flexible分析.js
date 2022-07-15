(function flexible(window,document){
    //  获取html根元素
    var docEl=document.documentElement;
    // dpr 物流像素比  PC端的物理像素比是1 ，移动端的物理像素比是2。
    var dpr=window.devicePixelRatio || 1 ;
     console.log(dpr);

    // adjust body font size
    function setBodyFontSize(){
        if(document.body){
            document.body.style.fontSize=(12*dpr)+'px';
        }else{
            document.addEventListener('DOMContentLoaded',setBodyFontSize)
        }
    }
    setBodyFontSize();

    // set 1rem=viewWidth/10  设置我们html元素的文字大小
    function setRemUnit(){
        var rem=docEl.clientWidth/10;
        docEl.style.fontSize=rem+'px';
    }
    setRemUnit();

    // reset rem unit on page resize 当我们的页面尺寸大小发生变化时，要重新设置一下rem大小
    window.addEventListener('resize',setRemUnit);

    // pageshow 是我们重新加载页面触发的事件
    window.addEventListener('pageshow',function(e){
        // e.persisted返回的是true ，就是表面这个页面是从缓存中读取出来的
        if(e.persisted){
            setRemUnit();
        }
    })
    

}(window,document))


