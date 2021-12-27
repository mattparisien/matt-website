import React, { forwardRef, useRef } from 'react'

function CursorFollower(props, ref) {
  return (
    <div className="cursor-follower -isFixed" id="cursor-follower" ref={ref}>
      
    </div>
  )
}

export default forwardRef(CursorFollower)
