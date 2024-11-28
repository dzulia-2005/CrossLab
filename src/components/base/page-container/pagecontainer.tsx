import React, { PropsWithChildren } from 'react'

const Pagecontainer:React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default Pagecontainer