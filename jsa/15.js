(function(){
   function Fn1(str){
    console.log(str)
    var fn3=function(){
        console.log("fn3 hello")
    }
   }
   Fn1.attr="hell attr"
   //通过new的方式可以定义一个对像，而来源于函数
   var obj = new Fn1()
   
   //prototype上增加一个方法
   Fn1.prototype.fn2=function() {console.log("fn2 hello")}

   Fn1.fn4=function(){
    console.log("fn3 hello")
   } 

   // 可以引用
   
   obj.fn2()
   obj.fn3()
   console.log(obj.attr)
   


})()