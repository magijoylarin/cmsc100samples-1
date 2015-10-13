$(document).ready(function(){
	$("#intro").hide();
	
	/*$("p.p1").mouseover(function(){
		$("#show_this").fadeIn();
	});
	$("p.p1").mouseout(function(){
		$("#show_this").fadeOut();
	});*/

	$("p.p1").on({
		"mouseover": function(){
			$("#show_this").fadeIn();},
		"mouseout": function(){
		$("#show_this").fadeOut();}
	});

	$(".textbox").keyup(function(){
		a = Number($("#a").val());
		b = Number($("#b").val());
		sum = a+b;
		$("#sum").val(sum);
	});

	//$("#newContent").load("index.html", function(resp){
		//alert("Content updated!");
	//});

	$("button[name='get_students']").click(function(){
		
		$.post("http://localhost:5000/degree-programs",{
			code:"BSF",
			name: "BS Forestry"
		},function(resp){
				console.log(resp);
		});
	});


	$("button[name='reverse']").click( function() {	//when the button named reverse is clicked
		$('input.cb').each(function() {					//every input tag with bc as name
   			$(this).prop('checked', !$(this).is(':checked'));		//changes the state of the checkbox
		});
		return false;	//so that the checkmark will remain
	});
});
