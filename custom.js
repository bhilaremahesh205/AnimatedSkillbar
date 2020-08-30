$(window).on('load',function(){
	$('.skill_row_percent_view').each(function(){
		thisVal = $(this).text();
		$(this).parent('.skill_row_percent').animate({width:thisVal},2000)
	});
});