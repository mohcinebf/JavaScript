window.onload = function(){
    //document.querySelector("h1").style.color="red"
    //window.alert("Hello From JS File");
    //document.write("<h1>Hello <span> Page</span></h1>");
    //console.log("Hello from JS")
    
    //v8:
    //console.table(["Mohcine","Peter","Jan"]);
    //console.log("Hello From JS %cFile","color: red; font-size: 40px");
    
    //----------v13 Var, Let, Const Compare----------:

    //Redeclare:
    //var a = 1;
    //var a = 2;
    
    //Variable Scope Drama [Added To Window]:
    //var aabb = 1;
    // in console you can access the variable with window.aabb or aabb
    //let aacc = 1;
    // in console you can access the variable only with aacc

    //----------v14 String Syntax And Character Escape Sequences----------

    //console.log('Elzero web "School"');
    //console.log("Elzero web 'School'");
    //console.log('Elzero web \'School\'');
    //console.log("Elzero web \"School\"");
    //console.log("Elzero \\web School");
    //console.log("Elzero \
//web \
//School");
    //console.log("Elzero\nweb\nSchool");


    //----------v16.Template Literals Template Strings----------

    //let a = "We Love";
    //let b = "JavaScript";
    //let c = "And";
    //let d = "Programming";
    
    //console.log(`${a} "" '' \\ ${b}
//${c} ${d} ${2+2}`);


 //----------v19.Unary Plus And Negation Operators----------
 //var a = +"100";
//console.log(100);
//console.log(+"100"); //convert String to number
//console.log(+"-100");
//console.log(+"Ossama");//"NAN"
//console.log(+0xff);
//console.log(+null);//0
//console.log(+false);//0
//console.log(+true);//1

//console.log(-"100"); //convert String to number: -100
//console.log(-"-100");// :100
//console.log(-"Ossama");// :"NAN"
//console.log(-null);//-0
//console.log(-false);//-0
//console.log(-true);//-1


 //----------v20.Type Coercion----------
// let a = "10";
// let b = 20;
// let c = true;
// console.log(a+b);//1020
// console.log(+a+b);//30
// console.log(a - b);//-10
// console.log(b - a);//10
// console.log("Mohcine"-b);//NAN
// console.log(+"");//0
// console.log(""-2);//-2
// console.log(false-true);//-1
// console.log(a + b + c);//1020true
// console.log(+a + b + c);//31


 //----------v22.Operators Challenges----------
/* Challenge 1 */
// let a = 10;
// let b = "20";
// let c = 80;

// console.log(++a + +b++ + +c++ - +a++);// 11+20+80-11 => 100; a=12, b=21, c=81 
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(++a + -b +c++ - -a++ + +a);//13 + -21 + 81 - -13 + 14 => 100; a=14, b=21, c=82 
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);//81 + 21 + 13 * 21 - 22 * 13 + 12 - 1=> 100; a=12, b=22, c=81 
// console.log(a);
// console.log(b);
// console.log(c);
/*
[++a] [+]
[++a]
Value: 11
Explain: Preorder
[+]
Explain: plus, Unary Plus, concatebation
*/

/* Challenge 2 */

// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;
// // 100/20 = 5

// //Only use variables value
// //Do not use variable twice
// 100
// console.log(-d*+e); // 2000
// console.log(); // 173


 //----------23.Number----------
//  console.log(1000000);
//  console.log(1_000_000);
//  console.log(1e6);
//  console.log(10**6);
//  console.log(1000000.000);
//  console.log(Number.MAX_SAFE_INTEGER);
//  console.log(Number.MAX_VALUE);


//----------24.Number Methods----------
// console.log((100).toString());
// console.log(110.10.toString());
// console.log(120..toString());

// console.log(130.55555.toFixed(2));//round up and it convert number to a string

// console.log(Number("100 Mohcine"));//NAN
// console.log(+"100 Mohcine");//NAN
// console.log(parseInt("140.40 Mohcine"));//140
// console.log(parseInt("Mohcine 100 Mohcine"));//NAN
// console.log(parseFloat("150.50 Mohcine"));

// console.log(Number.isInteger("100"));//false because it's a string
// console.log(Number.isInteger(100.50));//false because it's a float
// console.log(Number.isInteger(100));//true because it's an integer

// console.log(Number.isNaN(+"100 Mohcine"));//true


//----------25.Math Object----------
// console.log(Math.round(99.2));//99
// console.log(Math.round(99.5));//100

// console.log(Math.ceil(99.2));//100
// console.log(Math.floor(99.6));//99

// console.log(Math.min(10,20,100,-100,90));
// console.log(Math.max(10,20,100,-100,90));

// console.log(Math.pow(2,3));//8

// console.log(Math.random());// get a random number

// console.log(Math.trunc(99.5));//Returns the integral part : 99


//----------26.Number Challenge----------

let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find smallest number in all variables and return integer
console.log(Math.trunc(Math.min(a,b,c,d)));

// Use variable a + d one time to get the needed output
console.log(Math.pow(a,Math.floor(d))); // 10000 

// Get Integer "2" from d variable with 4 methods

console.log(parseInt(d));
console.log(Math.trunc(d));
console.log(Math.floor(d));
console.log(Math.round(d));

// Use variables b + d to get this values
console.log((parseInt(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.round((parseInt(b) / Math.ceil(d)))); // 67 => number



};

