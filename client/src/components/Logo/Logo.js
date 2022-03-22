import React from 'react'
import Link from '../Link/Link'

function Logo() {
  return (
    <div className="c-logo -fade-up-load -delay-1">
     <Link isRouterLink={true} href="/">
      Matt Parisien
    </Link>  
    </div>
   
  )
}

export default Logo