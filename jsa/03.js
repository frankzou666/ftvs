window.onload=function() {
    
    //undefined和null有什么区别。 undefined表示变了定义了但是没有值， null表示定义了，值为null
    var a;
    console.log(a)  //undefined

    var b =null      //type 为Object,但是null又是基本类型
    console.log(b)   //null
    console.log(typeof(b))

    //什么时赋值null? 一旦给一个变量给a=null, 一般初始赋值，表示这个对像以后会是object类型。给一个对像赋值b=null,这个对像内存会被释放。

    
}