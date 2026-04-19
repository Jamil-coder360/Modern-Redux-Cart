import React from 'react'

const Button = ({Tagname="button" ,children  , className="" ,...props}) => {
  return (
    <Tagname {...props}  className={`${className} bg-amber-600 text-black rounded-xl py-3 px-10`}>
    {children}
    </Tagname>
  )
}

export default Button