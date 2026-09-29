import './dashBoard.css'
import ChangeTitle from '../../component/SharedComponents/ChangeTitle'
import { ToastContainer } from 'react-bootstrap'
import Sidebar from '../../component/SharedComponents/Sidebar/Sidebar'
import HeaderDash from '../../component/SharedComponents/HeaderDash/HeaderDash'

function DashBoard ( { children } ){
    return (
        <div className='w-full min-h-screen overflow-x-hidden bg-white relative'>
            <ToastContainer/>
            <ChangeTitle title={"MEI | Dashboard"} />
            <Sidebar/>
            <HeaderDash/>
            <div className='ms-[100px] p-5 mt-[100px]'>
                { children }
            </div>
        </div>
    )
}


export default DashBoard