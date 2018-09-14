$(function() {
	$(window).scroll(function() {

		let wScroll = $(this).scrollTop();
	
		$('div.bg-header div.silhouette').css({
			'transform' : 'translate(0px, '+ wScroll * 0.2 +'%)'
		});

		$('div.bg-header div.mountain').css({
			'transform' : 'translate(0px, '+ wScroll * 0.12 +'%)'
		});

		$('div.bg-header div.title').css({
			'-webkit-transform' : 'translate(0px, ' + wScroll * 1.02 + '%)',
			'-ms-transform' : 'translate(0px, ' + wScroll * 1.02 + '%)',
			'transform' : 'translate(0px, ' + wScroll * 1.02 + '%)'
		});
	})
}); 
		
