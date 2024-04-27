function factorialNumber(number) {

    if (number === 0 || number === 1){
        
        return 1

    }else if
    
    (Number.isInteger(number)) {

    
        let i=(number-1)

        while (i>=1) {

          number= number*i

          i-- 
        }
    return number
  
    }else{

    return "number is type INT"
  }
}

console.log(factorialNumber(3))