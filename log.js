

    
    
// //patterns
//inverted right angle triangle
let m = 5;
for (let i = m; i >= 1; i--) {
    console.log("*".repeat(i));
}

 //inverted triangle pattern
 let n=5
for (let i = n; i >= 1; i--){
     let space=" ".repeat(n-i)
    let res =  "*".repeat(2*i-1)
   
    console.log(space+res)
}   
console.log("\n")
// // triangle pattern
let a = 5;
for (let i = 1; i <= a; i++) {
    let spaces = " ".repeat(a-i);
    let stars = "*".repeat(2*i-1);
    console.log(spaces+stars+spaces);
}
console.log("\n");

let b = 5;
for (let i = 1; i <= b; i++) {
   
    let stars = "*".repeat(b)
    console.log(stars)
}
    console.log("\n")
//hallow square
    let c= 5;
for (let i = 1; i <= c; i++) {
   if(i==1 || i==c)
   { let stars = "*".repeat(c)
        console.log(stars)
    }
   else {
      
       console.log("*"+" ".repeat(c-2)+"*")
    }
}
    console.log("\n")