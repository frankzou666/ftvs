(function(){
    // 隐式原型，显式原型
   function Fn1(str){
    this.fn3=function(){
        console.log("fn3 hello")
    }
   }
 
   let a = new Fn1()
   Fn1.prototype.n=1

   Fn1.prototype={
    n:2,
    m:3
   }
   let b = new Fn1()

   console.log(a.n,a.m,b.n,b.m)
   console.log(a.__proto__)
   console.log(Fn1.prototype)
  

   


})()