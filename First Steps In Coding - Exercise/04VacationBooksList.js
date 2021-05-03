function vacationBooksList(input){
    let countPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysPerReads = Number(input[2]);
    let totalTimeForBook = countPages/pagesPerHour;
    let time = totalTimeForBook/daysPerReads;
    console.log(time)
}
vacationBooksList(["212", "20", "2"]) 