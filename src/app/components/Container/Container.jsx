import React from 'react'

const CommanContainer = ({children}) => {
  return (
    <div className='md:container md:mx-auto'>
      {children}
    </div>
  )
}

export default CommanContainer
