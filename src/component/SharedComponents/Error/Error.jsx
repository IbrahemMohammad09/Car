import React from 'react'

const Err = ({err}) => {
    return (
        err && <div className='text-danger bg-red-100 rounded-md p-2 mt-2 mb-[-10px]'>{err}</div>
    )
}

export default Err