// using recursion function to solve factorial of a number
function factorial(number){
    if(number<0){
      throw new Error('number should not be negative');  
    }
    if(number<=1){
        return 1;
    }
    return number * factorial(number-1);
}
console.log(factorial(5));