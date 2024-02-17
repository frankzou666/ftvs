(()=>{
   
    //定义了一个接口
    interface IPerson{
        alert():any
    }

     //在类里实现
    class Person implements IPerson{
        alert() {
            throw new Error("good")
        }
        //实现的接口中的方法后，还可以增加自定义的方法
        log(){
            console.log('consolelog')
        }
        
        
    }
     //使用
    const person = new Person();
    person.log();
    person.alert();
 
})()