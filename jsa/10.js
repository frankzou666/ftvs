

(function(){
    var SID= Math.round(Math.random()*100000)
    var WS_URL="ws://localhost:8090/ws/"+SID
    var socket = new WebSocket(WS_URL)

    var $closeBtn=document.getElementById("closeBtn")
    var $sendBtn=document.getElementById("sendBtn")
    //发送时的内容
    $sendBtn.addEventListener('click',function(){
        var $inputMsg = document.getElementById("inputMsg")
        var inputValue;
        if($inputMsg) {
             inputValue = $inputMsg.value
             if (inputValue.length>0) {
                 socket.send(inputValue)
                 $inputMsg.value=""
             }
        }
    })
    $closeBtn.addEventListener('click',function(){
        socket.close(3000)
        appendMsg("WS关闭服务器成功")
    })
    //建立连接
    socket.onopen=function(event){
        appendMsg("WS服务器建立成功")
    }

    //关闭windows窗口
    window.onbeforeunload=function(){
        socket.close();
    };

    //接收消息
    socket.onmessage=function(msg){
        appendMsg(msg.data)
        
    }
    //发送消息
    

    //增加新消息
    function appendMsg(msg) {
        var $msg = document.getElementById("msg")
        var $p = document.createElement("p")
        $p.innerHTML=msg
        $msg.appendChild($p)
    }

    

})()