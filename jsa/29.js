(function(){
    var btns = document.getElementsByTagName('button');
    var btnsLength = btns.length
    //如果这里是var i=0; i<...； 因为i会提升到全局变量，在这个循环执行后最后全部是i=4,而ES6中使用let,这个i是局部变量了，所以正常
    for (var i=0;i<btnsLength;i++){
        var  btn = btns[i]
        //如果不用let,就把这个i放到btn对像本身上去
        btn.index=i
        btn.onclick=function() {
            alert("第I："+(this.index+1)+" button")
        }
    }

})()