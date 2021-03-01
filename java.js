       
function play()
{
	var WORDS     = ["cricket", "football", "hockey", "badminton","tennis"];
        var SCRAMBLED = ["tekccri", "lalbofot","ykceoh", "mbniadnot","ninset"];
        var count = 0;
        var playing = true;
        var randomNumber = Math.floor(Math.random() * WORDS.length);
		var a = 0;
		 var randomWord = SCRAMBLED[randomNumber];
       
		
			while ( a === 0) 
		{
 

         

           

           var userInput = prompt("Can you unscramble this word?" + "\n" + randomWord);

          

           if (userInput == WORDS[randomNumber])
			   {
			  
            alert("Great job!");
			alert("Your Score is "+(100-count*10)+"/100");
			a = 1;
           } 
		   
		   else  {
            alert("Sorry you were incorrect. Try again ");
			count = count + 1;
			a = 0;
			var key = confirm("Take a Hint ?");
			if(key === true)
			{
				alert("It is a Sport!");
			}
           }

        }
    
        alert("Good Bye!");
}