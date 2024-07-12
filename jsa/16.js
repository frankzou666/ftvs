(function(){
    // 隐式原型，显式原型
   function Fn1(str){
    var fn3=function(){
        console.log("fn3 hello")
    }
   }
 
   console.log(Fn1.prototype)
   var obj = new Fn1()
   console.log(obj.__proto__)
   console.log(Fn1.prototype===obj.__proto__) //true

   Fn1.prototype.fn2=function(){console.log("ok")}

//    let a={a:1}
//    console.log(a)
//    a.b=10
   


})()