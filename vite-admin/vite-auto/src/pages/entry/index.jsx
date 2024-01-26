
//导入系统组件和第三方组件
import { Outlet } from 'react-router-dom'

//导入自定义组件
import Header from '@/components/Header'

//导入自定义CSS
import './entry.styl'

function Entry(){
    return(
        <div className='M-entry'>
            <Header />
            <div className='main-container'>
                <Outlet></Outlet>

            </div>

        </div>
    )

}

export default Entry