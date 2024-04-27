function leapyear(date) {

    if ((date % 4 === 0 && date % 100 !== 0) || date % 400 === 0){

      return "leap year!"

    }
    
    else{
        
       return "not leap year"

    }
}

console.log(leapyear(2024))






