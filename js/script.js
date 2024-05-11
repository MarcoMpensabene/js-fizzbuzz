let fizz = "Fizz";
let buzz = "Buzz";
let fizzBuzz = "FizzBuzz";
for(let i = 1 ; i <= 100 ; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)){
        console.log(fizzBuzz)
        const div = document.querySelector("div.container");
        const p = document.createElement("p");
        p.append(fizzBuzz);
        div.append(p);
    } else if (i % 3 === 0){
        console.log(fizz)
        const div = document.querySelector("div.container");
        const p = document.createElement("p");
        p.append(fizz);
        div.append(p);
    }else if  ((i % 5 === 0)){
        console.log(buzz)
        const div = document.querySelector("div.container");
        const p = document.createElement("p");
        p.append(buzz);
        div.append(p);
    }  else{
        console.log(i)
        const div = document.querySelector("div.container");
        const p = document.createElement("p");
        p.append(i);
        div.append(p);
    }


}
