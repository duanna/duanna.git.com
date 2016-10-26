function getStyle(obj,name){
	if(obj.currentStyle){
		return obj.currentStyle[name];
	}else{
		return getComputedStyle(obj,false)[name];
	}
}	

	/*	
		默认：
		option = {
			'duration':500 执行时间，
			'type':执行类型，
					'liner'匀速运动
					'ease-in'加速运动
					'ease-out'减速运动 默认
			'complete':funtion(){}
		}

	*/	
function move(obj,json,option){
	option = option || {};
	option.duration = option.duration || 500;
	option.type = option.type || 'ease-out';
	var n = 0;
	var dis = {};
	var start = {};
	for(var name in json){

		start[name] = parseFloat(getStyle(obj,name));
		dis[name] = json[name] - start[name];
	}
	var count = Math.floor(option.duration/30);
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		n++;
		for(var name in json){

			switch(option.type){
				case "liner":
					var a = n / count;
					var cur = start[name]+dis[name]*a;
					break;
				case "ease-in":
					var a = n / count;
					var cur = start[name]+dis[name]*(a*a*a);
					break;
				case "ease-out":
					var a = 1-n/count;
					var cur = start[name] + dis[name]*(1-a*a*a);

				default:
					break;
			}
			
			if(name=="opacity"){

				obj.style[name] = cur;
				obj.style.filter = 'alpha(opacity='+cur*100+')';

			}else{

				obj.style[name] = cur + 'px';
			}
		}
		
		if(n==count){
			clearInterval(obj.timer);
			option.complete && option.complete();
		}
	},30);
}