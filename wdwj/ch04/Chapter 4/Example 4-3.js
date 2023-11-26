$(document).ready(
    function()

     
    {   
        //得到text或是html内容     
        console.log('HTML: ' + $('p').html());
        console.log('Text: ' + $('p').text());
        
        //3秒后，计数据器是同步执行的 setInterval(()=>{$('p').text('')},3000);
        setInterval(()=>{
            //所以只好在定时器内部再放置一个定时器
            //给定一个''，但是参数为空
            $('p').text('I will be remove content .... after 3 seconds...');
            setInterval(()=>{$('p').text('')},3000);
        },3000);

        
       
    }
);
