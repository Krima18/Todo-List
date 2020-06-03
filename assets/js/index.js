//for toggling input section

$(".fa-plus").on("click", function(){
	$("#input").fadeToggle(200);
});


//for toggling strike function

$("table").on("click", "td",function(){

	$(this).toggleClass("strike");

});

//for deleting todo

$("table").on("click",".fa-trash-alt",function(event){
	$(this).parent().parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
	
});

//for grabing input text and adding to the list

$("input[type='text'").on("keypress", function(event){

	if(event.which === 13)
	{
		var text = $(this).val();
		$(this).val("");
		if(text !== "")
		{
			$("table").append("<tr><td><span><i class='far fa-trash-alt'></i></span>"+text+"</td></tr>");
		}
	}
});



