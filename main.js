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
let a = "10";
let b = 20;
let c = true;
console.log(a+b);//1020
console.log(+a+b);//30
console.log(a - b);//-10
console.log(b - a);//10
console.log("Mohcine"-b);//NAN
console.log(+"");//0
console.log(""-2);//-2
console.log(false-true);//-1
console.log(a + b + c);//1020true
console.log(+a + b + c);//31










};

