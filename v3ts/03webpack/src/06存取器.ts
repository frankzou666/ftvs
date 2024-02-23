(()=>{
    /* 什是么函数重载？根据传入的类型不同，调用不同的逻辑 有什么用 */

    
     //重载
    function add (a:string,b:string):string
    function add (a:number,b:number):number

    function add (a:string|number,b:string|number):string|number {
        if ((typeof a === 'string') && (typeof b === 'string')){
            return a+b;
        } else if  ((typeof a === 'number') && (typeof b === 'number')){
            return a+b;
        }

    }
    // 如果传非法参数，如何处理？,这下就报红了
    console.log(add('a','1'));

   




})()