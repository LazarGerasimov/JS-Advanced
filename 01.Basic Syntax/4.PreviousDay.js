function previousDay (year, month, day) {

    let date = new Date(year,month - 1,day);
    const previous = new Date(date.getTime());
    previous.setDate(date.getDate() - 1);
  
    let printedDay = previous.getDate();
    let printedMonth = previous.getMonth() + 1;
    let printedYear = previous.getFullYear()
  
    console.log(`${printedYear}-${printedMonth}-${printedDay} `)
     
  }