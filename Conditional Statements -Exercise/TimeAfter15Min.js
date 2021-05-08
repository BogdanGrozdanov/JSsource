function after15Min(input){
let hour = Number(input[0]);
let minute = Number(input[1]);

    if (minute < 45)
    {
        minute += 15;
    }
    else if (minute >= 45)
    {
        minute = (minute + 15) - 60;
        hour += 1;
        if (hour === 24)
        {
            hour = 0;
        }
    }

    if (minute < 10)
    {
        console.log(`${hour}:0${minute}`);
    }
    else
    {
        console.log(`${hour}:${minute}`)
    }
}

after15Min(["0", "50"])