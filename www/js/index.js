$(function(){
	
	//window.location.href = 'http://cadigbh.atspace.cc/PreInscricaoJovensMicroregional/';
	//var ref = cordova.InAppBrowser.open('http://cadigbh.atspace.cc/PreInscricaoJovensMicroregional/', '_self', 'location=yes');
	
	document.addEventListener("deviceready", onDeviceReady, false);
	
});

function onDeviceReady() {
	window.open = cordova.InAppBrowser.open;
}
	
/*$(document).on('pagechange',function(){

	

});*/