window.onload = function(){
	var str = '优秀的前端开发工程师,热爱前端,热爱编程';
	var oP = document.querySelector('.introduce1');
	for(var i=0; i<str.length; i++){
		var oSpan = document.createElement('span');
		oSpan.innerHTML = str.charAt(i);
		oP.appendChild(oSpan);
	}

	var aSpan = oP.children;
	var timer = null;
	var i = 0;
	timer = setInterval(function(){
		
		aSpan[i].style.opacity = 1;
		aSpan[i].style.textShadow = '0 0 0 #000';
		i++;
		if(i==str.length){
			clearInterval(timer);
		}
	},200)
}
