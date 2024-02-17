(()=>{
//定义一个接口，相当于自定义一个类型了
interface IPerson {
    //表示name是只读的
    name:String,
    //?表示这个属性可有可无
    age?:number,
};

//就不能随意给person对像新加属性了
const person:IPerson={
    name:"ddd",
   // age:18,
}

console.log(person.name)

})()