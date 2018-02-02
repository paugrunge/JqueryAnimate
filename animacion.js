$(document).ready(function(){
	var btnAnimar =  $('#btnAnimar');
	btnAnimar.on("click", animar);
});

function animar(){
 	var divContenedor = $('#contenedor');
    var cuadrado =  $('#cuadrado');
    var divHeight = divContenedor.height();
    var footerOffsetTop = cuadrado.offset().top;
    var divLeft = divContenedor.offset().left;
    var cuadradoLeft = cuadrado.offset().left;
    var topToBottom = divHeight - footerOffsetTop;
    var mov = divLeft - cuadradoLeft;
    cuadrado.delay(100).animate({top: topToBottom +'px', left: mov + 200 +'px'}, 1000); 
}