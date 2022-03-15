import React from 'react'
import Link from '../Link/Link'

function Logo() {
  return (
    <div className="c-logo">
     <Link isRouterLink={true} href="/">
      Matt
    </Link>  
    </div>
   
  )
}

export default Logo