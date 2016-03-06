+$(function(){
	"use strict";
	$(window).on('click', (e)=>{
		console.log(e.pageX +":" + e.pageY);
		let elem = document.createElement('div');
		elem.id = 'ci';
		$('#ci').css({
			top:e.pageY,
			left:e.pageX,
			width:"100px",
			height:"100px",
			bacjgroundColor:"red",
		});
	});
});
