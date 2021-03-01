function play()
{
    var n,x;
    var count = 0;
    n = Math.floor(Math.random() * 10);
    while( x !== n)
    {
        x = Number(prompt("Enter your Guess"));
        if( x < n)
        {
            alert("Oops ! Your Guess is low ! Try again");

            count = count +1;
        }
        else if(x>n)
        {
            alert("Oops ! Your Guess is High ! Try again");
            count = count +1;
        }
        else
        {
            alert("Congratulations ! Your Guess is correct");
            alert("Your Score is "+ (100-count*10)+"/100");
        }
    }
}