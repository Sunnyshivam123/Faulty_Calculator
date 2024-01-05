/* Create a Faulty Calculator using Javascript
   This Faulty calculator does the following:
   1. It takes two number from the user as a input
   2. It performs wrong Operations as follows

   + ---> -
   * ---> +
   - ---> /
   / ---> **

*/


let random=Math.random();
console.log(random);


let a=prompt("Enter First Number");
let b=prompt("Enter Second Number");
let c=prompt("Enter Operation");

let obj={
    "+":"-",
    "-":"/",
    "*":"+",
    "/":"**"
}



if (random>0.1) {
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);

}
else{
c=obj[c]; 
alert(`The result is ${eval(`${a} ${c} ${b}`)}`);

}

