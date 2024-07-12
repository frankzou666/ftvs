

$(document).ready(function(){
    let NAME_SPACE='/term'
    let window_width = $(window).width();
    let window_height = $(window).height();
    //服务器端口
    let port = 9999
    let cmdBuf = ''
    let term = new Terminal({
        cols: Math.floor(window_width/9),
        rows: Math.floor(window_height/20),
        useStyle:false,
        convertEol: true,
        cursorBlink:true,
        cursorStyle:null,
    });

    //定义socket
    let socket = io('http://'+document.domain+':'+port+NAME_SPACE)
    //连接
    socket.on('connect',function(){
        term.open(document.getElementById('term'))
        term.write('\n请输入命令:')
    })


    
    //开始侦听xterm的键盘事件
    term.onKey(function(event){
        //当回车时，需要把命令发送给服务器端
        if (event.key==='\r'){
            socket.emit('clientMessage',{'data':cmdBuf})
            cmdBuf=''
            term.write('\x1b[2K\r') 
            term.write('请输入命令:')
        }  else if (event.key==='\x7F'){
            //去掉最一个字符
            if (cmdBuf.length>0) {
                cmdBuf = cmdBuf.slice(0,-1)
                term.write('\x1b[2K\r') 
                term.write('请输入命令:')
                term.write(cmdBuf)
            }
        }
        else {
            cmdBuf=cmdBuf+event.key
            //删除当前行，并返回光标处
            term.write('\x1b[2K\r') 
            term.write('请输入命令:')
            term.write(cmdBuf)
        
        }
        
        
    })

    //接收socket响应
    socket.on('clientResponse',function(data){
        console.log(data)
        term.write(data.data)
    })
   

})