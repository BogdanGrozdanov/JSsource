function isPasswordGuess(input){
    let password = "s3cr3t!P@ssw0rd";
    let guesPassword=input[0];

    if(password == guesPassword)
    {
       console.log("Welcome");
    }
    else
    {
        console.log("Wrong password!");
    }
}
isPasswordGuess(["dflnzdfjngvb'i"])