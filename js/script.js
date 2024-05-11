let fizz = "Fizz";
let buzz = "Buzz";
let fizzBuzz = "FizzBuzz";
for(let i = 1 ; i <= 100 ; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)){
        console.log(fizzBuzz)
        const div = document.querySelector("div.container");
        const fizzbuzzP = document.createElement("p");
        fizzbuzzP.className = "fizzbuzz";
        fizzbuzzP.append(fizzBuzz);
        div.append(fizzbuzzP);
    } else if (i % 3 === 0){
        console.log(fizz)
        const div = document.querySelector("div.container");
        const fizzP = document.createElement("p");
        fizzP.className = "fizz";
        fizzP.append(fizz);
        div.append(fizzP);
    }else if  ((i % 5 === 0)){
        console.log(buzz)
        const div = document.querySelector("div.container");
        const buzzP = document.createElement("p");
        buzzP.className = "buzz";
        buzzP.append(buzz);
        div.append(buzzP);
    }  else{
        console.log(i)
        const div = document.querySelector("div.container");
        const number = document.createElement("p");
        number.className = "number";
        number.append(i);
        div.append(number);
    }


}
