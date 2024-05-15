const repeatString = function(string, num) {
    let i = 0;

    words = "";

    if(num<0){
        return "ERROR";
    } else {
        while (i < num) {
            words += string;
            i++;
        }
        return words;
    }
    
};

// Do not edit below this line
module.exports = repeatString;
