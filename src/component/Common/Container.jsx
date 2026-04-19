import React from 'react'

const Container = ({children,className="",...props}) => {
  return (
    <div {...props} className={`container mx-auto px-5 lg:px-0 ${className}`}>
        {children}
    </div>
  )
}

export default Container