window.onload=function() {
    /*
       什么是"对像"?  存放在heap内存的变量？

       为什么要“对像”？

       如何创建“对像”？

       如何使用“对像”？
    */

    //工厂模式创建对像   
    // const  PersonFactory = function(name ){
    //      let obj = new Object();
    //      obj.userName= name;
    //      obj.sayHello = function() {
    //         //在对像中访问自己就你要用this
    //         console.log(this.userName)
    //      };

    //      return obj;

    // }

    //构造函数模式
    function Person (name) {
      this.name= name;
      this.sayHello=function() {
        console.log(this.name)
      }
        

    }

    //const person = new Person();
    let person1 = new Person("frank");
    let person2 = new Person("sminit");

    person1.sayHello();
    person2.sayHello();
}