window.onload = function(){
	// 头部搜素
	search();
	// 秒杀
	secondKill();
	// 轮播图调用
	scrollPic();
}
// 头部搜索方法
function search(){
	var search = document.querySelector('.jd_header_box');
	var banner = document.querySelector('.jd_banner');
	var height = banner.offdetHeight;
	window.onscroll = function(){
		var top = document.body.srcollTop;
		if(top>height){
			search.style.background = 'rgba(201,21,35,0.85)';
		}else{
			var op = top/height*0.85;
			search.style.background = 'rgba(201,21,35,'+op+')';
		}
	}
}
// 秒杀
function secondKill(){
	var parentTime = document.querySelector('.sk_time');
    /*span时间*/
    var timeList = parentTime.getElementsByClassName('number');
    // console.log(timeList.length);
	var times = 4*60*60;
	var timer = null;
	timer = setInterval(function(){
		times--;
		// 小时
		var h =Math.floor(times/3600);
		// 分钟
		var m = Math.floor(times/60%60);
		// 秒
		var s = times%60;

		timeList[0].innerHTML = h>10?Math.floor(h/10):0;
        timeList[1].innerHTML = h%10;

        timeList[2].innerHTML = m>10?Math.floor(m/10):0;
        timeList[3].innerHTML = m%10;

        timeList[4].innerHTML = s>10?Math.floor(s/10):0;
        timeList[5].innerHTML = s%10;
        if(times<=0){
        	clearInterval(timer);
        }
	},1000);
}

// 轮播图
function scrollPic(){
	var banner = document.querySelector('.jd_banner');
	var imgBox = banner.getElementsByTagName('ul')[0];
	var pointBox = banner.getElementsByTagName('ul')[1];
	var pointList = pointBox.children;
	var width = banner.offsetWidth;
	var index = 1;
	var timer = null;
	var x =-width;
	var bOK = true;
	// 添加过渡
	var addTransition = function(){
		imgBox.style.transition = 'all 0.3s ease';
		imgBox.style.WebkitTransition = 'all 0.3s ease';
	}
	// 清除过度
	var removeTransition = function(){
		imgBox.style.transition = 'none';
		imgBox.style.WebkitTransition = 'none';
	}

	// 改变位置
	var setTransform = function(t){
		imgBox.style.transform = 'translate3d('+t+'px,0,0)';
		imgBox.style.WebkitTransform = 'translate3d('+t+'px,0,0)';
	}

	clearInterval(timer);
	timer = setInterval(function(){
		index++;
		addTransition();
		setTransform(-width*index);
	},3000);

	// 给图片大盒子加过渡完毕事件
	imgBox.addEventListener('transitionend',function(){
		if(index==9){
			index=1;
			x=-width;
		}
		if(index==0){
			index=8;
		}
		removeTransition();
		setTransform(-index*width);
		for(var i=0; i<pointList.length; i++){
			pointList[i].className = '';
		}
		pointList[index-1].className="now";
		bOK = true;
	},false);


	imgBox.addEventListener('webkitTransitionend',function(){
			if(index==9){
				index=1;
			}
			if(index==0){
				index=8;
			}
			removeTransition();
			setTransform(-index*width);
			for(var i=0; i<pointList.length; i++){
				pointList[i].className = '';
			}
			pointList[index-1].className="now";
			bOK = true;
		},false);

	// 加拖拽
	imgBox.addEventListener('touchstart',function(ev){
		if(!bOK)return;
		bOK = false;
		clearInterval(timer);
		removeTransition();
		var downX = ev.targetTouches[0].clientX;
		var disX = downX - x;

		function fnMove(ev){
			x = ev.targetTouches[0].clientX - disX;
			setTransform(x);
		}

		function fnEnd(ev){
			document.removeEventListener('touchmove',fnMove,false);
			document.removeEventListener('touchend',fnEnd,false);
			var upX = ev.changedTouches[0].clientX;
			var dX = upX - downX;
			if(Math.abs(dX)>50){
				if(downX>upX){
					index++;
				}else{
					index--;
				}	
			}
			x = -index*width;
			addTransition();
			setTransform(x);
			// 拖拽停止的时候开启定时器
			timer = setInterval(function(){
				index++;
				addTransition();
				setTransform(-width*index);
			},3000);
		}
		document.addEventListener('touchmove',fnMove,false);
		document.addEventListener('touchend',fnEnd,false);

		return false;
	},false);

}

