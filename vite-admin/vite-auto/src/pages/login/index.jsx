import { defaultIconPrefixCls } from "antd/es/config-provider"
import { useNavigate } from 'react-router-dom'

import imgLogo from './logon.png'
import { Button, Input } from 'antd'

import './login.styl'

function Login() {
    //创建一个navigate对像
    const navigate = useNavigate();
    return (
        <div className="P-logo">
                <img src={imgLogo} className="logo"></img>
                <div className="ipt-con">
                    <Input placeholder="帐号"></Input>
                </div>
                <div className="ipt-con">
                    <Input.Password placeholder="密码" />
                </div>
                <div className="ipt-con">
                    {/* 跳转 */}
                    <Button type="primary" block={true} onClick={()=>{navigate('/home')}}>登录</Button>
                </div>
        </div>
    )

}

export default Login