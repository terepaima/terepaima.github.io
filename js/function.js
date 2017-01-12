$(document).ready(function() {
//Hide de los detalles de las habilidades
	$(".habilities div div").hide()
// Función para cada uno de los casos
//HTML
	$(".square.html").click(function(){
		$(this).toggleClass("square")
		$(this).toggleClass("html");
		$(this).toggleClass("habilitie-show");		
		$(this).children(".mate").css('background','#F16529');		
		if($(this).hasClass("habilitie-show")){
			$(this).children("div").show();
		}else{
			$(this).children("div").hide();
		}
		return false;
	});
//CSS
	$(".square.css").click(function(){
		$(this).toggleClass("square")
		$(this).toggleClass("css");
		$(this).toggleClass("habilitie-show");
		$(this).children(".mate").css('background','#129ED9');		
		if($(this).hasClass("habilitie-show")){
			$(this).children("div").show();
		}else{
			$(this).children("div").hide();
		}
		return false;
	});
//JS
	$(".square.js").click(function(){
		$(this).toggleClass("square")
		$(this).toggleClass("js");
		$(this).toggleClass("habilitie-show");
		$(this).children(".mate").css('background','#FAC552');		
		if($(this).hasClass("habilitie-show")){
			$(this).children("div").show();
		}else{
			$(this).children("div").hide();
		}
		return false;
	});
// Bootstrap
	$(".square.bootstrap").click(function(){
		$(this).toggleClass("square")
		$(this).toggleClass("bootstrap");
		$(this).toggleClass("habilitie-show");
		$(this).children(".mate").css('background','#573D7D');
		if($(this).hasClass("habilitie-show")){
			$(this).children("div").show();
		}else{
			$(this).children("div").hide();
		}
		return false;
	});
//Jquery
	$(".square.jquery").click(function(){
		$(this).toggleClass("square")
		$(this).toggleClass("jquery");
		$(this).toggleClass("habilitie-show");
		$(this).children(".mate").css('background','#78CFF5');		
		if($(this).hasClass("habilitie-show")){
			$(this).children("div").show();
		}else{
			$(this).children("div").hide();
		}
		return false;
	});

//Botones de menu, close/open
	$("#try").click(function(){
		$(this).parent(".leftside").hide();
		$(".rigthside").addClass("full-width");
		$(".menu-bottom").show();
	});
	$(".menu-bottom").click(function(){
		$(this).hide();
		$(".leftside").show();
		$(".rigthside").removeClass("full-width");
	});
//Acordeon
	$("#menu a").click(function(){
		$("li").removeClass("unico");
		$("li").addClass("menu-kid");
		$("li").children("div").removeClass("display");
		if($(this).children("li").hasClass("menu-kid")){
			$(this).children("li").toggleClass("menu-kid");
			$(this).children("li").toggleClass("unico");
			$(this).children("li").children("div").toggleClass("display");
		}
		return false;
	});
});
