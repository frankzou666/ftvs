

import { Button ,Card,Menu } from 'antd'
import { HomeOutlined, UserOutlined } from '@ant-design/icons'
import { useNavigate,useLocation } from 'react-router-dom'
import './header.styl'


function Header(props) {
    const {title} = props;
    const navigate = useNavigate();
    const location = useLocation();
    //在不同的组件之间进行跳转
    const mneuItems=[
        { label:"Home",icon:<HomeOutlined />, key:'home',onClick:()=>{navigate('/home')}},
        { label:"Account" ,icon:<UserOutlined /> , key:'account', onClick:()=>{navigate('/account')}},

    ]
    return(
            <Card className='M-Header'>
                <div className='header-wrapper'>
                    <div className='logo-con'>XXX后台管理系统:{title}</div>
                    <div className='meun-con'>
                        <Menu mode="horizontal" selectedKeys={location.pathname} items={mneuItems}></Menu>

                    </div>
                    <div className='Opt-con'>
                        <Button shape='circle' type='primary' >Moon</Button>
                        <Button shape='circle' type='dashed' danger>Theme</Button>
                    </div>
                </div>

            </Card>

    )
}

export default Header