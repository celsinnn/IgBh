$(function(){
	
	//window.location.href = 'http://cadigbh.atspace.cc/PreInscricaoJovensMicroregional/';
	//var ref = cordova.InAppBrowser.open('http://cadigbh.atspace.cc/PreInscricaoJovensMicroregional/', '_self', 'location=yes');
	
	//document.addEventListener("deviceready", onDeviceReady, false);
	
	
	//bindClicks();

	
});

/*function bindClicks(){
	console.log('bindClicks(');
	
	$('a').each(function(){
		
		console.log('unbind click');
		$(this).unbind( "click" );
		
		console.log('bind click');
		$(this).click(function(ev){
			ev.stopPropagation();
			ev.stopPropagation();
			ev.preventDefault();
			href = $(this).attr('href');
			
			console.log('$.mobile.loadPage');
			$.mobile.loadPage( href );
			
			
			/*$.ajax({
					url: href,
					success: function(data){
								pageId = $.mobile.activePage.attr("id");
								$("#"+pageId+' div[data-role="content"]').html(data);
								bindClicks();
							},
					dataType: 'jsonp'
				});*/
			
			
			/*$.get(href, function(data){
				pageId = $.mobile.activePage.attr("id");
				$("#"+pageId+' div[data-role="content"]').html(data);
				bindClicks();
			});*/
		/*})
	});
}*/