(()=>{
    
    //布尔
    // let flag:boolean=true;
    // //number
    // let num:number =10;
    // //可以单引可以双引
    // let str:String = "hello";
    // let flag:undefined=undefined;
    // let nul:null=null;
    // console.log(flag);
    // console.log(nul);
    // //undefined和null有什么用途？ 可以作为其他的类型的子类型，比如可以把undefined和null的变量给他类型
    // // 要去掉strict这个配置
    // let num:number;
    // num=undefined;
    // num=nul;

    //定义
    let arr1:number[]=[1,2,3];
    //泛型的写法
    let arr2:Array<number>=[10,10,20];
    //元组的个数和类型都已经被定义好了
    let arr3:[number,string]=[10,"20"];
    console.log(arr1);
    console.log("---------");

    //每个数据值都称为元素，只能是里面的值
    enum Color{
        red,
        green,
        black
    }
    let  color:Color = Color.black;
    //输出元素的编号2
    console.log(color)
    //输出字符串就是enum的值
    console.log(Color[2])



})()