const reverseString = function(string) {
    /* STEPS
    1.-TAKE IN A STRING
    2.-EXTRACT THE LAST LETTER OF THE STRING
    3.-THAT LETTER IS ADD TO A NEW EMPTY STRING
    4.-REPEAT THE PROCESS WITH ALL THE LETTERS OF THE STRING
    5.- RETURN THE NEW WORD
    
    */
    let i = 0;
    let reverseStr = "";

    while (i<string.length){
        let lastLetterString = Array.from(string);
        reverseStr += lastLetterString[string.length-(i+1)];
        i++; 
    };

    return reverseStr;
}

// Do not edit below this line
module.exports = reverseString;
