+$(function($){
	"use strict";
	$(window).on('click', (e)=>{
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

	$.fn.DashBtn = function(){
		var self = this;
		this.mouseenter(()=>{
			self.animate({zindex:1}, {
				duration:1000,
				step:(now)=>{
					self.css({transform:'rotate('+(now*360)+'deg)'});
				},
				complete:()=>{
					self.css('zindex', 0);
				}
			});
		});
		return this;
	}
}(jQuery));
