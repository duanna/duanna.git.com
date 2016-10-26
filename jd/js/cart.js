window.onload = function(){
	show();
}

function show(){
	var deleteBox = document.querySelectorAll('.delete_box');
	// console.log(deleteBox);
	var win = document.querySelector('.jd_win');
	var winCon = document.querySelector('.jd_win_box');
	for(var i=0; i<deleteBox.length; i++){
		deleteBox[i].onclick = function(){
			document.body.style.position = 'position';
			var top = document.body.scrollTop + (window.innerHeight - winCon.offsetHeight)/2;
			win.style.display = 'block';
		}	
	}
}