'use strict'
$(function(){
	// $('#newslist').on('mouseover','li',function(){
	// 	$(this).addClass('active').siblings()
	// 	.removeClass('active');
	// 	$('#newscontent dl').eq($(this).index())
	// 	.addClass('show')
	// 	.siblings().removeClass('show');
	// })
	// tab栏切换
	function tab(a,b,c){

		$(a).on('mouseover',b,function(){
			$(this).addClass('active').siblings()
			.removeClass('active');
			$(c).eq($(this).index())
			.addClass('show')
			.siblings().removeClass('show');
		})
	}

	tab('#newslist','li','#newscontent dl');
	tab('#flist','li','#imlist li');
	tab('#clist','li','#content ul');
	tab('#clisttwo','li','#contenttwo ul');
	tab('#rilist','li','#dolist .llist');
	

	$('#hdlist .piclist').hover(function(){
		$('#hdlist .piclist').removeClass('show_div');
		$(this).addClass('show_div');
	}) 

	$('.xlist').hover(function(){
		$('table').toggle();
	})

	// web图片

	$('.web').hover(function(){
		$('.web .pic').animate({
			'left':-215
		},300)
	},function(){
		$('.web .pic').animate({
			'left':0
		},300)
	})

})
