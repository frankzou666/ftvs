window.onload=function() {
    
    
    /*

    //2, js数据类型
    //   两大类： 基本类型,引用（对像）类型
        基本类型:Number(可以任意数字，如整数，小数，正负等),string,boolean,undefined,null
        引用： Object（任何引用都是Object，）,Function,Array(Function(可以执行的对像）和Array(数字下标属性))

    */   
     
    a = 1000.121212121232323  
    b= {}   //object类型
    arr=[]   //arrary,单个元素可以不同，元素是有序存放的
    function fun1(){};
    //typeof()返回字符串,instanceof
    //尽量用"==="，因为"=="会做隐式转换
    console.log(typeof(a))  //number
    console.log(typeof(b))  //object
    console.log(typeof(fun1) )  //function
    console.log(typeof(arr)) //object
    console.log((arr instanceof Object)) //true
    console.log((b==Object)) //true
    console.log((a instanceof Number)) //为什么是false?
    
}