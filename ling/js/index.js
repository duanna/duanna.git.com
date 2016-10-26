window.onload = function(){
	var oList = document.getElementById("list");
	var oLi = oList.children;
	var oBtn = document.getElementById('btn');
	var oBtns = oBtn.children;
	var oGame_info = document.getElementById('game_info');
	var timer = null;
	var key = 0;
	var squery = 0;
	for(var i=0; i<oBtns.length; i++){
		oBtns[i].index = i;
		oBtns[i].onmouseenter = function(){

			
			for(var j=0; j<oBtns.length; j++){
				oBtns[j].className = '';
				oLi[j].className = '';
			}
			this.className = "show";
			// oLi[this.index].className = "show";
			move(oList,{
				'left': -this.index*616
			})


		}
	}

	// 添加定时器
	timer = setInterval(run,2000);
	function run(){
		key++;
		if(key>oLi.length-1){
			oList.style.left = 0;
			key = 1;
		}
		move(oList,{
			'left': -key*616
		})
		squery++;
		if(squery>oBtns.length-1){
			squery = 0;
		}

		for(var i=0; i<oBtns.length; i++){
			oBtns[i].className = "";
		}

		oBtns[squery].className = 'show';
	}

	oGame_info.onmouseover = function(){
		clearInterval(timer);
	}

	oGame_info.onmouseout = function(){
		timer = setInterval(run,2000);
	}


}