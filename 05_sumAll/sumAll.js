const sumAll = function(num1, num2) {

    let i;
    let lastNumber;
    let sum = 0;

    if(num1 < num2) {
        i= num1;
        lastNumber = num2;
    } else {
        i= num2;
        lastNumber = num1;
    }
    
    if(num1>0 && num2>0 && typeof(num1)=== "number" && typeof(num2)=== "number") {
        while(i <=  lastNumber){
            sum += i ;
            i++;
        }

        return sum;
    } else{
        return "ERROR";
    }
     

    
};

// Do not edit below this line
module.exports = sumAll;
