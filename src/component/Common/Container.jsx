import React from 'react'

const Container = ({children,className="",...props}) => {
  return (
    <div {...props} className={`container mx-auto ${className}`}>
        {children}
    </div>
  )
}

export default Container