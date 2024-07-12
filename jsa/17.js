(function(){
    // 隐式原型，显式原型
   function Fn1(str){
    this.fn3=function(){
        console.log("fn3 hello")
    }
   }
 
   let obj = new Fn1()
   Fn1.prototype.fn2=function(){console.log("ok")}

   obj.fn3() //构造函数自己上就可以找到了
   obj.fn2() //在自己上没有找到，在prototype上才找到，也可以执行

  

   


})()