//JavaScript Document
$(document).ready(function()
	{
		$('#alleyway_popup').hide();
		$('.overlay').hide();
	
		$('#ap').click(function()
		{
			$('#alleyway_popup').fadeIn().show();
			$('#alleyway_overlay').fadeIn().show();
		})
	
		$('.opt_out').click(function(e)
		{
			e.preventDefault();
			$('#alleyway_popup').fadeOut();
			$('#alleyway_overlay').fadeOut();
		})
});

$(document).ready(function()
	{
		$('#incident_popup').hide();
		$('.overlay').hide();
	
		$('#ip').click(function()
		{
			$('#incident_popup').fadeIn().show();
			$('#incident_overlay').fadeIn().show();
		})
	
		$('.opt_out').click(function(e)
		{
			e.preventDefault();
			$('#incident_popup').fadeOut();
			$('#incident_overlay').fadeOut();
		})
});
	
$(document).ready(function()
	{
		$('#sex_popup').hide();
		$('.overlay').hide();
	
		$('#sp').click(function()
		{
			$('#sex_popup').fadeIn().show();
			$('#sex_overlay').fadeIn().show();
		})
	
		$('.opt_out').click(function(e)
		{
			e.preventDefault();
			$('#sex_popup').fadeOut();
			$('#sex_overlay').fadeOut();
		})
});
		
$(document).ready(function()
	{
		$('#mess_popup').hide();
		$('.overlay').hide();
	
		$('#mp').click(function()
		{
			$('#mess_popup').fadeIn().show();
			$('#mess_overlay').fadeIn().show();
		})
	
		$('.opt_out').click(function(e)
		{
			e.preventDefault();
			$('#mess_popup').fadeOut();
			$('#mess_overlay').fadeOut();
		})
});

$(document).ready(function()
	{
		$('#kindness_popup').hide();
		$('.overlay').hide();
	
		$('#kp').click(function()
		{
			$('#kindness_popup').fadeIn().show();
			$('#kindness_overlay').fadeIn().show();
		})
	
		$('.opt_out').click(function(e)
		{
			e.preventDefault();
			$('#kindness_popup').fadeOut();
			$('#kindness_overlay').fadeOut();
		})
});

$(document).ready(function()
	{
		$('.right_arrow').on('click', function(){
			var currentImg = $('.active_1');
			var nextImg= currentImg.next();
			
			if(nextImg.length){
				currentImg.removeClass('active_1').css('z-index, -10')
				nextImg.addClass('active_1').css('z-index,10')
			}
	});
	
		$('.left_arrow').on('click', function(){
			var currentImg = $('.active_1');
			var prevImg= currentImg.prev();
			
			if(prevImg.length){
				currentImg.removeClass('active_1').css('z-index, -10')
				prevImg.addClass('active_1').css('z-index,10')
			}
	});
});

$(document).ready(function()
	{
		$('.right_arrow').on('click', function(){
			var currentImg = $('.active_2');
			var nextImg= currentImg.next();
			
			if(nextImg.length){
				currentImg.removeClass('active_2').css('z-index, -10')
				nextImg.addClass('active_2').css('z-index,10')
			}
	});
	
		$('.left_arrow').on('click', function(){
			var currentImg = $('.active_2');
			var prevImg= currentImg.prev();
			
			if(prevImg.length){
				currentImg.removeClass('active_2').css('z-index, -10')
				prevImg.addClass('active_2').css('z-index,10')
			}
	});
});

$(document).ready(function()
	{
		$('.right_arrow').on('click', function(){
			var currentImg = $('.active_3');
			var nextImg= currentImg.next();
			
			if(nextImg.length){
				currentImg.removeClass('active_3').css('z-index, -10')
				nextImg.addClass('active_3').css('z-index,10')
			}
	});
	
		$('.left_arrow').on('click', function(){
			var currentImg = $('.active_3');
			var prevImg= currentImg.prev();
			
			if(prevImg.length){
				currentImg.removeClass('active_3').css('z-index, -10')
				prevImg.addClass('active_3').css('z-index,10')
			}
	});
});

$(document).ready(function()
	{
		$('.right_arrow').on('click', function(){
			var currentImg = $('.active_4');
			var nextImg= currentImg.next();
			
			if(nextImg.length){
				currentImg.removeClass('active_4').css('z-index, -10')
				nextImg.addClass('active_4').css('z-index,10')
			}
	});
	
		$('.left_arrow').on('click', function(){
			var currentImg = $('.active_4');
			var prevImg= currentImg.prev();
			
			if(prevImg.length){
				currentImg.removeClass('active_4').css('z-index, -10')
				prevImg.addClass('active_4').css('z-index,10')
			}
	});
});


$(document).ready(function()
	{
		$('.right_arrow').on('click', function(){
			var currentImg = $('.active_5');
			var nextImg= currentImg.next();
			
			if(nextImg.length){
				currentImg.removeClass('active_5').css('z-index, -10')
				nextImg.addClass('active_5').css('z-index,10')
			}
	});
	
		$('.left_arrow').on('click', function(){
			var currentImg = $('.active_5');
			var prevImg= currentImg.prev();
			
			if(prevImg.length){
				currentImg.removeClass('active_5').css('z-index, -10')
				prevImg.addClass('active_5').css('z-index,10')
			}
	});
});

$(document).ready(function()
	{
		$('.right_arrow').on('click', function(){
			var currentImg = $('.active_6');
			var nextImg= currentImg.next();
			
			if(nextImg.length){
				currentImg.removeClass('active_6').css('z-index, -10')
				nextImg.addClass('active_6').css('z-index,10')
			}
	});
	
		$('.left_arrow').on('click', function(){
			var currentImg = $('.active_6');
			var prevImg= currentImg.prev();
			
			if(prevImg.length){
				currentImg.removeClass('active_6').css('z-index, -10')
				prevImg.addClass('active_6').css('z-index,10')
			}
	});
});



