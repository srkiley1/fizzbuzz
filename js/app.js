$(document).ready(function(){

	for (i=1; i<=20; i++){
	
		if (i % 15 === 0){
			$("#append2").append("<li>FizzBuzz</li>");
			}
		else if (i % 3 === 0){
			$("#append2").append("<li>Fizz</li>");
			}
		
		else if(i % 5=== 0){
		$("#append2").append("<li>Buzz</li>");
			}
		else {
		$("#append2").append("<li>i</li>");
			}
			
	}
});