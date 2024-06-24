import React from 'react'

const Loading = ({ loading, style }) => {
  return (
    loading && <div className={`w-[60px] h-[60px] rounded-full border-[4px] border-b-transparent border-solid border-__brown bg-transparent animate-loading z-50 ${style}`}></div>
  )
}

export default Loading