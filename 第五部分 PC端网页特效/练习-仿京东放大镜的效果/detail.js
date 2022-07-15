window.addEventListener('load',function(){
            // 这个案例分为三个模块
        // 1.鼠标经过小图片盒子时，遮挡层和大图片显示，离开则隐藏
        //  2.遮挡层跟随鼠标移动；
        //  3.移动遮挡层，大图片跟随鼠标移动。
        var preview=document.querySelector('.preview');
        var mask=document.querySelector('.mask');
        var big=document.querySelector(".big");
        var big_img=big.querySelector("img");
        console.log(big_img);

        preview.addEventListener('mouseover',function(e){
            mask.style.display='block';
            big.style.display='block';         
        })

        preview.addEventListener('mouseout',function(){
            mask.style.display='none';
            big.style.display='none';
        })

        preview.addEventListener('mousemove',function(e){
            //（1）先计算鼠标在盒子内的坐标
            var x=e.pageX-this.offsetLeft;
            var y=e.pageY-this.offsetTop;
            // console.log(x,y);
            //(2)减去遮挡层宽度和高度的一半
            var maskX=x-mask.offsetWidth*0.5;
            var maskY=y-mask.offsetHeight*0.5;
            //遮挡层的最大移动距离
             var  markMax_x=preview.offsetWidth-mask.offsetWidth;
             var  markMax_y=preview.offsetHeight-mask.offsetHeight;
            if(maskX<=0){
                maskX=0;
            }else if(maskX>=markMax_x){
                maskX=markMax_x;
            }

            if(maskY<=0){
                maskY=0;
            }else if(maskY>=markMax_y){
                maskY=markMax_y;
            }
            
            mask.style.left=maskX+'px';
            mask.style.top=maskY+'px';

            // 求大图片的移动距离的公式
            // 遮挡层移动距离/遮挡层最大的移动距离=大图片移动距离/大图片最大的移动距离。
            // 大图片移动距离=大图片最大的移动距离*遮挡层移动距离/遮挡层最大的移动距离；
            var bigMax_x=big_img.offsetWidth-big.offsetWidth;
            var bigMax_y=big_img.offsetHeight-big.offsetHeight;

            var  big_x=maskX*markMax_x/bigMax_x;
            var  big_y=maskY*markMax_y/bigMax_y;
            console.log(big_x,big_y);
            big_img.style.left=-big_x+'px';
            big_img.style.top=-big_y+'px';
        })

})