import React from 'react'

const Button = ({Tagname="button" ,children  , className="" ,...props}) => {
  return (
    <Tagname {...props}  className={`${className} bg-yellow-300 border-blur text-center text-black rounded-xl py-3 px-10`}>
    {children}
    </Tagname>
  )
}

export default Button