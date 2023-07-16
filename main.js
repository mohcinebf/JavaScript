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





};

