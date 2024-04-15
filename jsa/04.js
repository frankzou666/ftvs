window.onload=function() {
    
    
   
    var person={"name":"tom"}
    function fn(obj){
        obj.name="jerry"
    }
    fn(person)
    console.log(person.name) //引用类型，函数调用时是地址传递的，所以输出“jerry"

}