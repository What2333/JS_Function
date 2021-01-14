/*
函数
    函数也是一个对象
    函数可以封装一些功能（代码），在需要时可以执行这些功能（代码）


* */


//三种函数的创建方法




//创建函数对象
let fun = new Function("console.log('hello 哈哈哈哈')")


/*
封装函数不会立马执行，在调用时才会执行
语法    函数对象（）
当调用函数时，函数中封装的代码会按顺序执行，
*/
fun();


/* 使用函数声明表达式来创建一个函数


  function 函数名（[形参1，形参2....形参n]）{语句}
  */




function fun2() {
    console.log("你是谁");
    alert("HF");
    document.write("好吧");
}
//console.log(fun2);
fun2();




//使用函数表达式来创建一个函数
//let 函数名 = function （[形参1，形参2，。。。形参n]）{语句}


let fun3 = function () {
    console.log("soshiyige")
};


fun3();




////////////////////////////////////////////////函数的参数///




/*
定义一个求两个数和的函数
可以在函数的（）中来指定一个或者多喝形参（形式参数）
多个形参之间使用，隔开。声明形参就相当于在函数内部声明了对应的变量
但是并不赋值


* */
function sum(a, b) {


    console.log(a + b);
}


/*在调用函数时，可以在（）中指定参数（实际参数）
实参将会函数中对应的赋值给形参
* */
sum(1, 2);//调用函数
sum(1232, 123);


//调用函数时解析器不会检查实参的类型
//所以要注意，是否会收到非法的参数，选哟对参数进行类型检查


sum(123, "hello");


//调用函数时，解析器也不会检查实参的数量
//多余实参不会被赋值
//如果实参的数量少于形参的数量，则没有对应的实参将是undefined
sum(123, 123, 123, true);
sum(123);




///////////////////////////函数的返回值




/*
  * 创建一个函数，用来计算三个数的和
  *
  * 可以使用 return 来设置函数的返回值
  *     语法：
  *        return 值
  *
  *     return后的值将会会作为函数的执行结果返回，
  *        可以定义一个变量，来接收该结果
  *
  *  在函数中return后的语句都不会执行
  *
  *     如果return语句后不跟任何值就相当于返回一个undefined，
  *     如果函数中不写return，则也会返回undefined
  *
  *     return后可以跟任意类型的值
  *
  */
function sum(a, b, c) {
    //alert(a + b +c);


    let d = a + b + c;


    return d;


    //return undefined;


}


//调用函数
//变量result的值就是函数的执行结果
//函数返回什么result的值就是什么
let result = sum(4, 7, 8);


//let result = alert("hello");


console.log("result = " + result);








///////////////////////////////参数可以是任何值




/*
  * 创建一个函数，可以在控制台中输出一个人的信息
  *     可以输出人的 name age gender address
  *
  * 实参可以是任意的数据类型，也可以是一个对象
  *     当我们的参数过多时，可以将参数封装到一个对象中，然后通过对象传递
  */
function sayHello(o) {


    //console.log("o = "+o);
    console.log("我是" + o.name + ",今年我" + o.age + "岁了," + "我是一个" + o.gender + "人" + ",我住在" + o.address);
}


//sayHello("猪八戒",28,"高老庄","男");
//创建一个对象
let obj = {
    name: "孙悟空",
    age: 18,
    address: "花果山",
    gender: "男"


};


//sayHello(obj);


/*
 * 实参可以是一个对象，也可以是一个函数
 */


function fun(a) {
    console.log("a = " + a);
    //a(obj);
}


//fun(sayHello);


//fun(function(){alert("hello")});


//fun(mianji(10));


/*
 * mianji()
 *     - 调用函数
 *     - 相当于使用的函数的返回值
 *
 * mianji
 *     - 函数对象
 *     - 相当于直接使用函数对象
 */








////////////////////返回值类型


function fun() {
    alert("函数要执行了~~~~");


    for (let i = 0; i < 5; i++) {




        if (i == 2) {
            //使用break可以退出当前的循环
            //break;


            //continue用于跳过当次循环
            //continue;


            //使用return可以结束整个函数
            //return;
        }


        console.log(i);
    }


    alert("函数执行完了~~~~");
}


fun();


/*
 * 返回值可以是任意的数据类型
 *     也可以是一个对象，也可以是一个函数
 */
function fun2() {


    //返回一个对象
    return { name: "沙和尚" };
}


let a = fun2();


console.log("a = " + a);


function fun5() {
    //在函数内部再声明一个函数
    function fun6() {
        alert("我是fun4");
    }


    //将fun6函数对象作为返回值返回
    return fun6;
}


//a = fun5();
//console.log(a);
//a();
fun5();






/////////立即执行函数




(function () {
    alert("我是一个弥明函数")
})();


(function (q, a) {


    console.log("q=" + q);
    console.log("a=" + a);
})(123, 456);


