/* (()=>{
    function sayHi(text1:string){
        return 'hello world auto'+text;
    }
    let text='boy';
    console.log(sayHi(text));
})() */


/* (()=>{
    interface IPerson{
        firstName:String,
        lastName:string
    };
    function getPerson(person:IPerson){
        return 'firstname:'+person.firstName

    }
    const person={
        
        lastName:'不败'
        
    }
    console.log(getPerson(person));

})() */

(()=>{
    interface IPerson{
        firstName:string,
        lastName:string
    };
    class Person{
        firstName:string;
        lastName:string;
        constructor( firstName:string,lastName:string){
            this.firstName=firstName;
            this.lastName=lastName;
        }
    }
    function getPerson(person:IPerson){
        return 'firstname:'+person.firstName

    }
    const person= new Person('smit','good')
    console.log(getPerson(person));

})()  