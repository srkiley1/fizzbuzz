$(document).ready( function(){

	 
		for (number=1; number<=100; number++){
	
			if (number % 15 === 0){
				$("#append2").append("<li>FizzBuzz</li>");
			}
			else if (number % 3 === 0){
				$("#append2").append("<li>Fizz</li>");
			}
			
			else if(number % 5=== 0){
				$("#append2").append("<li>Buzz</li>");
			}
			else {
				$("#append2").append("<li>"+number+"</li>");
			}
		}
	
});
