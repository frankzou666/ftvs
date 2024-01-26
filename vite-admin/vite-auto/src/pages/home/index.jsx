

import { Button  } from 'antd'
import { useNavigate } from 'react-router-dom'

import Header from '@/components/header'
import goto from '@/api'
import './home.styl'

function Home() {
    const navigate = useNavigate();
    return(
        <div className='P-home'>
            <h1>home page</h1>
            <div className='ipt-con'>
                <Button type='primary' onClick={()=>{navigate('/login')}}>返回</Button>
                <Button type='primary' onClick={()=>{goto('/login')}}>组件外跳转</Button>
            </div>
        </div>
    )

}


export default Home