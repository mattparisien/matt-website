import React from 'react'
import Preloader from '../Preloader/Preloader'

function LoadHider({ children, isLoading }) {
  return (
    <div>
      {isLoading ? <Preloader/> : children}
    </div>
  )
}

export default LoadHider
